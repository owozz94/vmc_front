import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/GoogleLogin.module.css'
import {Button} from 'react-bootstrap'

export default class GoogleLogin extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Button variant="primary" className={styles.googleBtn}>google로 로그인</Button>
            </div>
        )
    } 
}
