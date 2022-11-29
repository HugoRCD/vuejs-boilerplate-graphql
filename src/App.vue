<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
// create sass for a dark theme using variables
body
  background-color: #111827
  color: #fff
  font-family: 'Inter', sans-serif
  font-size: 16px

img
  max-width: 100%
</style>
