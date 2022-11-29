<template>
  <div class="theme-switcher" @click="changeTheme">
    <box-icon v-if="theme === 'dark'" name="sun" size="md" :color="theme === 'dark' ? '#ffffff' : '#111827'"></box-icon>
    <box-icon v-else name="moon" size="md" :color="theme === 'dark' ? '#ffffff' : '#111827'"></box-icon>
  </div>
</template>

<script>
export default {
  name: "theme-switcher",
  data() {
    return {
      theme: "dark"
    }
  },
  methods: {
    changeTheme() {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        this.theme = "light";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        this.theme = "dark";
      }
    }
  },
}
</script>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>