<template>
  <NuxtLink
    class="article-card"
    :to="{ name: 'blog-slug', params: { slug: article.uid } }"
  >
    <h2 class="article-card__title">{{ article.data.title[0].text }}</h2>
    <prismic-rich-text
      class="article-card__description"
      :field="article.data.excerpt"
    />
    <nuxt-img
      class="article-card__icon"
      provider="prismic"
      :src="iconUrl"
      alt=""
    />
  </NuxtLink>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iconUrl() {
      return this.article.data.icon.data.image.url;
    },
  },
};
</script>

<style lang="scss">
.article-card {
  background-color: rgba($white, 0.7);
  box-shadow: $shadow;
  border-radius: 16px;
  outline: none;
  text-decoration: none;
  padding: 14px;
  transition: all 0.1s;
  position: relative;

  &:hover {
    transform: scale(1.02);
    background-color: rgba($white, 0.8);
    box-shadow: $shadow-hover;
  }

  &__container {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }

  &__title {
    font-family: $font-open-sans;
    font-weight: $font-semi-bold;
    font-size: 1.2rem;
    line-height: 1.9rem;
    word-wrap: break-word;
    margin-bottom: 7px;
    color: $bright-gray;
    @include device-is('tablet') {
      font-size: 1.4rem;
      line-height: 2.4375rem;
    }
  }

  &__description {
    max-width: 300px;
    display: block;

    p {
      font-family: $font-roboto;
      font-weight: $font-light;
      font-size: 0.875rem;
      line-height: 1.2rem;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }
  }

  &__icon {
    display: none;

    @include device-is('tablet') {
      display: block;
      position: absolute;
      bottom: 14px;
      right: 14px;
      width: 60px;
      margin-left: 7px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
