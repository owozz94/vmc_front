import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Table} from 'react-bootstrap'

export default class MyInfo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                
                {/* <Table striped bordered hover> */}
                <Table bordered>
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
                </Table>

            </div>
        )
    }
}
