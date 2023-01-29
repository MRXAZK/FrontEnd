import App from "./App.vue";
import axios from "axios";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import VueApexCharts from "vue3-apexcharts";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

axios.defaults.baseURL = "https://api.farhanaulianda.tech/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + Cookies.get("access_token");

const app = createApp(App).use(router);
app.use(VueApexCharts);
app.use(createPinia());
app.use(BootstrapVue3);
app.mount("#app");
