import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Introduction extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div>
                    <h1>프로젝트명</h1>
                    <span>소개글</span>
                </div>
            </div>
        )
    }
}
