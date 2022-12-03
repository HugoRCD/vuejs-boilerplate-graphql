<template>
  <div class="about">
    {{ $t("about") }}
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped lang="scss">
.about {
  color: var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>