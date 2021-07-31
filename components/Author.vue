<template>
  <div class="author">
    <div class="author__name">Sabrina -</div>
    <a
      class="author__linkedin"
      href="https://www.linkedin.com/in/sabrina-gomes-11098513b/"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Author',
};
</script>

<style lang="scss">
.author {
  display: flex;
  flex-direction: row;
  gap: 7px;
  justify-content: flex-end;

  &__name {
    color: $rhythm;
  }

  &__linkedin {
    text-decoration: none;
    color: $rhythm;
  }
}
</style>
