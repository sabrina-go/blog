<template>
  <div class="index">
    <div class="index__container">
      <h1 class="index__title">blog-nuxt</h1>
      <div :v-if="articles" class="articles">
        <template v-for="article in articles">
          <ArticleCard :key="article.slug" :article="article" class="article" />
        </template>
      </div>
      <div :v-if="remainingArticles" class="articles-remaining">
        <template v-for="article in remainingArticles">
          <ArticleCard
            :key="article.slug"
            :article="article"
            class="article-remaining"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard';
export default {
  components: { ArticleCard },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch();

    const numberOfArticleChunk = Math.floor(articles.length / 6);

    return numberOfArticleChunk >= 1
      ? {
          articles: articles.slice(0, numberOfArticleChunk * 6),
          remainingArticles: articles.slice(numberOfArticleChunk * 6),
        }
      : { remainingArticles: articles };
  },
};
</script>

<style lang="scss">
.index {
  background: linear-gradient(
    170deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(220, 246, 246, 0.7) 30%,
    rgba(200, 241, 241, 0.7) 50%,
    rgba(178, 235, 235, 0.7) 70%,
    rgba(62, 214, 221, 0.63) 100%
  );
  min-height: 100vh;

  &__container {
    margin: 0 auto;
    width: 90%;

    @include device-is('tablet') {
      width: 820px;
    }
  }
}

.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include device-is('tablet') {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 180px 70px 180px;
    gap: 32px 20px;
  }
}

.article {
  width: 400px;
  height: 180px;
  margin: 32px 0 0;

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

.articles-remaining {
  margin: 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px 20px;
  justify-content: center;

  @include device-is('tablet') {
    justify-content: left;
  }
}

.article-remaining {
  width: 400px;
  height: 180px;
}
</style>
