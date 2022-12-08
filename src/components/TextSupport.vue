<template>
  <div class="support" @click="textSupport">
    {{ $t("support") }}
  </div>
</template>

<script>
export default {
  name: "TextSupport",
  methods: {
    async textSupport() {
      const {value: formValues} = await this.$swal({
        title: this.$t("support"),
        html: `
          <div class="form">
            <div class="form-item left">
              <p class="text">${this.$t("supportText")}</p>
            </div>
            <div class="form-item left">
              <label class="label" for="type">${this.$t("type")}</label>
              <select class="input mt-sm" id="type">
                <option value="bug">${this.$t("reportBug")}</option>
                <option value="feature">${this.$t("askFeature")}</option>
                <option value="info">${this.$t("askInformations")}</option>
              </select>
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
            type: document.getElementById("type").value,
            message: document.getElementById("message").value,
          };
        }
      });
      if (formValues) {
        this.type = formValues.type;
        this.message = formValues.message;
        //TODO: Send to server
      }
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