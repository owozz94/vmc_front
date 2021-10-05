import React from "react";
import GoogleLogin from "react-google-login";
import { createBrowserHistory } from "history";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "../../modules/Reducer";
const clientId = "386426216239-l87un6b97csk16831jm6m3f8t82iqigf.apps.googleusercontent.com";

export default function GoogleButton() {
  const u = useSelector((state) => state);
  console.log(u);
  const dispatch = useDispatch();
  const handleGoogleResponse = (response) => {
    //google에서 받은 response
    const url = "http://3.37.123.157:8000/user/signin";
    const data = {
      idToken: response.tokenId,
    };
    axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "applicaion/json", Authorization: "Bearer " + response.accessToken, "Content-Security-Policy": "upgrade-insecure-requests" },
    }) //서버에서 받은 response
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 1000) {
          dispatch(setAccessToken(response.accessToken));
          let history = createBrowserHistory({ forceRefresh: true });
          history.push("/dashboard");
        } else {
          alert("로그인에 실패하였습니다.");
        }
      })
      .catch((res) => {
        console.log(res);
        alert("로그인 에러.");
      });
  }; //handleGoogleResponse end
  const handleResponseFail = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin clientId={clientId} buttonText="Google계정으로 로그인" onSuccess={handleGoogleResponse} onFailure={handleResponseFail} />
    </div>
  );
} //GoogleButton end
