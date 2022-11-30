<template>
  <div class="login">
    <div class="login-container">
      <div class="login-header">
        <h1>{{ $t("login") }}</h1>
        <p>{{ $t("loginText") }}</p>
      </div>
      <div class="login-form">
        <form>
          <div class="form-group">
            <label for="email">{{ $t("email") }}</label>
            <input class="input" type="email" id="email" placeholder="contact@gmail.com" v-model="user.email" />
          </div>
          <div class="form-group">
            <label for="password">{{ $t("password") }}</label>
            <input class="input" type="password" id="password" placeholder="123soleil" v-model="user.password" />
          </div>
          <div class="form-group">
            <Button :text="$t('login')" :color="'primary'" />
          </div>
        </form>
      </div>
      <div class="login-footer">
        <p>{{ $t("noAccount") }} <router-link to="/signup">{{ $t("signup") }}</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Login",
  components: {
    Button,
  },
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
  .login-container {
    width: 400px;
    background-color: var(--bg);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
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
      form {
        .form-group {
          margin-bottom: 1rem;
          label {
            display: block;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
          input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            outline: none;
            color: var(--font-color-secondary);
            &:focus {
              border-color: var(--accent);
            }
          }
        }
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