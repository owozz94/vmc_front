import React from 'react'
// import PropTypes from 'prop-types'
import { Button, Row, Col, Card, Container } from 'react-bootstrap'
import styles from '../../css/CertiForm.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function CertiForm(props){

    const handleUrl=()=>{

    }

        return (
            <div className={styles.certiBox}>
                <Card>
                    <Card.Header className={styles.hd}>
                        <div className={styles.title}>
                            {props.order} 보유코인 / {props.app} 거래소
                        </div>
                        <CopyToClipboard text={ props.url }>
                            <Button id={props.url} className={styles.urlBtn} variant="dark">공유</Button>
                        </CopyToClipboard>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Container className={styles.content}>
                            <Row>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.start} ~ {props.end}</p>
                                    <span className={styles.itemTag}>증명기간</span>
                                </Col>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.units} {props.order}</p>
                                    <span className={styles.itemTag}>보유수량</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.average} {props.payment}</p>
                                    <span className={styles.itemTag}>평균단가</span>
                                </Col>
                                <Col className={styles.item}>
                                    <p className={styles.itemValue}>{props.profit} {props.payment}</p>
                                    <span className={styles.itemTag}>평가손익</span>
                                </Col>
                            </Row>
                            </Container>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
}

export default CertiForm;




    