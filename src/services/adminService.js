// src/services/adminService.js
import api from "./api";

export const deleteContact = async (id) => {
  const response = await api.delete(`/admin/contacts/${id}`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post("/admin/products", productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/admin/products/${id}`);
  return response.data;
};