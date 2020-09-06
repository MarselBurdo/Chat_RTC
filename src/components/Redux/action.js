import { ADD_USER } from "./types";
//no work in final release in project
export const addUser = (name) => ({
  type: ADD_USER,
  payload: name,
});
