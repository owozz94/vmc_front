import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleLogin from 'react-google-login';

const clientId ='386426216239-l87un6b97csk16831jm6m3f8t82iqigf.apps.googleusercontent.com';

export default class GoogleButton extends Component {
 
    handleGoogleResponse=(response) =>{
    //    const j = JSON.stringify(response);
       console.log(response)
    // const profile = response.getBasicProfile();
    // console.log(profile);
    // console.log(`Token || ${response.getAuthResponse().id_token}`);
       
        
    }
    handleResponseFail=(err)=>{
        console.log(err);
    }
    render(){
        
    return (
      <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google계정으로 로그인"
                onSuccess={this.handleGoogleResponse}
                onFailure={this.handleResponseFail} />
            
    </div>
    )
}
}