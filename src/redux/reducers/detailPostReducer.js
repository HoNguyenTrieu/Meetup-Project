import { POST_TYPES } from "../actions/postAction";

const detailPostReducer = (state = [], action) => {
  switch (action.type) {
    case POST_TYPES.GET_POST:
      return [...state, action.payload];
    case POST_TYPES.UPDATE_POST:
      return state.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    default:
      return state;
  }
};

export default detailPostReducer;
