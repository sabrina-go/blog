const PrismicDom = require('prismic-dom');
const Prismic = require('@prismicio/client');

const endpoint = 'https://sabrina-go-blog.cdn.prismic.io/api/v2';

const feedOptions = {
  title: 'We are the knowledge',
  description: 'Inspirer et partager la connaisance.',
  id: process.env.BASE_URL,
  link: process.env.BASE_URL,
  favicon: `${process.env.BASE_URL}/favicon.ico`,
  copyright: 'All rights reserved 2021, Sabrina Gomes',
};

export function createFeed(type = 'rss2') {
  return {
    async create(feed) {
      feed.options = feedOptions;
      const posts = await getAllPost();
      posts.forEach((post) => {
        const url = `${process.env.BASE_URL}/blog/${post.uid}`;
        feed.addItem({
          date: new Date(post.data.date),
          id: url,
          link: url,
          title: PrismicDom.RichText.asText(post.data.title),
          content: PrismicDom.RichText.asHtml(post.data.body),
        });
      });
    },
    type,
  };
}

async function getAllPost() {
  const client = Prismic.client(endpoint);
  const { posts, totalPages } = await getPostsInPage(client, 1);
  for (let page = 2; page <= totalPages; page++) {
    const { posts: nextPageRoutes } = await getPostsInPage(client, page);
    posts.push(...nextPageRoutes);
  }
  return posts;
}

async function getPostsInPage(client, page) {
  const { results, total_pages: totalPages } = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    {
      pageSize: 100,
      page,
    }
  );

  return { totalPages, posts: results };
}
