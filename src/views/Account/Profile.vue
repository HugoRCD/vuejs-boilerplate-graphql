<template>
  <div class="profile">
    <h1 class="title">{{ $t("profile") }} {{ user.username }}</h1>
    <p>{{ user }}</p>
    <button class="btn-primary" @click="toggleEditMode">
      {{ $t("edit") }}
    </button>
    <button class="btn-primary" @click="deleteUser">
      {{ $t("deleteUser") }}
    </button>
    <form class="form" @submit.prevent="updateUser">
      <div class="form-item">
        <label for="username">{{ $t("username") }}</label>
        <input disabled class="input" type="text" name="username" id="username" v-model="user.username"/>
      </div>
      <div class="form-group">
        <div class="form-item">
          <label for="firstname">{{ $t("firstname") }}</label>
          <input disabled class="input" type="text" name="firstname" id="firstname" v-model="user.firstname"/>
        </div>
        <div class="form-item">
          <label for="lastname">{{ $t("lastname") }}</label>
          <input disabled class="input" type="text" name="lastname" id="lastname" v-model="user.lastname"/>
        </div>
      </div>
      <div class="form-group">
        <div class="form-item">
          <label for="email">{{ $t("email") }}</label>
          <input disabled class="input" type="email" name="email" id="email" v-model="user.email"/>
        </div>
        <div class="form-item">
          <label for="phone">{{ $t("phone") }}</label>
          <input disabled class="input" type="text" name="phone" id="phone" v-model="user.phone"/>
        </div>
      </div>
      <div class="form-item">
        <label for="password">{{ $t("password") }}</label>
        <input disabled class="input" type="password" name="password" id="password" v-model="user.password"/>
      </div>
      <button class="btn-primary" type="submit">{{ $t("update") }}</button>
    </form>
  </div>
</template>

<script>
import getUserById from "@/graphql/queries/getUserById.gql";
import updateUser from "@/graphql/mutations/updateUser.gql";
import deleteUser from "@/graphql/mutations/deleteUser.gql";

export default {
  name: "Profile",
  data() {
    return {
      user: {
        id: null,
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        birthdate: "",
        role: null,
        createdAt: "",
        updatedAt: "",
      },
      password: "",
      editMode: false,
    };
  },
  computed: {
    role() {
      if (this.user.role === 1) {
        return "admin";
      } else if (this.user.role === 0) {
        return "user";
      } else {
        return "user";
      }
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    toggleEditMode() {
      if (!this.editMode) {
        const inputs = document.querySelectorAll(".input");
        inputs.forEach((input) => {
          input.removeAttribute("disabled");
        });
        this.editMode = true;
      } else {
        const inputs = document.querySelectorAll(".input");
        inputs.forEach((input) => {
          input.setAttribute("disabled", "disabled");
        });
        this.editMode = false;
      }
    },
    updateUser() {
      this.$store.dispatch("loading", true);
      this.$apollo
        .mutate({
          mutation: updateUser,
          variables: {
            user: {
              username: this.user.username,
              firstname: this.user.firstname,
              lastname: this.user.lastname,
              email: this.user.email,
              phone: this.user.phone,
              birthdate: this.user.birthdate,
              password: this.password
            },
            id: this.user.id
          }
        })
        .then(({data}) => {
          this.$store.commit("setUser", data.updateUser);
          this.$store.dispatch("loading", false);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loading", false);
        });
    },
    getUser() {
      this.$apollo.query({
        query: getUserById,
        variables: {
          id: this.$store.state.user.id
        }
      }).then(({data}) => {
        this.user = data.getUserById;
      }).catch(error => {
        console.log(error);
      });
    },
    deleteUser() {
      this.$swal({
        title: this.$t("deleteUser"),
        text: this.$t("deleteUserText"),
        icon: "warning",
        position: "middle",
        toast: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$t("yes"),
        cancelButtonText: this.$t("no"),
        timer: false
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: deleteUser,
              variables: {
                id: this.user.id
              }
            })
            .then(({data}) => {
              this.$store.dispatch("logout");
              this.$router.push({name: "Home"});
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>