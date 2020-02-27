import axios from "axios";

export const API_KEY = "EYXP3CWYINOZVKEX";

export default axios.create({
  baseURL: "https://www.alphavantage.co"
});
