<template>
  <div class="account">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Account",
  components: {Navbar},
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
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>