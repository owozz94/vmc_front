import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { createBrowserHistory } from "history";

const clientId = "386426216239-l87un6b97csk16831jm6m3f8t82iqigf.apps.googleusercontent.com";

export default class GoogleButton extends Component {
  handleGoogleResponse = async (response) => {
    //서버에 로그인 토큰을 보내는 axios
    //token : "",email :  "",name : "",picture:  ““ (url),
    const url = "";
    const data = {
      id_token: response.tokenId,
    };
    //  await axios({
    //      method:'post',
    //      url:url,
    //      data:data,
    //      headers:{'Content-Type':'applicaion/json','Authorization':'Bearer '+
    //     response.accessToken},
    //  }).then(response=>{
    //      console.log(response)
    //  }).catch(response=>{console.log(response)})
    let res = {
      responseCode: 200,
      responseMessage: "로그인성공",
      Body: {
        token: "",
        email: "",
        name: "",
        picture: "", //(url),
        given_name: "",
        family_name: "",
      },
    };
    let history = createBrowserHistory({ forceRefresh: true });
    history.push("/dashboard");

    console.log(`Token || ${response.getAuthResponse().id_token}`);
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
