import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectIntro from './ProjectIntro'
import GoogleButton from './GoogleButton'

export default class MainTop extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <ProjectIntro></ProjectIntro>
                <GoogleButton></GoogleButton>
            </div>
        )
    }
}
