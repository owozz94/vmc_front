import React, { useState, useEffect } from 'react'
import CertiForm from './CertiForm'
import styles from '../../css/Mycertification.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { setData } from "../../modules/Reducer";
import ComAxios from "../../util/ComAxios";
import dummy from "../../db/data.json"
import {BsPlusCircleFill} from "react-icons/bs";
import { Link } from "react-router-dom"

export default function Mycertification() {

    const [verifiedInfo, setVerifiedInfo] = useState({});

    useEffect(() => {
        console.log("useEffect 마운트될때");
        initVerified();
    }, []);

    // 5.1 사용자증명목록
    // /verification
    const initVerified = () => {
        ComAxios({
            method: "get",
            url: "http://3.37.123.157:8000/verification",
        })
            .then((res) => {
                setVerifiedInfo(res.data.data)
            })
            .catch((err) => {
                console.log(`err : ${err}`);
            });
    };




    // useEffect(() => {
    //     initVerified();
    // },[])

    // // const state = useSelector((state) => state);
    // const [lists, setLists] = useState([]);
    // // const [loading, setLoading] = useState(false);
    // // const [error, setError] = useState(null);

    // const initVerified = () => {
    //     ComAxios({
    //         method: 'get',
    //         url: 'http://3.37.123.157:8000/verification'
    //     })
    //     .then((lists) => {
    //         console.log(lists);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //         console.log(error.response);
    //     })
    // }



    //   const initCerti = async () => {
    //     try {
    //         setLists(null);
    //         setError(null);
    //         setLoading(true);
    
    //         const res = await ComAxios({
    //             method:'get',
    //             url: 'http://3.37.123.157:8000/verification'
    //         })

    //     //   const res = await axios.get(
    //     //     'http://3.37.123.157:8000/verification', { headers: {"Content-Type": "applicaion/json", Authorization: "Bearer " + state.user.jwt }}
    //     //     );

    //     setLists(res.data);
    //     console.log(res)
    //     console.log(res)
    //     console.log(res.data)
    //     console.log('a')


    //     } catch(e){
    //       setError(e);
    //     }
    //     setLoading(false);
    //   };
    //   fetchCerti();
    
    
    // if (loading) return <div>...loading</div>;
    // if (error) return <div>에러가 발생했습니다.</div>;
    // if (!lists) return "첫 증명서를 발급받으세요";

    return(
        <div className={styles.container}>
        <div className={styles.background}>
            {/* <div className={styles.hd}>
            <p className={styles.kor}>증명서 목록</p>
            <span className={styles.eng}>My certification</span>
            </div> */}
        <article className={styles.certiList}>
        {dummy.verifiedLists.map((data) => (
                        <CertiForm
                            key={data.id}
                            id={data.id}
                            order={data.order_currency}
                            payment={data.payment_currency}
                            start={data.start_date}
                            end={data.end_date}
                            app={data.exchange_name}
                            profit={data.profit}
                            average={data.avarage_cost}
                            units={data.units}
                            url={data.image_url}
                            // onChange={handleImageUrl}
                        ></CertiForm>
                        ))}
        </article>
            <div className={styles.addNew}>
                <Link to="/certification" style={{ color: "black", textDecoration: "none" }}>
                    <p><BsPlusCircleFill className={styles.plusPicto} /></p>
                </Link>
            </div>
        </div>
        </div>
    );
}
