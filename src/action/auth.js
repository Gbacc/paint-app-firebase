import firebase from "firebase";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const LOG_LOADING = "LOG_LOADING";

export const loginWithProvider = provider => {
  return dispatch => {
    dispatch(loading());

    switch (provider) {
      case "twitter":
        provider = new firebase.auth.TwitterAuthProvider();
        break;

      case "google":
      default:
        provider = new firebase.auth.GoogleAuthProvider();
        break;
    }

    return firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function(result) {
        // The signed-in user info.
        const user = result.user;
        return dispatch(login(user));
      })
      .catch(function(error) {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        return dispatch(logout());
      });
  };
};

export const logoutFromProvider = () => {
  return dispatch => {
    dispatch(loading());

    return firebase
      .auth()
      .signOut()
      .then(function(result) {
        return dispatch(logout());
      });
  };
};

export const login = user => {
  return {
    type: LOG_IN,
    payload: { user }
  };
};

export const logout = () => {
  return {
    type: LOG_OUT,
    payload: {}
  };
};

export const loading = () => {
  return {
    type: LOG_LOADING,
    payload: {}
  };
};
