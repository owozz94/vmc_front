import MainTop from "./MainTop";
import MainBottom from "./MainBottom";
import axios from "axios";

export default function Main() {
  //axios test
  const url = "https://www.youtube.com/watch?v=wo46N-LQK7o&t=33s";
  const data = {
    //"id_token" : response.tokenId
  };

  const aa = () => {
    axios({
      method: "get",
      url: url,
      data: data,
      // headers:{'Content-Type':'applicaion/json','Authorization':'Bearer '+response.accessToken},
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      main입니다.
      <button onClick={aa}>test </button>
      <MainTop></MainTop>
      <MainBottom></MainBottom>
    </div>
  );
}
