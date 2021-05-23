import { TYPES } from "../actions/authAction";

const initialState = {};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.AUTH:
      return payload;
    default:
      return state;
  }
};

export default authReducer;
