import {
  GET_PAINTS_ERROR,
  GET_PAINTS_LOADING,
  GET_PAINTS_SUCCESS
} from "../action/paint";

const initialState = {
  paintsByType: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAINTS_SUCCESS:
      let paintsByType = {};
      action.payload.forEach(paintItem => {
        if (!paintsByType[paintItem.type]) {
          paintsByType[paintItem.type] = [];
        }
        paintsByType[paintItem.type].push(paintItem);
      });

      return {
        paintsByType,
        loading: false
      };
    case GET_PAINTS_ERROR:
      return {
        paintsByType: {},
        loading: false
      };
    case GET_PAINTS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
