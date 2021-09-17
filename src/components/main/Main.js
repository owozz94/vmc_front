import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainTop from './MainTop'
import MainBottom from './MainBottom'

export default class Main extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                main입니다.
                <MainTop></MainTop>
                <MainBottom></MainBottom>
            </div>
        )
    }
}

