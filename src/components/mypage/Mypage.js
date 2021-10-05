// eslint-disable-next-line
import React from 'react'
// import PropTypes from 'prop-types'
import MyInfo from './MyInfo'
// import {Button} from 'react-bootstrap'
import ModalDeleteAccount from './ModalDeleteAccount'
import styles from '../../css/Mypage.module.css'

export default function Mypage () {
    const [modalShow, setModalShow] = React.useState(false);
        return (
            <div className={styles.ProfileContent}>
                    <MyInfo></MyInfo>
                        <span onClick={() => setModalShow(true)} style={{"textDecoration":"underline", "cursor":"pointer"}}>회원탈퇴</span>
                    <ModalDeleteAccount
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
            </div>
        )
}