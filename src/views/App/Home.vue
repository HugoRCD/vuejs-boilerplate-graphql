<template>
  <div class="home">
    {{ $t("home") }}
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped lang="scss">
.home {
  color: var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>