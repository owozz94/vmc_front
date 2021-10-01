import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/MainBottom.module.css'
import MemberList from './MemberList'
import AboutProject from './AboutProject'

export default class MainBottom extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div> 
                <div className={styles.container}>
                    <article>
                        <h2>about project</h2>
                        <AboutProject></AboutProject>
                    </article>
                    <article>
                        <h2>members</h2>
                        <MemberList></MemberList>                
                    </article>
                </div>
            </div>
        )
    }
}


// ListGroup : primary secondary success danger warning info light dark