// Language: JavaScript (Axios API Config)

import axios from "axios";

const API = axios.create({
  baseURL: "https://diagnostic-portal.onrender.com/api",
});

export default API;
