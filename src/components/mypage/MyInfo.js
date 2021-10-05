// eslint-disable-next-line
import React from 'react'
// import PropTypes from 'prop-types'
import {Col, Row} from 'react-bootstrap'
import styles from '../../css/MyInfo.module.css'
import axios from 'axios';

export default function MyInfo () {

    axios.get("http://3.37.123.157:8000/user/userInfo")
    .then((Response)=>{console.log('성공')})
    // .then((Response)=>{console.log(Response.data)})
    // .catch((Error)=>{console.log(Error)})
    .catch((Error)=>{console.log('에러')})

        return (
            <div className={styles.InfoTable}>
                <article className={styles.InfoCategory}>
                    <h2 className={styles.title}>기본 정보</h2>
                    <Row className={styles.InfoRow}>
                        <Col xs={6} md={4}>사진</Col>
                        <Col xs={6} md={8}>이미지</Col>
                    </Row>
                    <Row className={styles.InfoRow}>
                        <Col xs={6} md={4}>이름</Col>
                        <Col xs={6} md={8}>김빗썸</Col>
                    </Row>
                    <Row className={styles.InfoRow}>
                        <Col xs={6} md={4}>닉네임</Col>
                        <Col xs={6} md={8}>username</Col>
                    </Row>
                    <Row className={styles.InfoRow}>
                        <Col xs={6} md={4}>가입날짜</Col>
                        <Col xs={6} md={8}>2020. 01. 01.</Col>
                    </Row>
                </article>
                <article className={styles.InfoCategory}>
                    <h2 className={styles.title}>연락처 정보</h2>
                    <Row className={styles.InfoRow}>
                        <Col xs={6} md={4}>이메일</Col>
                        <Col xs={6} md={8}>bithumb@gmail.com</Col>
                    </Row>
                    <Row className={styles.InfoRow}>
                        <Col xs={6} md={4}>휴대전화</Col>
                        <Col xs={6} md={8}>010-1234-5678</Col>
                    </Row>
                </article>
                {/* <Table striped bordered hover> */}
                {/* <Table bordered>
                    <thead>
                        <tr>
                        <th></th>
                        <th>회원정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>이름</td>
                        <td colSpan="4">김빗썸</td>
                        </tr>
                        <tr>
                        <td>이메일</td>
                        <td colSpan="4">bithumb@gmail.com</td>
                        </tr>
                        <tr>
                        <td >가입날짜</td>
                        <td colSpan="4">2021. 02. 20.</td>
                        </tr>
                    </tbody>
                </Table> */}

            </div>
        )
}
