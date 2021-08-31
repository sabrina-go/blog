<template>
  <div class="page">
    <article class="page__container">
      <prismic-rich-text :field="document.title" />
      <prismic-rich-text :field="document.body" />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('page', params.slug);

    return document
      ? { document: document.data }
      : error({ statusCode: 404, message: 'Page not found' });
  },
};
</script>

<style lang="scss">
.page {
  &__container {
    margin: 0 auto;
    width: 100%;
    padding: 21px;
    display: flex;
    flex-direction: column;
    background-color: $white;
    border-radius: 16px;
    box-shadow: 0 10px 20px 0 rgba(108, 104, 128, 0.4);
    color: $bright-gray;

    @include device-is('tablet') {
      width: 820px;
      padding: 21px 35px;
    }
  }
}
</style>
