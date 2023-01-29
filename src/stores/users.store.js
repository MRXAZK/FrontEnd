// stores/users.store.js
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth.store";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: {},
  }),
  actions: {
    async getAll() {
      this.users = { loading: true };
      await axios
        .get("api/users/me")
        .then((users) => (this.users = users.data.user))
        .catch((error) => (this.users = { error }));
    },
    async afterLogin() {
      if (useAuthStore().logged_in) {
        this.getAll();
      }
    },
  },
});
