<template>
  <div class="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
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

<style scoped>

</style>