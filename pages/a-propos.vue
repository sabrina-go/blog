<template>
  <div class="about">
    <div class="about__container">
      <article class="about__content">
        <prismic-rich-text class="about__title" :field="document.title" />
        <prismic-rich-text :field="document.body" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.getSingle('about');

    return document
      ? { document: document.data }
      : error({ statusCode: 404, message: 'Page not found' });
  },
};
</script>

<style lang="scss">
.about {
  &__container {
    margin: 0 auto;
    width: 90%;

    @include device-is('tablet') {
      width: 820px;
    }
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
</style>
