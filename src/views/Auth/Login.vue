<template>
  <div class="login middle">
    <div class="container">
      <div class="login-header center">
        <h1 class="title">{{ $t("login") }}</h1>
        <p class="text">{{ $t("loginText") }}</p>
      </div>
      <div class="login-form" v-if="!loading">
        <div class="form-item">
          <label class="label" for="email">{{ $t("email") }}</label>
          <input class="input" type="email" id="email" placeholder="contact@gmail.com" v-model="user.email"/>
        </div>
        <div class="form-item">
          <label class="label" for="password">{{ $t("password") }}</label>
          <input class="input" type="password" id="password" placeholder="123soleil" v-model="user.password"/>
        </div>
        <div class="form-item my-lg">
          <button class="btn-primary fullwidth" @click.prevent="login()">{{ $t("login") }}</button>
        </div>
      </div>
      <div class="login-footer center" v-else>
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        <p>{{ $t("loading") }}</p>
      </div>
      <div class="login-footer">
        <p>{{ $t("noAccount") }}
          <router-link :to="{name: 'Signup'}">{{ $t("signup") }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/graphql/mutations/login.gql";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      toast_success: {
        title: this.$t("loginSuccess"),
        toast: true,
        icon: "success",
        timer: 1500,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: false
      },
      toast_error: {
        title: this.$t("loginError"),
        toast: true,
        icon: "error",
        timer: 1500,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: false
      }
    };
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    async login() {
      this.$store.dispatch("loading", true);
      this.$apollo.mutate({
        mutation: login,
        variables: {
          username: this.user.email,
          password: this.user.password
        }
      }).then((response) => {
        const token = response.data.authLogin.token;
        const user = response.data.authLogin.user;
        if (token) {
          this.$store.dispatch("login", {token, user});
          this.$store.dispatch("loading", false);
          this.$router.push({name: "Home"});
          this.$swal(this.toast_success);
        } else {
          this.$swal(this.toast_error);
        }
      }).catch(() => {
        this.$store.dispatch("loading", false);
        this.$swal(this.toast_error);
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>