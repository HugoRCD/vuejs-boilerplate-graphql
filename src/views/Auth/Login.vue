<template>
  <div class="login">
    <LoginModal/>
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";

export default {
  name: "Login",
  components: {LoginModal}
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}
</style>