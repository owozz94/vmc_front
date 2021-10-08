import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalManual(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Header closeButton> */}
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">증명서 발급 매뉴얼</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <ul>
          <li>1) 정보 입력</li>
          <li>
            2) key 입력
            <a href="https://www.bithumb.com/customer_support/info_guide?seq=1901&categorySeq=205" target="_blank" rel="noreferrer">
              key 발급 방법 알아보기
            </a>
          </li>
          <li>3) 수익 조회</li>
          <li>4) 증명서 발급</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>내용을 확인했습니다.</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalManual;
