import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma-helpers/css/bulma-helpers.min.css";
import "bulma/css/bulma.min.css";
import firebase from "firebase";
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import ProtectedRoute from "./component/route/protected-route";
import PageLoading from "./page/loading/loading";
import PageNotFound from "./page/not-found/not-found";
import * as ApiService from "./service/api";
import * as AuthService from "./service/auth";
import { firebaseConfig } from "./service/config";
import * as PaintService from "./service/paint";
import { routes } from "./service/route";

class App extends React.Component {
  componentWillMount = () => {
    firebase.initializeApp(firebaseConfig);
    AuthService.initialize();
    ApiService.initialize();
    PaintService.initialize();
  };

  render = () => {
    if (this.props.loading) return <PageLoading />;

    return (
      <React.Fragment>
        <Header />
        <div className="container is-fluid">
          <Switch>
            {routes.map((route, index) => (
              <ProtectedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
                protected={route.protected}
              />
            ))}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  };
}

function mapStateToProps(state) {
  return {
    loading: state.auth.loading
  };
}

export default connect(mapStateToProps)(App);
