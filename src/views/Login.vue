<template>
  <div class="login">
    <div class="card login-container">
      <div class="login-header">
        <h1>{{ $t("login") }}</h1>
        <p>{{ $t("loginText") }}</p>
      </div>
      <div class="login-form">
        <div class="form-group">
          <label class="label" for="email">{{ $t("email") }}</label>
          <input class="input" type="email" id="email" placeholder="contact@gmail.com" v-model="user.email"/>
        </div>
        <div class="form-group">
          <label class="label" for="password">{{ $t("password") }}</label>
          <input class="input" type="password" id="password" placeholder="123soleil" v-model="user.password"/>
        </div>
        <div class="form-group">
          <button class="btn-primary" @click.prevent="login()">{{ $t("login") }}</button>
        </div>
      </div>
      <div class="login-footer">
        <p>{{ $t("noAccount") }}
          <router-link to="/signup">{{ $t("signup") }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import gql from "graphql-tag";

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
        position: "top-right",
        duration: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      },
      toast_error: {
        title: this.$t("loginError"),
        toast: true,
        icon: "error",
        position: "top-right",
        duration: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      }
    };
  },
  methods: {
    async login() {
      this.$apollo.mutate({
        mutation: gql`mutation login {
        authLogin(username: "${this.user.email}", password: "${this.user.password}") {
          token
          user {
            id
            username
            email
            role
          }
        }
      }`
      }).then((response) => {
        const token = response.data.authLogin.token;
        const user = response.data.authLogin.user;
        if (token) {
          this.$store.dispatch("login", { token, user });
          localStorage.setItem("token", response.data.authLogin.token);
          this.$router.push("/dashboard");
          this.$swal(this.toast_success);
        } else {
          this.$swal(this.toast_error);
        }
      }).catch(() => {
        this.$swal(this.toast_error);
      });
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);

  .login-container {
    width: 400px;
    padding: 2rem;

    .login-header {
      text-align: center;

      h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.9rem;
        color: var(--text-muted);
      }
    }

    .login-form {
      margin-top: 2rem;

      .form-group {
        margin-bottom: 1rem;
      }
    }

    .login-footer {
      margin-top: 1rem;
      text-align: center;

      p {
        font-size: 0.9rem;
        color: var(--text-muted);
      }
    }
  }
}
</style>