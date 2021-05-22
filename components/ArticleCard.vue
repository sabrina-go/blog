<template>
  <NuxtLink
    class="article-card"
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
  >
    <h2 class="article-card__title">{{ article.title }}</h2>
    <p>{{ article.description }}</p>
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
};
</script>

<style lang="scss" scoped>
.article-card {
  background-color: rgba($white, 0.5);
  box-shadow: $shadow;
  border-radius: 16px;
  outline: none;
  color: $bright-gray;
  text-decoration: none;
  padding: 14px;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.03);
    background-color: rgba($white, 0.6);
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
    font-size: 1.4rem;
    word-wrap: break-word;
  }
}
</style>
