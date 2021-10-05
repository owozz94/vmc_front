import React, { Component } from "react";
import PropTypes from "prop-types";
import CertiList from "./CertiList"

export default class Mycertification extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return ( 
            <div>
                <CertiList></CertiList>
            </div>
        );
    }
}