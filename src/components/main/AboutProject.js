import React from 'react'
import AboutSlide from './AboutSlide'
import { Button } from 'react-bootstrap'
import ModalManual from './ModalManual'

export default function AboutProject () {

    const [modalShow, setModalShow] = React.useState(false);

        return (
            <div>
                <AboutSlide></AboutSlide>               
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    증명서 발급 메뉴얼
                </Button>
                <ModalManual
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        )
}
