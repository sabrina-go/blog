<template>
  <div class="logo">
    <NuxtLink to="/">
      <img
        class="logo__image"
        src="logo.png"
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
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 0 42px;

  &__image {
    height: 100px;
  }
}
</style>
