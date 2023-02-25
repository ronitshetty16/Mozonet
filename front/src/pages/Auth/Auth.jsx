import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from 'react';
import {client} from '../../client';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';


const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Mozonet</h1>
          <h6>Connect with peers beyond boundaries.</h6>
        </div>
      </div>

      <LogIn/>
    </div>
  );
};
function LogIn() {

    const navigate = useNavigate();
    const responseGoogle = (response) => {
      const decoded = jwt_decode(response.credential);
      console.log(decoded);

      localStorage.setItem('user', JSON.stringify(decoded));
      const {name,picture,email,sub} = decoded

      const user = {
          _id: sub,
          _type: 'user',
          userName: name,
          email: email,
          image: picture,
      };

      client.createIfNotExists(user).then(() => {
              navigate('/profile', { replace: true });
          });

    };

    return (
          <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In & Sign up</h3>
  
          
            <GoogleLogin
            className="gbutton"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}>
              
                <button className="button infoButton">
                  Login
                </button>
                <div class="message">Use you university email for log in, to enter your university space.</div>
            </GoogleLogin>
            
            <div class="message">Use you university email for log in, to enter your university space.</div>
        </form>
      </div>
          </GoogleOAuthProvider>
    );
  }
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
