// stores/auth.store.js
import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";
import router from "../router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from Coockie to enable user to stay logged in
    access_token: Cookies.get("access_token"),
    refresh_token: Cookies.get("refresh_token"),
    logged_in: Cookies.get("logged_in"),
    returnUrl: null,
  }),
  actions: {
    async login(email, password) {
      const user = await axios.post("api/auth/login", {
        email,
        password,
      });

      this.user = user;
      // Set the access_token and refresh_token cookies
      Cookies.set("access_token", user.data.access_token);
      Cookies.set("refresh_token", user.data.refresh_token);

      if (user.data.access_token) {
        Cookies.set("logged_in", true);
        router.push(this.returnUrl || "/");
      }
    },
    logout() {
      this.user = null;
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("logged_in");
      router.push("/login");
    },
  },
});
