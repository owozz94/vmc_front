import React from "react";
import checked from "../../img/checked.png";
import { Fragment } from "react";
import Paper from "@mui/material/Paper";

export default function CertificationUrl(response) {
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
