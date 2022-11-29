<template>
  <div class="navbar">
    <div class="logo-section">
      <img src="../assets/logo.png" alt="logo">
      <h1>Vue Template</h1>
    </div>
    <div class="nav-container">
      <div class="nav-link">
        <router-link to="/">{{ $t("home") }}</router-link>
        <router-link to="/about">{{ $t("about") }}</router-link>
        <router-link to="/contact">{{ $t("contact") }}</router-link>
      </div>
      <div class="nav-button">
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
      <div class="burger-menu" @click="toggleMenu">
        <box-icon name='menu' color='#ffffff' size="md" ></box-icon>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSelector from '@/components/LanguageSelector.vue'
import Button from "@/components/Button";

export default {
  name: "Navbar",
  components: {
    ThemeSwitcher,
    Button,
    LanguageSelector
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;

  .logo-section {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }

    h1 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--font-color);
    }
  }

  .nav-container {
    display: flex;
    align-items: center;

    .nav-link {
      display: flex;
      align-items: center;
      margin-right: 2rem;

      a {
        font-size: 1rem;
        font-weight: 500;
        color: var(--font-color);
        margin-right: 1rem;

        &:hover {
          color: var(--font-color-secondary);
        }
      }
    }

    .nav-button {
      display: flex;
      align-items: center;

      button {
        margin-right: 1rem;
      }
    }

    .burger-menu {
      display: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .nav-container {
      .nav-link {
        display: none;
      }

      .nav-button {
        display: none;
      }

      .burger-menu {
        display: block;
      }
    }
  }
}
</style>