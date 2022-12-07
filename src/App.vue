<template>
  <EnvChecker/>
  <router-view/>
</template>

<script>

import EnvChecker from "@/components/EnvChecker.vue";

export default {
  name: "App",
  components: {EnvChecker},
};
</script>

<style lang="scss">
</style>
