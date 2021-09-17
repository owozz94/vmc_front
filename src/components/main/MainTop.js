import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectIntro from './ProjectIntro'
import GoogleLogin from './GoogleLogin'

export default class MainTop extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <ProjectIntro></ProjectIntro>
                <GoogleLogin></GoogleLogin>
            </div>
        )
    }
}
