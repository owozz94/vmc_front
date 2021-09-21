import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/ProjectIntro.module.css'

export default class Introduction extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className={styles.title}>Verify My Coin</h1>
                    <span className={styles.intro}>베마코에서는 여러분의 코인 수익을 증명하는 서비스를 제공합니다. <br/>자신의 코인 수익에 대한 증명서를 발급받아 자신의 수익을 증명하세요!</span>
                </div>
            </div>
        )
    }
}
