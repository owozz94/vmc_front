import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import {Button} from 'react-bootstrap'
import ModalDeleteAccount from './ModalDeleteAccount'
import styles from '../../css/Profile.module.css'

export default function Profile () {
    const [modalShow, setModalShow] = React.useState(false);
        return (
            <div className={styles.ProfileContent}>
                    <ProfileInfo></ProfileInfo>
                        <span onClick={() => setModalShow(true)} style={{"textDecoration":"underline", "cursor":"pointer"}}>회원탈퇴</span>
                    <ModalDeleteAccount
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
            </div>
        )
}