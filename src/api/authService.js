import { apiRequest } from "./api";

export const AuthAPI = {
  async login(credentials) {
    return await apiRequest("/auth/login", "POST", credentials);
  },

  async register(data) {
    return await apiRequest("/auth/register", "POST", data);
  },

  async logout() {
    return Promise.resolve({ message: "Logged out" });
  },
};
