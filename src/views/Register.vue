<template>
  <div class="register">
    <div class="register-container">
      <div class="register-header">
        <h1>{{ $t("register") }}</h1>
      </div>
      <div class="register-form">
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="email">{{ $t("email") }}</label>
            <input type="email" id="email" placeholder="contact@gmail.com" v-model="email"/>
            <label for=" password">{{ $t("password") }}</label>
            <input type="password" id="password" placeholder="123soleil" v-model="password"/>
            <div class=" form-group">
              <Button :text="$t('register')" :color="'primary'"/>
            </div>
          </div>
        </form>
      </div>
      <div class="register-footer">
        <p>{{ $t("alreadyHaveAccount") }}
          <router-link to="/login">{{ $t("login") }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Register",
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
}
</script>

<style scoped lang="scss">
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
  .register-container {
    width: 400px;
    background-color: var(--bg);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--box-shadow);
    .register-header {
      text-align: center;
      h1 {
        font-size: 2rem;
      }
    }
    .register-form {
      margin-top: 2rem;
      form {
        display: flex;
        flex-direction: column;
        .form-group {
          margin-bottom: 1rem;
          label {
            display: block;
            margin-bottom: 0.5rem;
          }
          input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            outline: none;
            &:focus {
              border-color: var(--primary-color);
            }
          }
        }
      }
    }
    .register-footer {
      margin-top: 2rem;
      text-align: center;
      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>