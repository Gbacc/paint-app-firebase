import React from "react";
import { connect } from "react-redux";

const PageProfile = ({ loggedInUser }) => {
  return <div>{loggedInUser.displayName}</div>;
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

export default connect(mapStateToProps)(PageProfile);
