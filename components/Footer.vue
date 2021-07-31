<template>
  <footer class="footer">
    <nav class="footer__nav">
      <nuxt-link to="/a-propos">A propos</nuxt-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 0 42px;

  &__nav {
    a {
      color: $dark-purple;
      text-decoration: none;
      cursor: default;
      font-family: $font-roboto;

      &:visited,
      &:hover {
        color: $dark-purple;
        cursor: pointer;
      }
    }
  }
}
</style>
