import { PROFILE_TYPES } from "../actions/profileAction";

const initialState = {
  loading: false,
  ids: [],
  users: [],
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case PROFILE_TYPES.FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case PROFILE_TYPES.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case PROFILE_TYPES.GET_ID:
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };
    case PROFILE_TYPES.GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case PROFILE_TYPES.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export default profileReducer;