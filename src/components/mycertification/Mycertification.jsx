import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CertiList from './CertiList'
import styles from '../../css/Mycertification.css'


export default class Mycertification extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <CertiList></CertiList>
            </div>
        )
    }
}
