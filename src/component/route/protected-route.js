import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (rest.protected === true && !rest.loggedInUser) {
        return <Redirect to="/login" />;
      }
      return <Component {...props} />;
    }}
  />
);

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
