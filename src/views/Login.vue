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
          <button class="btn-primary" @click="login()">{{ $t("signup") }}</button>
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

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$swal.fire({
        title: this.$t("login"),
        text: this.$t("loginText"),
        icon: "success",
        confirmButtonText: this.$t("ok"),
      });
    },
  },
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