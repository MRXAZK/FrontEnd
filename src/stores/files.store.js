import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";

export const useFilesStore = defineStore({
  id: "files",
  state: () => ({
    files: [],
    loading: false,
    error: null,
  }),
  actions: {
    async getAll() {
      this.loading = true;
      this.error = null;

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + Cookies.get("access_token");

      try {
        const response = await axios.get("api/file/list");
        this.files = response.data.files;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
