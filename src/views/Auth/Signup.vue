<template>
  <div class="signup">
    <div class="signup-container">
      <div class="signup-header">
        <h1>{{ $t("signup") }}</h1>
        <p>{{ $t("signupText") }}</p>
      </div>
      <div class="signup-form">
        <div class="form-group">
          <label class="label" for="username">{{ $t("username") }}</label>
          <input class="input" type="text" id="username" placeholder="toto123" v-model="createUserInput.username"/>
        </div>
        <div class="form-group-name">
          <div class="form-group">
            <label class="label" for="firstname">{{ $t("firstname") }}</label>
            <input class="input" type="text" id="firstname" placeholder="John" v-model="createUserInput.firstname"/>
          </div>
          <div class="form-group">
            <label class="label" for="lastname">{{ $t("lastname") }}</label>
            <input class="input" type="text" id="lastname" placeholder="Doe" v-model="createUserInput.lastname"/>
          </div>
        </div>
        <div class="form-group-infos">
          <div class="form-group">
            <label class="label" for="password">{{ $t("phone") }}</label>
            <input class="input" type="tel" id="phone" placeholder="(+33) 1 23 45 67 89"
                   v-model="createUserInput.telephone"/>
          </div>
          <div class="form-group">
            <label class="label" for="password">{{ $t("birthdate") }}</label>
            <input class="input" type="date" id="birthdate" placeholder="01/01/2000"
                   v-model="createUserInput.birthdate"/>
          </div>
        </div>
        <div class="form-group">
          <label class="label" for="email">{{ $t("email") }}</label>
          <input class="input" type="email" id="email" placeholder="contact@gmail.com" v-model="createUserInput.email"/>
        </div>
        <div class="form-group">
          <label class="label" for="password">{{ $t("password") }}</label>
          <input class="input" type="password" id="password" placeholder="123soleil"
                 v-model="createUserInput.password"/>
        </div>
        <div class="form-group" @click="signup">
          <button class="btn-primary">{{ $t("signup") }}</button>
        </div>
      </div>
      <div class="signup-footer">
        <p>{{ $t("alreadyHaveAccount") }}
          <router-link :to="{name: 'Login'}">{{ $t("login") }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import gql from "graphql-tag";

export default {
  name: "Signup",
  data() {
    return {
      createUserInput: {
        email: "",
        password: "",
        username: "",
        firstname: "",
        lastname: "",
        telephone: "",
        birthdate: "",
      },
      toast_success: {
        title: this.$t("accountCreatedSuccess"),
        toast: true,
        icon: "success",
        timer: 1500,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: false
      },
      toast_error: {
        title: this.$t("accountCreatedError"),
        toast: true,
        icon: "error",
        timer: 1500,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: false
      }
    };
  },
  methods: {
    async signup() {
      this.$store.dispatch("loading", true);
      this.$apollo.mutate({
        mutation: gql`mutation createUser($createUserInput: CreateUserInput!) {
          authSignup(user: $createUserInput) {
            token
            user {
              email
              username
              firstname
              lastname
              role
              isVerified
            }
        }
        }`,
        variables: {
          createUserInput: this.createUserInput
        }
      }).then((response) => {
        const token = response.data.authSignup.token;
        const user = response.data.authSignup.user;
        if (token) {
          this.$store.dispatch("login", {token, user});
          this.$store.dispatch("loading", false);
          this.$router.push({name: "VerifyUser"});
          this.$swal(this.toast_success);
        } else {
          this.$swal(this.toast_error);
        }
      }).catch(() => {
        this.$store.dispatch("loading", false);
        this.$swal(this.toast_error);
      });
    },
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
        width: 100%;
        margin-bottom: 1rem;

        .label {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid var(--border-color);
          border-radius: 0.25rem;
          outline: none;
        }
      }

      .form-group-name {
        display: flex;
        gap: 1rem;
      }

      .form-group-infos {
        display: flex;
        gap: 1rem;
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