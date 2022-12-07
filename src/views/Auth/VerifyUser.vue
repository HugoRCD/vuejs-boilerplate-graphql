<template>
  <div class="verify middle">
    <div class="container">
      <div class="verify-header center my-lg">
        <h1 class="title">{{ $t("verifyEmail") }}</h1>
        <p class="text">{{ $t("verifyEmailText") }}</p>
      </div>
      <div class="verify-form" v-if="!isLoading">
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
      <div class="center" v-else>
        <i class="fa-solid fa-circle-notch fa-spin"></i>
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
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
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
            this.$swal({
              title: this.$t("verifyEmailSuccess"),
              toast: true,
              position: "top-end",
              icon: "success",
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false
            });
          } else {
            this.$store.dispatch("loading", false);
            this.$swal({
              title: this.$t("verifyEmailError"),
              toast: true,
              position: "top-end",
              icon: "error",
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$store.dispatch("loading", false);
        });
    },
    getVerificationCode() {
      const user = this.$store.getters.user;
      this.$apollo.mutate({
        mutation: getVerificationCode,
        variables: {
          email: user.email,
        },
      })
        .then(() => {
          this.$swal({
            title: this.$t("CodeSent"),
            toast: true,
            position: "top-end",
            icon: "success",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false
          });
        })
        .catch(() => {
          this.$swal({
            title: this.$t("CodeSentError"),
            toast: true,
            position: "top-end",
            icon: "error",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>