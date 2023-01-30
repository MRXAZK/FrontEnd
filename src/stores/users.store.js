// stores/users.store.js
import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: {},
  }),
  actions: {
    async getAll() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + Cookies.get("access_token");
      this.users = { loading: true };
      await axios
        .get("api/users/me")
        .then((users) => (this.users = users.data.user))
        .catch((error) => (this.users = { error }));
    },
  },
});
