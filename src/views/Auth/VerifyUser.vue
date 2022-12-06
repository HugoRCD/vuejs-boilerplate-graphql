<template>
  <div class="verify">
    <div class="verify-container">
      <div class="verify-header">
      </div>
      <div class="form-group">
        <label class="label" for="verify">{{ $t("verify") }}</label>
        <input class="input" type="text" id="verify" placeholder="******" v-model="code"/>
      </div>
      <div class="form-group" @click="verify">
        <button class="btn-primary">{{ $t("verify") }}</button>
      </div>
      <div class="verify-footer">
        <span class="verify-footer-text">{{ $t("noCode") }}</span>
        <br>
        <button class="btn-link" @click="getVerificationCode">{{ $t("resendCode") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "VerifyUser",
  data() {
    return {
      code: "",
    };
  },
  methods: {
    verify() {
      this.$store.dispatch("loading", true);
      this.$apollo.mutate({
        mutation: gql`
          mutation verifyUser($code: String!) {
            verifyUser(code: $code) {
              id
              email
              username
              firstname
              lastname
              isVerified
              role
            }
          }
        `,
        variables: {
          code: this.code,
        },
      })
        .then((res) => {
          if (res.data.verifyUser) {
            this.$store.dispatch("loading", false);
            this.$store.dispatch("insertUser", res.data.verifyUser);
            this.$router.push({ name: "Home" });
          } else {
            this.$store.dispatch("loading", false);
            this.$swal(this.$t("verifyError"));
          }
        })
        .catch((err) => {
          console.log(err);
          this.$store.dispatch("loading", false);
          this.$store.dispatch("toast", {
            title: this.$t("verifyError"),
            toast: true,
            icon: "error",
            timer: 1500,
            position: "top-end",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        });
    },
    getVerificationCode() {
      this.$store.dispatch("loading", true);
      const user = this.$store.getters.user;
      this.$apollo.mutate({
        mutation: gql`
          mutation getVerificationCode($email: String!) {
            getVerificationCode(email: $email) {
                code
            }
          }
        `,
        variables: {
          email: user.email
        },
      })
        .then((res) => {
          this.$store.dispatch("loading", false);
          this.$swal(this.$t("verifyCodeSuccess"), "", "success");
        })
        .catch((err) => {
          this.$store.dispatch("loading", false);
          this.$swal(this.$t("verifyCodeError"), "", "error");
        });
    },
  },
}
</script>

<style scoped lang="scss">

</style>