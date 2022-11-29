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
  --accent: #10B981;
  --accent-hover: #059669;
}
[data-theme="light"] {
  --bg-primary: #f4f4f4;
  --bg-secondary: #ffffff;
  --bg-tertiary: #ffffff;
  --font-color: #111827;
  --font-color-secondary: #374151;
  --accent: #10B981;
  --accent-hover: #059669;
}

:root {
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-base: 1rem;
  --font-lg: 1.125rem;
  --font-xl: 1.25rem;

  --btn-padding: 0.35rem 1rem;
  --btn-radius: 0.25rem;
  --btn-color: #ffffff;
}

body {
  background-color: var(--bg-primary);
  font-size: var(--font-base);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
    height: auto;
  }

  div {
    i {
      color: var(--font-color);
    }
  }
}
</style>
