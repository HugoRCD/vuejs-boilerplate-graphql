<template>
  <div class="navbar">
    <router-link :to="{ name: 'Home' }">
      <div class="logo-section">
        <img src="../assets/media/logo.png" alt="logo">
        <h1>Vue Template</h1>
      </div>
    </router-link>
    <div class="nav-container">
      <div class="nav-link">
        <router-link v-for="link in nav" :key="link.link" :to="{ name: link.name }">
          {{ $t(link.name.toLowerCase()) }}
        </router-link>
      </div>
      <div class="nav-button" v-if="!isLogged">
        <router-link :to="{name: 'Login'}">
          <button class="btn-secondary">{{ $t("login") }}</button>
        </router-link>
        <router-link :to="{name: 'Signup'}">
          <button class="btn-primary">{{ $t("signup") }}</button>
        </router-link>
        <ThemeSwitcher/>
        <LanguageSelector/>
      </div>
      <div class="nav-button" v-else>
        <ProfilTool />
        <ThemeSwitcher/>
        <LanguageSelector/>
      </div>
      <div v-if="!showMenu" class="burger-menu" @click="toggleMenu">
        <i class="fa-sharp fa-solid fa-bars fa-xl"></i>
      </div>
      <div v-else class="burger-menu" @click="toggleMenu">
        <i class="fa-sharp fa-solid fa-times fa-xl"></i>
      </div>
    </div>
  </div>
  <div class="dropdown-menu" v-if="showMenu" v-click-outside="hide">
    <div class="dropdown-link">
      <router-link v-for="link in nav" :key="link.link" :to="link.link" @click="hide">
        {{ $t(link.name.toLowerCase()) }}
      </router-link>
    </div>
    <div class="dropdown-button" v-if="!isLogged">
      <router-link :to="{ name: 'Login' }">
        <button class="btn-secondary">{{ $t("login") }}</button>
      </router-link>
      <router-link :to="{ name: 'Signup' }">
        <button class="btn-primary">{{ $t("signup") }}</button>
      </router-link>
    </div>
    <div class="dropdown-button" v-else>
      <i class="fas fa-user-circle fa-xl"></i>
    </div>
    <div class="dropdown-button">
      <ThemeSwitcher/>
      <LanguageSelector/>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSelector from '@/components/LanguageSelector.vue'
import ProfilTool from "@/components/ProfilTool";

export default {
  name: "Navbar",
  components: {
    ThemeSwitcher,
    LanguageSelector,
    ProfilTool
  },
  data() {
    return {
      showMenu: false,
      nav: [],
      navLinks: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Contact",
          link: "/contact"
        }
      ],
      navLinksLogged: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Contact",
          link: "/contact"
        },
        {
          name: "Dashboard",
          link: "/dashboard"
        }
      ]
    }
  },
  created() {
    this.nav = this.navLinks;
  },
  computed: {
    isLogged() {
      if (this.$store.getters.isLoggedIn)
        this.nav = this.navLinksLogged;
      else
        this.nav = this.navLinks;
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    hide() {
      this.showMenu = false
    }
  },
}
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
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
      gap: 1rem;

      i {
        cursor: pointer;
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
        display: flex;
        align-items: center;
      }
    }
  }
}

.dropdown-menu {
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  background-color: var(--bg-secondary);
  z-index: 100;

  .dropdown-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;

    a {
      font-size: 1rem;
      font-weight: 500;
      color: var(--font-color);
      margin-bottom: 1rem;

      &:hover {
        color: var(--font-color-secondary);
      }
    }
  }

  .dropdown-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }
}
</style>