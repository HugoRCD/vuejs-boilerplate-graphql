<template>
  <div class="contact">
    {{ $t("contact") }}
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped lang="scss">
.contact {
  color: var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>