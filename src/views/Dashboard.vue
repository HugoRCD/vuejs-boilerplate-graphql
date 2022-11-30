<template>
  <div class="dashboard">
    <h1>Bienvenue {{ username }}</h1>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      username: null,
    }
  },
  created() {
    this.username = this.$store.getters.user.username;
    console.log(this.username);
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    font-size: 2rem;
  }
}
</style>