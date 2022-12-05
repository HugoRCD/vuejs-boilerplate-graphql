<template>
  <div class="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  },
  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('login', {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
      });
    }
  }
}
</script>

<style scoped>

</style>