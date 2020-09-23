import { LOG_IN, LOG_LOADING, LOG_OUT } from "../action/auth";

const initialState = {
  loggedInUser: undefined,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOG_IN: {
      return {
        ...state,
        loggedInUser: action.payload.user,
        loading: false
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        loggedInUser: undefined,
        loading: false
      };
    }
    default:
      return state;
  }
}
