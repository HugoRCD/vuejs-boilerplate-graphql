<template>
  <div class="language-selector" @click="changeLocale">
    <box-icon name="globe" size="md"></box-icon>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      theme: "dark"
    }
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale === "fr") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "fr";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.language-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-icon {
    color: var(--font-color);
  }
}
</style>