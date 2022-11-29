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

<style lang="scss">

[data-theme="dark"] {
  --bg-primary: #111827;
  --bg-secondary: #1F2937;
  --bg-tertiary: #374151;
  --font-color: #ffffff;
  --font-color-secondary: #9CA3AF;
}
[data-theme="light"] {
  --bg-primary: #f4f4f4;
  --bg-secondary: #ffffff;
  --bg-tertiary: #ffffff;
  --font-color: #111827;
  --font-color-secondary: #374151;
}

body {
  background-color: var(--bg-primary);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
