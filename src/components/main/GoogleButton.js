import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { createBrowserHistory } from "history";
import axios from "axios";
const clientId = "386426216239-l87un6b97csk16831jm6m3f8t82iqigf.apps.googleusercontent.com";

export default class GoogleButton extends Component {
  handleGoogleResponse = async (response) => {
    const url = "http://3.37.123.157:8000/user/signin";
    //body
    const data = {
      idToken: response.tokenId,
    };
    await axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "applicaion/json", Authorization: "Bearer " + response.accessToken },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.code === 1000) {
          let history = createBrowserHistory({ forceRefresh: true });
          history.push("/dashboard");
        } else {
          alert("로그인에 실패하였습니다.");
        }
      })
      .catch((response) => {
        console.log(response);
        alert("로그인 에러.");
      });
  }; //handleGoogleResponse end

  handleResponseFail = (err) => {
    console.log(err);
  };
  render() {
    return (
      <div>
        <GoogleLogin clientId={clientId} buttonText="Google계정으로 로그인" onSuccess={this.handleGoogleResponse} onFailure={this.handleResponseFail} />
      </div>
    );
  }
}
