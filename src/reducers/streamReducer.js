import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from "../actions/types";

const initialState = {};

const streamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      return {
        ...state,
        ...payload.reduce((prev, actualStream) => {
          return { ...prev, [actualStream.id]: actualStream };
        }, {}),
      };
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      const newState = state;
      delete newState[payload];
      return newState;
    default:
      return state;
  }
};

export default streamReducer;
