import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyInfo from './MyInfo'

export default class Mypage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <MyInfo></MyInfo>
                <button style={{"background":"transparent", "border":"none", "textDecoration":"underline", "color":"gray"}}>회원탈퇴</button>
            </div>
        )
    }
}
