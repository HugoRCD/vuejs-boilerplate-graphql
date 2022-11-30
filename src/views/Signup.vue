<template>
  <div class="signup">
    <div class="signup-container">
      <div class="signup-header">
        <h1>{{ $t("signup") }}</h1>
        <p>{{ $t("signupText") }}</p>
        <p>{{ user }}</p>
      </div>
      <div class="signup-form">
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
            <Button :text="$t('signup')" :color="'primary'" />
          </div>
        </form>
      </div>
      <div class="signup-footer">
        <p>{{ $t("alreadyHaveAccount") }} <router-link to="/login">{{ $t("login") }}</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Signup",
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
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
  .signup-container {
    width: 400px;
    background-color: var(--bg);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
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
      form {
        .form-group {
          margin-bottom: 1rem;
          label {
            display: block;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
        }
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