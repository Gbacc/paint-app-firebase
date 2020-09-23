import React from "react";
import { connect } from "react-redux";
import { loginWithProvider } from "../../action/auth";

const PageLogin = ({ history, loggedInUser, loginWithProvider }) => {
  if (loggedInUser) {
    history.push("/");
  }

  return (
    <div>
      <button className="button" onClick={() => loginWithProvider("google")}>
        <span className="icon">
          <i className="fab fa-google" />
        </span>
        <span>Log in with Google</span>
      </button>

      <button className="button" onClick={() => loginWithProvider("twitter")}>
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
        <span>Log in with Twitter</span>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

const matchDispatchToProps = {
  loginWithProvider
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(PageLogin);
