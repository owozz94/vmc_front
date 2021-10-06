import React from "react";
import CertiForm from './CertiForm'
import dummy from '../../db/data.json'
import styles from '../../css/Mycertification.module.css'

// import { createBrowserHistory } from "history";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { setAccessToken } from "../../modules/Reducer";
// const clientId = "347213939670-lgktcl3k8h266eabnk37r12e6a3c2fot.apps.googleusercontent.com";



export default function Mycertification (){

  return(
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.hd}>
          <p className={styles.kor}>증명서 목록</p>
          <span className={styles.eng}>My certification</span>
        </div>
      <article className={styles.certiList}>
      {dummy.certiList.map(certi => (
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


  