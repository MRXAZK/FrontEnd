// stores/auth.store.js
import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";
import router from "../router";

const ACCESS_TOKEN_EXPIRES_IN = 15;
const REFRESH_TOKEN_EXPIRES_IN = 60;

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
    async register(username, email, password, passwordConfirm) {
      await axios.post("api/auth/register", {
        username,
        email,
        password,
        passwordConfirm,
      });
      router.push("/verification");
    },

    async login(email, password) {
      const user = await axios.post("api/auth/login", {
        email,
        password,
      });

      this.user = user;
      // Set the access_token and refresh_token cookies
      Cookies.set("access_token", user.data.access_token, {
        expires: ACCESS_TOKEN_EXPIRES_IN / 60,
        path: "/",
        sameSite: "lax",
      });
      Cookies.set("refresh_token", user.data.refresh_token, {
        expires: REFRESH_TOKEN_EXPIRES_IN / 60,
        path: "/",
        sameSite: "lax",
      });
      if (user.data.access_token) {
        Cookies.set("logged_in", true, {
          expires: ACCESS_TOKEN_EXPIRES_IN / 60,
          path: "/",
          sameSite: "lax",
        });

        this.access_token = user.data.access_token;
        this.refresh_token = user.data.refresh_token;
        this.logged_in = true;
        this.returnUrl = "/";
        router.push(this.returnUrl);
      }
    },
    logout() {
      if (this.access_token && this.refresh_token) {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        Cookies.remove("logged_in");
        this.access_token = null;
        this.refresh_token = null;
        this.logged_in = null;
        this.returnUrl = null;
      }
    },
  },
});
