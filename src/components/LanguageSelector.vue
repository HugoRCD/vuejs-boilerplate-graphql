<template>
  <select v-model="$i18n.locale" class="language-selector">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { locales: ["fr", "en"] };
  }
};
</script>

<style scoped lang="sass">
.language-selector
  background-color: #2563EB
  color: #fff
  border: none
  padding: 0.5rem 1rem
  border-radius: 0.25rem
  font-size: 1rem
  font-weight: 500
  cursor: pointer
</style>