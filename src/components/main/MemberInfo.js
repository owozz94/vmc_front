import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Image, Card, Button} from 'react-bootstrap'
import styles from '../../css/MemberInfo.css'
// import {Button} from 'react-bootstrap'

export default function MemberInfo (props) {

    return (
            <div className="card-outline">
                <Card  className="card" style={{ width: '18rem' }} border="light" text="muted">
                    <Image className="profileImg" src={props.image} roundedCircle />
                    {/* <Card.Img className="profileImg" variant="top" src={props.image} /> */}
                    <Card.Body className="card-body">
                        <Card.Title className="card-body_title">
                            {props.part} / {props.name}
                        </Card.Title>
                        <Card.Text className="card-text">
                            <p className="introduction">{props.intro}</p>
                            <ul className="skills">
                                {props.skill.map(skill => (
                                    <li className="skill"># {skill}</li>
                                ))}
                            </ul>
                        </Card.Text>
                        <div className="btn-box"><Button className="btn" variant="dark">See portfolios</Button></div>
                    </Card.Body>
                </Card>
            </div>
        )
}