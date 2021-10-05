import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../css/GoogleLogin.module.css";
import GoogleButton from "./GoogleButton";
import MetaTags from 'react-meta-tags';
export default class GoogleLogin extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
         <MetaTags>
         <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
        </MetaTags>
      <div>
        <GoogleButton variant="primary" className={styles.googleBtn}>
          google로 로그인
        </GoogleButton>
      </div>
      </div>
    );
  }
}
