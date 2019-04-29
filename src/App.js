import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages";
import * as routes from "./constants/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.LOGIN} component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
