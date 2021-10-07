import React, { Component, useState, useEffect, useCallback } from "react";
import CertiForm from "./CertiForm";
import styles from "../../css/Mycertification.module.css";

//api 호출
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { setVerifiedData } from "../../modules/Reducer";
// const clientId = "347213939670-lgktcl3k8h266eabnk37r12e6a3c2fot.apps.googleusercontent.com";

export default function Mycertification() {
  const state = useSelector((state) => state);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCerti = async () => {
      try {
        setLists(null);
        setError(null);
        setLoading(true);

        const res = await axios.get("http://3.37.123.157:8000/verification", { headers: { "Content-Type": "applicaion/json", Authorization: "Bearer " + state.user.jwt } });
        setLists(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCerti();
  }, []);

  if (loading) return <div>...loading</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!lists) return "첫 증명서를 발급받으세요";

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.hd}>
          <p className={styles.kor}>증명서 목록</p>
          <span className={styles.eng}>My certification</span>
        </div>
        <article className={styles.certiList}>
          {lists.map((certi) => (
            <CertiForm
              key={certi.id}
              id={certi.id}
              order={certi.order_currency}
              payment={certi.payment_currency}
              start={certi.start_date}
              end={certi.end_date}
              app={certi.exchange_name}
              profit={certi.profit}
              average={certi.avarage_cost}
              units={certi.units}
              url={certi.image_url}
            ></CertiForm>
          ))}
        </article>
      </div>
    </div>
  );
}
