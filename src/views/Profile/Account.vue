<template>
  <div class="account">
    <div>
      {{ $t("account") }} of {{ user.username }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  computed: {
    user() {
      return this.$store.getters.user;
    },
    role() {
      if (this.user.role === 1) {
        return "admin";
      } else if (this.user.role === 0) {
        return "user";
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>