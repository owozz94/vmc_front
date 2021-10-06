// eslint-disable-next-line
import React from 'react'
// import PropTypes from 'prop-types'
import {Modal, Button} from 'react-bootstrap'
// import axios from "axios";
// const clientId = "386426216239-l87un6b97csk16831jm6m3f8t82iqigf.apps.googleusercontent.com";

function ModalDeleteAccount(props) {

return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    {/* <Modal.Header closeButton> */}
    <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            탈퇴 안내
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
            회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.<br/>
            탈퇴한 아이디는 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.<br/>
            탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.
        </p>
        <input type="checkbox"/> 위의 내용에 동의합니다.
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>회원탈퇴</Button>
    </Modal.Footer>
    </Modal>
);
}

export default ModalDeleteAccount;