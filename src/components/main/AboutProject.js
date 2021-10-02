import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectSlide from './AboutSlide'
import { Button } from 'react-bootstrap'

export default class AboutProject extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <ProjectSlide></ProjectSlide>               
                <Button variant="primary">증명서 발급 매뉴얼</Button> 
            </div>
        )
    }
}
