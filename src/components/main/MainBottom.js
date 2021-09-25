import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/MainBottom.module.css'
import MemberList from './MemberList'

export default class MainBottom extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div> 
                <div className={styles.container}>
                    <MemberList></MemberList>                
                </div>
            </div>
        )
    }
}


// ListGroup : primary secondary success danger warning info light dark