// src/services/contactService.js
import api from "./api";

export const sendContactMessage = async (messageData) => {
  const response = await api.post("/contact", messageData);
  return response.data;
};

export const getAllContacts = async () => {
  const response = await api.get("/contact");
  return response.data;
};