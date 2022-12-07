<template>
  <div class="verify middle">
    <div class="container">
      <div class="verify-header center my-lg">
        <h1 class="title">{{ $t("verifyEmail") }}</h1>
        <p class="text">{{ $t("verifyEmailText") }}</p>
      </div>
      <div class="form-item">
        <label class="label" for="verify">{{ $t("verify") }}</label>
        <input class="input mt-sm" type="text" id="verify" placeholder="1262143172" v-model="code"/>
      </div>
      <div class="form-item center" @click="verify">
        <button class="btn-primary fullwidth">{{ $t("verify") }}</button>
      </div>
      <div class="verify-footer center">
        <p class="text">{{ $t("verifyEmailNotReceived") }}</p>
        <button class="btn-secondary mt-md" @click="getVerificationCode">{{ $t("resendCode") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import verifyUser from "@/graphql/mutations/verifyUser.gql";
import getVerificationCode from "@/graphql/mutations/getVerificationCode.gql";

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
        mutation: verifyUser,
        variables: {
          code: this.code,
        },
      })
        .then((res) => {
          if (res.data.verifyUser) {
            this.$store.dispatch("loading", false);
            this.$store.dispatch("insertUser", res.data.verifyUser);
            this.$router.push({name: "Home"});
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
        mutation: getVerificationCode,
        variables: {
          email: user.email,
        },
      })
        .then(() => {
          this.$store.dispatch("loading", false);
          this.$swal(this.$t("verifyCodeSuccess"), "", "success");
        })
        .catch(() => {
          this.$store.dispatch("loading", false);
          this.$swal(this.$t("verifyCodeError"), "", "error");
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>