import firebase from "firebase";
import * as authAction from "../action/auth";
import store from "../store";

export const initialize = () => {
  // Check logged in user
  store.dispatch(authAction.loading());

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch(authAction.login(user));
    } else {
      store.dispatch(authAction.logout());
    }
  });
};
