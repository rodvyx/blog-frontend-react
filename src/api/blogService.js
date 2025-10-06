import { apiRequest } from "./api";

export const BlogAPI = {
  async getAll() {
    return await apiRequest("/posts");
  },
  async getById(id) {
    return await apiRequest(`/posts/${id}`);
  },
  async create(post) {
    return await apiRequest("/posts", "POST", post);
  },
  async update(id, post) {
    return await apiRequest(`/posts/${id}`, "PUT", post);
  },
  async remove(id) {
    return await apiRequest(`/posts/${id}`, "DELETE");
  },
};
