import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Dashboard from "./components/dashboard/Dashboard";
import Certification from "./components/certification/Certification";
import Mycertification from "./components/mycertification/Mycertification";
import Mypage from "./components/mypage/Mypage";
import Sub from "./components/layout/Sub";
import CertificationUrl from "./components/mycertification/CertificationUrl";
import ShareUrl from "./components/mycertification/ShareUrl"

export default class Routes extends Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/CertificationUrl" component={CertificationUrl} />
          <Sub>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/certification" exact component={Certification} />
            <Route path="/mycertification" exact component={Mycertification} />
            <Route path="/mypage" exact component={Mypage} />
            <ShareUrl></ShareUrl>
          </Sub>
        </Switch>
      </Router>
    );
  }
}
