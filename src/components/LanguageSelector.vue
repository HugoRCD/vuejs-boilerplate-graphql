<template>
  <select v-model="selectedLanguage" class="language-selector">
    <option v-for="key in Object.keys(languages)" :key="key" :value="key">
      {{ languages[key] }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LanguageSelector",
  data() {
    return {
      languages: {
        "fr": "Français",
        "en": "English",
        "es": "Español",
        "de": "Deutsch",
      },
      selectedLanguage: "en",
    };
  },
}
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