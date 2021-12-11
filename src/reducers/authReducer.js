import { SIGN_OUT, SIGN_IN } from "../actions/types";

const initialState = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
export default authReducer;
