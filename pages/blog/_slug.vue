<template>
  <div class="article">
    <div class="article__container">
      <article class="article__content">
        <div class="article-content__date">
          {{ formatDate(article.updatedAt) }}
        </div>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();
    return { article };
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
  background-image: url('/post-background.png'), $main-gradient;
  background-position: top;
  background-repeat: no-repeat;

  &__container {
    min-height: 100vh;
    width: 100%;
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
  }

  &__content {
    margin: 128px 0;
    width: 820px;
    padding: 21px;

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
    color: $waterloo;
    font-family: $font-roboto;
    font-weight: $font-light;
    font-size: 0.75rem;
    margin-bottom: 14px;
  }
}

.nuxt-content {
  h1 {
    font-family: $font-roboto;
    font-weight: $font-light;
    font-size: 1.875rem;
    line-height: 3rem;
    margin-bottom: 14px;

    @include device-is('tablet') {
      font-size: 2.1875rem;
      line-height: 3.5rem;
    }
  }

  h2 {
    font-family: $font-roboto;
    font-weight: $font-light;
    font-size: 1.625rem;
    line-height: 2.625rem;
    margin-bottom: 14px;

    @include device-is('tablet') {
      line-height: 3rem;
      margin-bottom: 14px;
    }
  }

  p {
    font-family: $font-roboto;
    font-size: 0.875rem;
    line-height: 1.4125rem;
    margin: 7px 0;
    text-align: justify;
  }
}
</style>
