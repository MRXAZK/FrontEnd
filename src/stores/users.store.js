import { defineStore } from "pinia";

import axios from "axios";

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
  },
});
