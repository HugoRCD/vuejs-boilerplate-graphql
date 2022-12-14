<template>
  <EnvChecker/>
  <router-view/>
</template>

<script>
import EnvChecker from "@/components/EnvChecker.vue";

export default {
  name: "App",
  components: {EnvChecker},
  created() {
    if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken") && localStorage.getItem("user")) {
      this.$store.dispatch("login", {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
        user: JSON.parse(localStorage.getItem("user"))
      });
    }
  }
};
</script>

<style lang="scss">
</style>
