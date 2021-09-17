import React, { Component } from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Certification from './components/certification/Certification';
import Mycertification from './components/mycertification/Mycertification';
import Mypage from './components/mypage/Mypage';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact={true} component={Main} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route path="/certification" exact={true} component={Certification} />
          <Route path="/mycertification" exact={true} component={Mycertification} />
          <Route path="/mypage" exact={true} component={Mypage} />
        </div>
      </div>
    )
  }
}
