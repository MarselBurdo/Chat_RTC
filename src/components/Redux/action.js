import { ADD_USER } from "./types";

export const addUser = (name) => ({
  type: ADD_USER,
  payload: name,
});
