//no work in final release in project
import { ADD_USER } from "../types";

const initialstore = {
  name: [],
};

export const action = (state = initialstore, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
