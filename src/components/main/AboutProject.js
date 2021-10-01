import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AboutProject extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                프로젝트 소개 내용입니다
            </div>
        )
    }
}
