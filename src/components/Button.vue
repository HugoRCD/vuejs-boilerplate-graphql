<template>
  <button class="btn" :class="color" @click="onClick">
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
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
}
</script>

<style scoped lang="sass">
.btn
  color: #fff
  border: none
  padding: 0.5rem 1rem
  border-radius: 0.25rem
  font-size: 1rem
  font-weight: 500
  cursor: pointer
  &:hover
    background-color: #5d5d5d
  &.primary
    background-color: #2563EB
    &:hover
      background-color: #5d5d5d
  &.secondary
    background-color: #1F2937
    color: #fff
    &:hover
      background-color: #5d5d5d
</style>