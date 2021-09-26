import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Dashboard from "./components/dashboard/Dashboard";
import Certification from "./components/certification/Certification";
import Mycertification from "./components/mycertification/Mycertification";
import Profile from "./components/profile/Profile";
import Sub from "./components/layout/Sub";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Sub>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/certification" exact component={Certification} />
            <Route path="/mycertification" exact component={Mycertification} />
            <Route path="/Profile" exact component={Profile} />
          </Sub>
        </Switch>
      </Router>
    );
  }
}
