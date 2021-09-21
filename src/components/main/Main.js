import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import MainTop from './MainTop'
import MainBottom from './MainBottom'
import Dashboard from '../dashboard/Dashboard';
import Certification from '../certification/Certification'
import Mycertification from '../mycertification/Mycertification';
import Profile from '../profile/Profile';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Main () {    
    //axios test
        const url = "https://www.youtube.com/watch?v=wo46N-LQK7o&t=33s";
         const data ={
        //"id_token" : response.tokenId
         }
         
        const aa = () => {
         axios({
             method:'get',
             url:url,
             data:data,
            // headers:{'Content-Type':'applicaion/json','Authorization':'Bearer '+response.accessToken},
         }).then(response=>{
             console.log(response)
         }).catch(response=>{console.log(response)})
              };

        return (
            <div>
             main입니다.
                <button onClick={aa}>test </button>
                <MainTop></MainTop>
                <MainBottom></MainBottom>
                </div> 
          
        
        )
    
}

