import axios from "axios";
import { BASE_URL } from "constans";

export const apiService = axios.create({
  baseURL: BASE_URL,
});
