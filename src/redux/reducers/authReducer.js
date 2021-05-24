import { GLOBALTYPES } from "../constants/globalTypes";

const initialState = {};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GLOBALTYPES.AUTH:
      return payload;
    default:
      return state;
  }
};

export default authReducer;
