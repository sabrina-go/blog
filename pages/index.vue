<template>
  <div class="index">
    <div class="index__container">
      <div class="index__articles">
        <template v-for="article in articles">
          <ArticleCard
            :key="article.uid"
            :article="article"
            class="index__article"
          />
        </template>
      </div>
      <div :v-if="remainingArticles" class="index__articles-remaining">
        <template v-for="article in remainingArticles">
          <ArticleCard
            :key="article.uid"
            :article="article"
            class="index__article-remaining"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'post'),
      {
        fetchLinks: ['icon.image'],
        orderings: '[my.post.date desc]',
      }
    );
    const articles = document.results;
    const numberOfArticleChunk = Math.floor(articles.length / 6);

    return numberOfArticleChunk >= 1
      ? {
          articles: articles.slice(0, numberOfArticleChunk * 6),
          remainingArticles: articles.slice(numberOfArticleChunk * 6),
        }
      : { articles: [], remainingArticles: articles };
  },
};
</script>

<style lang="scss">
.index {
  &__container {
    margin: 0 auto;
    width: 90%;

    @include device-is('tablet') {
      width: 820px;
    }
  }

  &__articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include device-is('tablet') {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 180px 70px 180px;
      gap: 20px;
    }
  }

  &__article {
    width: 400px;
    height: 180px;
    margin: 20px 0 0;

    @include device-is('tablet') {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    &:nth-of-type(1n) {
      grid-column: span 2;
    }

    &:nth-of-type(2n) {
      grid-column: span 1;
      grid-row: span 2;
    }

    &:nth-of-type(3n) {
      grid-column: span 1;
      grid-row: span 2;
    }

    &:nth-of-type(6n-1) {
      grid-column: span 1;
      grid-row: span 2;
    }

    &:nth-of-type(6n) {
      grid-column: span 2;
      grid-row: span 1;
    }
  }

  &__articles-remaining {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    justify-content: center;

    @include device-is('tablet') {
      justify-content: left;
    }
  }

  &__article-remaining {
    width: 400px;
    height: 180px;
  }
}
</style>
