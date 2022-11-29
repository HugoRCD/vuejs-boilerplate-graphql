<template>
  <button class="btn" :class="color">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  padding: var(--btn-padding);
  border-radius: var(--btn-radius);
  border: none;
  cursor: pointer;
  &.primary {
    background-color: var(--accent);
    color: var(--btn-color);
    &:hover {
      background-color: var(--accent-hover);
    }
  }
  &.secondary {
    background-color: var(--accent);
    color: var(--btn-color);
    &:hover {
      background-color: var(--accent-hover);
    }
  }
}
</style>