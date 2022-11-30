<template>
  <div class="profil-tool" @click="toggleProfil">
    <i class="fas fa-user-circle fa-xl"></i>
    <h1>{{ user.username }}</h1>
    <i v-if="menuOpen" class="fas fa-chevron-down fa-xs"></i>
    <i v-else class="fas fa-chevron-up fa-xs"></i>
  </div>

  <div class="profil-section" v-if="menuOpen" v-click-outside="() => hide()">
    <div class="card dropdown-profil">
      <div class="dropdown-profil-container">
        <div class="dropdown-profil-header">
          <div class="profil-item">
            <i class="fas fa-user-circle fa-xl"></i>
            <h1>{{ user.firstname }} {{ user.lastname }}</h1>
          </div>
          <div class="profil-item">
            <i class="fas fa-envelope fa-xl"></i>
            <h1>{{ user.email }}</h1>
          </div>
          <div class="profil-item">
            <i class="fas fa-user-tag fa-xl"></i>
            <h1>{{ $t(role) }}</h1>
          </div>
        </div>
        <div class="dropdown-profil-footer">
          <button class="btn-primary" @click="logout()">{{ $t("logout") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilTool",
  data() {
    return {
      user: null,
      menuOpen: false
    }
  },
  created() {
    this.user = this.$store.getters.user;
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    role() {
      if (this.user.role === 1) {
        return "admin";
      } else if (this.user.role === 0) {
        return "user";
      }
    }
  },
  methods: {
    handleFocus() {
      console.log("focus");
      this.menuOpen = true;
    },
    hide() {
      console.log("focus out");
      this.menuOpen = false;
    },
    toggleProfil() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      this.$swal({
        title: this.$t("logout"),
        text: this.$t("logoutMessage"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$t("yes"),
        cancelButtonText: this.$t("no")
      }).then(result => {
        if (result.isConfirmed) {
          this.$store.dispatch("logout");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          this.$router.push("/login");
          this.$swal(this.$t("logout"), this.$t("logoutSuccess"), "success");
          this.menuOpen = false;
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
.profil-tool {
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.70rem;
  background-color: var(--bg-tertiary);
  border-radius: var(--btn-radius);
  padding: 0.5rem;
  color: var(--font-color);
  transition: all 0.3s ease-in-out;

  h1 {
    font-size: 1rem;
    margin: 0;
  }

  &:hover {
    background-color: var(--bg-primary);
  }

}

.profil-section {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 100;
  color: var(--font-color);

  .dropdown-profil {
    width: 15rem;
    background-color: var(--bg-secondary);
    border-radius: var(--btn-radius);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .dropdown-profil-container {
      padding: 0.5rem;

      .dropdown-profil-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: var(--font-sm);

        .profil-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }

      .dropdown-profil-footer {
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        button {
          width: 100%;
        }
      }
    }
  }
}
</style>