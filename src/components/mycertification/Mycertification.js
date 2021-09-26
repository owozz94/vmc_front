import React, { Component } from 'react'
<<<<<<< HEAD

export default class Mycertification extends Component {
    render() {
        return (
            <div>
                Mycertification
=======
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
>>>>>>> 204f2e74c34e533d263bd46e6e98c54e9a882c8b
            </div>
        )
    }
}
