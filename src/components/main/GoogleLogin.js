import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../css/GoogleLogin.module.css";
import GoogleButton from "./GoogleButton";
export default class GoogleLogin extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <GoogleButton variant="primary" className={styles.googleBtn}>
          google로 로그인
        </GoogleButton>
      </div>
    );
  }
}
