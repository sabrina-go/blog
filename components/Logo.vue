<template>
  <div class="logo">
    <NuxtLink to="/">
      <img
        class="logo__image"
        src="@/assets/images/logo.png"
        alt="We are the knowledge - Page d'accueil"
      />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 0 42px;

  &__image {
    height: 75px;

    @include device-is('tablet') {
      height: 100px;
    }
  }
}
</style>
