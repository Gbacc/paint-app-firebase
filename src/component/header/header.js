import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutFromProvider } from "../../action/auth";

const Header = ({ loggedInUser, logoutFromProvider }) => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          {loggedInUser && (
            <Link className="navbar-item" to="/scheme/add">
              Create
            </Link>
          )}
          {loggedInUser && (
            <Link className="navbar-item" to="/scheme/list">
              My lists
            </Link>
          )}
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {!loggedInUser && (
              <Link className="button is-primary" to="/register">
                Sign up
              </Link>
            )}
            {!loggedInUser && (
              <Link className="button is-light" to="/login">
                Log in
              </Link>
            )}
            {loggedInUser && (
              <Link className="button is-primary" to="/profile">
                Profile
              </Link>
            )}
            {loggedInUser && (
              <button
                className="button is-light"
                onClick={logoutFromProvider}
                to="/login"
              >
                Log out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

const matchDispatchToProps = {
  logoutFromProvider
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Header);
