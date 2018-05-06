import { FETCH_HOTELS } from "../Action/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_HOTELS:
      if (action.payload === "") return false;
      return action.payload;
    default:
      return state;
  }
};
