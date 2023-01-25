import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://api.farhanaulianda.tech/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + Cookies.get("access_token");
