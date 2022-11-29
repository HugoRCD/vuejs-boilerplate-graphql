<template>
  <div class="navbar">
    <div class="logo-section">
      <img src="../assets/logo.png" alt="logo">
      <h1>Vue 3</h1>
    </div>
    <div class="nav-container">
      <div class="nav-link">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="nav-button">
        <LanguageSelector />
        <Button text="Login" />
        <Button text="Sign Up" color="secondary" />
      </div>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue'
import Button from "@/components/Button";

export default {
  name: "Navbar",
  components: {
    Button,
    LanguageSelector
  }
}
</script>

<style scoped lang="sass">
.navbar
  width: 100%
  padding: 1rem 3rem
  display: flex
  justify-content: space-between
  align-items: center
  background-color: #1F2937

.logo-section
  display: flex
  align-items: center
  img
    width: 50px
    margin-right: 1rem
  h1
    color: #fff
    font-size: 1.5rem
    font-weight: 700

.nav-container
  display: flex
  .nav-link
    display: flex
    align-items: center
    margin-right: 2rem
    a
      color: #fff
      font-size: 1rem
      font-weight: 500
      margin-right: 1rem
      text-decoration: none
      &:hover
        color: #2563EB
    @media (max-width: 768px)
      display: none
  .burger
    display: none
    width: 30px
    height: 20px
    cursor: pointer
    .line1, .line2, .line3
      width: 100%
      height: 3px
      background-color: #fff
      margin: 5px 0
    @media (max-width: 768px)
      display: block
      align-self: center
      margin-left: auto
  .nav-button
    display: flex
    gap: 1rem
</style>