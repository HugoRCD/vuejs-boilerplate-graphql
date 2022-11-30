<template>
  <div class="signup">
    <div class="card signup-container">
      <div class="signup-header">
        <h1>{{ $t("signup") }}</h1>
        <p>{{ $t("signupText") }}</p>
        <p>{{ user }}</p>
      </div>
      <div class="signup-form">
        <div class="form-group">
          <label class="label" for="email">{{ $t("email") }}</label>
          <input class="input" type="email" id="email" placeholder="contact@gmail.com" v-model="user.email"/>
        </div>
        <div class="form-group">
          <label class="label" for="password">{{ $t("password") }}</label>
          <input class="input" type="password" id="password" placeholder="123soleil" v-model="user.password"/>
        </div>
        <div class="form-group">
          <button class="btn-primary">{{ $t("signup") }}</button>
        </div>
      </div>
      <div class="signup-footer">
        <p>{{ $t("alreadyHaveAccount") }}
          <router-link to="/login">{{ $t("login") }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Signup",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
}
</script>

<style scoped lang="scss">
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);

  .signup-container {
    width: 400px;
    padding: 2rem;

    .signup-header {
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

    .signup-form {
      margin-top: 2rem;

      .form-group {
        margin-bottom: 1rem;
      }
    }

    .signup-footer {
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