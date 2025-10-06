import { apiRequest } from "./api";

export const CommentAPI = {
  async getAll() {
    return await apiRequest("/comments");
  },
  async getByPost(postId) {
    return await apiRequest(`/comments/post/${postId}`);
  },
  async create(comment) {
    return await apiRequest("/comments", "POST", comment);
  },
  async remove(id) {
    return await apiRequest(`/comments/${id}`, "DELETE");
  },
};
