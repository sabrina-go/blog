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
  background-color: $white;
  box-shadow: 0 10px 20px 0 #6b6880;
  border-radius: 16px;
  outline: none;
  color: $bright-gray;
  text-decoration: none;
  padding: 14px;

  &__title {
    font-family: $font-open-sans;
    font-weight: $font-semi-bold;
    font-size: 1.4rem;
    word-wrap: break-word;
  }
}
</style>
