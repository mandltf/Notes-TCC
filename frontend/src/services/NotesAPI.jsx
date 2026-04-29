import axios from "axios";
import { BASE_URL } from "../utils";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNotes = async () => {
  const { data } = await api.get("/api/notes");
  return data;
};

export const getNoteById = async (id) => {
  const { data } = await api.get(`/api/notes/${id}`);
  return data;
};

export const createNote = async (payload) => {
  const { data } = await api.post("/api/notes", payload);
  return data;
};

export const updateNote = async (id, payload) => {
  const { data } = await api.put(`/api/notes/${id}`, payload);
  return data;
};

export const deleteNote = async (id) => {
  const { data } = await api.delete(`/api/notes/${id}`);
  return data;
};
