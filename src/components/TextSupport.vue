<template>
  <div class="support" @click="textSupport">
    {{ $t("support") }}
  </div>
</template>

<script>
export default {
  name: "TextSupport",
  methods: {
    textSupport() {
      this.$swal({
        title: this.$t("support"),
        html: `
          <div class="form">
            <div class="form-item left">
              <p class="text">${this.$t("supportText")}</p>
            </div>
            <div class="form-item left">
              <label class="label" for="subject">${this.$t("subject")}</label>
              <input class="input mt-sm" id="subject" class="swal2-input" placeholder="Bug, informations...">
            </div>
            <div class="form-item left">
              <label class="label" for="message">${this.$t("message")}</label>
              <textarea class="input mt-sm" id="message" class="swal2-textarea" placeholder="${this.$t("message")}"></textarea>
            </div>
          </div>
        `,
        toast: false,
        focusConfirm: false,
        timer: false,
        position: "middle",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: this.$t("send"),
        cancelButtonText: this.$t("cancel"),
        background: "var(--bg-primary)",
        color: "var(--font-color)",
        preConfirm: () => {
          return {
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
          };
        }
      }).then(result => {
        if (result.isConfirmed) {
          this.$swal({
            text: this.$t("supportSuccess"),
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.support {
  width: 100%;
  display: flex;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-primary);
  }
}
</style>