import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/MemberList.module.css'
import MemberInfo from './MemberInfo'
import {Row, Col} from 'react-bootstrap'
import dummy from '../../db/data.json'

export default class MemberList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container">
                <h1>project members</h1>
                <div className="cards">
                    <Row xs={1} md={3} className="g-4">
                    {/* {Array.from({ length: 0 }).map((_, idx) => ( */}
                        {dummy.members.map(member => (
                            <Col>
                                <MemberInfo
                                    id={member.id}
                                    part={member.part}
                                    name={member.name}
                                    image={member.image}
                                    intro={member.intro}
                                    skill={member.skill}
                                    git={member.git}
                                ></MemberInfo>
                            </Col>
                        ))}
                        {/* ))} */}
                    </Row>
                </div>
            </div>
        )
    }
}