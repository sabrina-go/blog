<template>
  <div class="author">
    <div class="author__name">{{ author.name }} -</div>
    <template v-if="author.linkedin">
      <a class="author__linkedin" :href="author.linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
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
