import { loadPaints } from "../service/api";

export const GET_PAINTS_SUCCESS = "LIST_COLOR_SUCCESS";
export const GET_PAINTS_ERROR = "LIST_COLOR_ERROR";
export const GET_PAINTS_LOADING = "GET_PAINTS_LOADING";

export const getPaints = async () => {
  return async dispatch => {
    dispatch(getPaintsLoading());
    try {
      const paints = await loadPaints();
      dispatch(getPaintsSuccess(paints));
    } catch (error) {
      dispatch(getPaintsError());
    }
  };
};

export const getPaintsSuccess = paints => {
  return {
    type: GET_PAINTS_SUCCESS,
    payload: paints
  };
};

export const getPaintsError = () => {
  return {
    type: GET_PAINTS_ERROR,
    payload: {}
  };
};

export const getPaintsLoading = () => {
  return {
    type: GET_PAINTS_LOADING,
    payload: {}
  };
};
