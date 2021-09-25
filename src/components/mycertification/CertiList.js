import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CertiForm from './CertiForm'
import dummy from '../../db/data.json'
import styles from '../../css/CertiList.css'

export default class CertiList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                    {dummy.certiList.map(certi => (
                        <CertiForm
                            id={certi.id}
                            coin={certi.coin}
                            start={certi.start}
                            end={certi.end}
                            amount={certi.amount}
                            app={certi.app}
                            rate={certi.rate}
                            profit={certi.profit}
                        ></CertiForm>
                        ))}
            </div>
        )
    }
}

// "certiList": [{
//     "id": "1",
//     "start":v "2019.02.01",
//     "end": "2019.08.01",
//     "거래량": "0.5BTC",
//     "app": "bithumb",
//     "수익률": "+15%",
//     "평가손익": "1129,000원"
// }, {
//     "id": "2",
//     "start": "2020.02.01",
//     "end": "2020.08.01",
//     "거래량": "1.0BTC",
//     "app": "upbit",
//     "수익률": "+7%",
//     "평가손익": "500,000원"
// }]


// 데이터
// 코인명 / 시작기간,종료기간 / 거래량 / 거래소 / 수익률 / 평가손익
// url 복사하기 버튼


{/* <ListGroup.Item variant="primary">Primary</ListGroup.Item>
<ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
<ListGroup.Item variant="success">Success</ListGroup.Item>
<ListGroup.Item variant="danger">Danger</ListGroup.Item>
<ListGroup.Item variant="warning">Warning</ListGroup.Item>
<ListGroup.Item variant="info">Info</ListGroup.Item>
<ListGroup.Item variant="light">Light</ListGroup.Item>
<ListGroup.Item variant="dark">Dark</ListGroup.Item> */}