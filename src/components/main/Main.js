import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import MainTop from './MainTop'
import MainBottom from './MainBottom'
import axios from 'axios'
export default function Main () {
   
       
        return (
            <div>
                main입니다.
                <MainTop></MainTop>
                <MainBottom></MainBottom>
            </div>
        )
    
}

