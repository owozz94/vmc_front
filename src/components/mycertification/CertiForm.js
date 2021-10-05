import React from 'react'
// import PropTypes from 'prop-types'
import { Button, Row, Col, Card, Container } from 'react-bootstrap'


const CertiForm=(props)=> {
        return (
            <div className="certi-box">
                <Card>
                    <Card.Header className="title">
                        <p>
                            {props.id}&nbsp;/&nbsp;{props.coin}
                        </p>
                        <span>
                            {props.start}-{props.end}
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Container className="content">
                            <Row>
                                <Col className="item">
                                    <p classNamve="item_value">{props.amount}{props.coin}</p>
                                    <span className="item_tag">거래량</span>
                                </Col>
                                <Col className="item">
                                    <p classNamve="item_value">{props.app}</p>
                                    <span className="item_tag">거래소</span></Col>
                            </Row>
                            <Row>
                                <Col className="item">
                                    <p classNamve="item_value">{props.rate}%</p>
                                    <span className="item_tag">수익률</span>
                                </Col>
                                <Col className="item">
                                    <p classNamve="item_value">{props.app}</p>
                                    <span className="item_tag">거래소</span>
                                </Col>
                            </Row>
                            </Container>
                        </Card.Text>
                        <Card.Title className="card_title">
                            <Container>
                                <Row>
                                    <Col>
                                    <div className="item">
                                        <p classNamve="item_value">{props.profit}원</p>
                                        <span className="item_tag">평가손익</span>
                                    </div>
                                    </Col>
                                    <Col>
                                        <Button className="urlBtn" variant="dark">URL 복사하기</Button>
                                    </Col>
                                </Row>
                            </Container>

                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
}

export default CertiForm;




// <div className="title">
// <p>
//     {props.id}/{props.coin}
// </p>
// <span>
//     {props.start}-{props.end}
// </span>
// </div>
// <ul className="content">
// <li>{props.amount}{props.coin}</li>
// <li>{props.app}</li>
// <li>{props.rate}%</li>
// <li>{props.profit}원</li>
// </ul>
// <div className="btnBox">
// <Button>URL 복사하기</Button>
// </div>