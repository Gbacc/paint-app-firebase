import { getPaints } from "../action/paint";
import store from "../store";

export const initialize = () => {
  store.dispatch(getPaints());
};
