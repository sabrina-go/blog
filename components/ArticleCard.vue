<template>
  <NuxtLink
    class="article-card"
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
  >
    <h2 class="article-card__title">{{ article.title }}</h2>
    <p class="article-card__description">{{ article.description }}</p>
    <div class="article-card__icon">
      <img :src="icon.image" role="presentation" alt />
    </div>
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
  data() {
    return {
      icon: {},
    };
  },
  async fetch() {
    const icons = await this.$content('icons')
      .only(['name', 'image'])
      .where({ name: this.article.icon })
      .limit(1)
      .fetch();

    this.icon = icons[0];
  },
};
</script>

<style lang="scss" scoped>
.article-card {
  background-color: rgba($white, 0.7);
  box-shadow: $shadow;
  border-radius: 16px;
  outline: none;
  color: $bright-gray;
  text-decoration: none;
  padding: 14px;
  transition: all 0.1s;
  position: relative;

  &:hover {
    transform: scale(1.03);
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
    font-size: 1.4rem;
    word-wrap: break-word;
    margin-bottom: 7px;
  }

  &__description {
    font-family: $font-roboto;
    font-weight: $font-light;
    font-size: 0.875rem;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
    display: block;
  }

  &__icon {
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
</style>
