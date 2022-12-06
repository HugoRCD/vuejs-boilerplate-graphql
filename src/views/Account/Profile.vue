<template>
  <div class="profile middle full-height">
    <div>
      {{ $t("profile") }} of {{ user.username }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
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