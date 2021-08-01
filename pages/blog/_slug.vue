<template>
  <div class="article">
    <div class="article__container">
      <article class="article__content">
        <div class="article-content__date">
          {{ formatDate(article.date) }}
        </div>
        <div class="article-content__content">
          <prismic-rich-text :field="article.title" />
          <prismic-rich-text :field="article.body" />
        </div>
        <Author class="article-content__author" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('post', params.slug);
    return document
      ? { article: document.data }
      : error({ statusCode: 404, message: 'Page not found' });
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
      ],
    };
  },
  computed: {
    title() {
      return this.article.title[0].text;
    },
    description() {
      return this.article.excerpt[0].text;
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('fr', options);
    },
  },
};
</script>

<style lang="scss">
.article {
  min-height: 100vh;
  width: 100%;
  background-image: url('/post-background.png');
  background-position: top;
  background-repeat: no-repeat;

  &__container {
    min-height: 100vh;
    width: 100%;
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
    padding-bottom: 42px;
  }

  &__content {
    width: 820px;
    padding: 21px;
    display: flex;
    flex-direction: column;

    @include device-is('tablet') {
      padding: 21px 35px;
    }

    background-color: $white;
    border-radius: 16px;
    box-shadow: 0 10px 20px 0 rgba(108, 104, 128, 0.4);
    color: $bright-gray;
  }
}

.article-content {
  &__date {
    color: $rhythm;
    font-family: $font-roboto;
    font-weight: $font-light;
    font-size: 0.75rem;
    margin-bottom: 14px;
  }

  &__content {
    flex: 1;
  }

  &__author {
    color: $bright-gray;
    font-family: $font-open-sans;
    font-weight: $font-normal;
    font-size: 1rem;
    line-height: 1.625rem;
  }
}

.nuxt-content {
  flex: 1;

  h1 {
    color: $rhythm;
    font-family: $font-open-sans;
    font-weight: $font-semi-bold;
    font-size: 2.5rem;
    line-height: 4.0625rem;
    margin-bottom: 28px;

    @include device-is('tablet') {
      font-size: 2.1875rem;
      line-height: 3.5rem;
    }
  }

  h2 {
    color: $rhythm;
    font-family: $font-open-sans;
    font-weight: $font-semi-bold;
    font-size: 1.5rem;
    line-height: 2.4375rem;
    margin-bottom: 14px;
  }

  h3 {
    color: $rhythm;
    font-family: $font-open-sans;
    font-weight: $font-semi-bold;
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 14px;
  }

  p {
    color: $dark-purple;
    font-family: $font-roboto;
    font-weight: $font-light;
    font-size: 1rem;
    line-height: 1.625rem;
    margin: 14px 0;
    text-align: justify;
  }
}
</style>
