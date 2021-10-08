import React from "react";
import checked from "../../img/checked.png";
import { Fragment } from "react";
import Paper from "@mui/material/Paper";

import ComAxios from "../../util/ComAxios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function CertificationUrl() {
  // useEffect(() => {
  //   console.log("useEffect 마운트될때");
  //   initUrl();
  // }, []);

  // const state = useSelector((state) => state);
  // const [content, setContent] = useState();

  // const initUrl = () => {
  //   ComAxios({
  //     method: "get",
  //     url: "http://3.37.123.157:8000/verification/{verification_id}",
  //   })
  //     .then((coin) => {
  //       console.log(coin.data);
  //       const dd = coin.data.data.map((data) => {
  //         return data.coin_symbol;
  //       });
  //       setCoinSymbolList(dd);
  //     })
  //     .catch((coin) => {
  //       console.log(coin);
  //     });
  // };

  // end axios

  return (
    <Fragment>
      <h4 style={{ textAlign: "center", marginTop: 20 }}>Verify My Coin</h4>
      <hr />
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          height: 450,
          marginRight: 45,
          marginLeft: 45,
        }}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div style={{ marginBottom: 100 }}>
          <h3 style={{ textAlign: "center" }}>
            {" "}
            <img src={checked} alt="checked" width="30" />
            인증되었습니다!
            <br />
          </h3>
          <div>
            <h6 style={{ textAlign: "center", marginTop: 18, marginBottom: 25 }}> 베마코가 빗썸에서 확인했습니다.</h6>
            <div style={{ fontSize: "17px" }}>
              기간: <br />
              거래소 : <br />
              코인 개수 : &nbsp; 코인 이름 수익금액 : payment_currency <br />
              유저 아이디 : <br />
              평균단가 수익률 수익금액 이미지 url "id":
            </div>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
}
