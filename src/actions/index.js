import streams from "../apis/streams";
import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";

export const signIn = (userId) => ({
  type: SIGN_IN,
  payload: userId,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  return response;
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  return response;
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  return response;
};
