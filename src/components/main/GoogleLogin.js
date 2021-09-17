import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GoogleLogin extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <button>google로 로그인</button>
            </div>
        )
    }
}
