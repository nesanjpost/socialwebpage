import React from 'react';
import './Register.css'

function Register(props) {
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
                        <input placeholder='Username' className='loginInput'></input>
                        <input placeholder='Password' className='loginInput'></input>
                        <input placeholder='Password Again' className='loginInput'></input>
                        <button className='loginButton'>Sign Up</button>
        
                        <button className='loginRegisterButton'>Login into your account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;