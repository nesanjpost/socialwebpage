import React from 'react';
import './Login.css'

function Login(props) {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>BeSocial</h3>
                    <span className='loginDesc'>
                        You can connect with your Friends and world here on BeSocial.
                    </span>
                </div>
                <div className='loginRight'>
                    <div className='loginBox'>
                        <input placeholder='Email' className='loginInput'></input>
                        <input placeholder='Password' className='loginInput'></input>
                        <button className='loginButton'>Log In</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className='loginRegisterButton'>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;