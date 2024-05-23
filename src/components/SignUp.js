import React from 'react'
import './SignIn.css'
import logo from '../assets/image.png'


export default function SignUp() {
  return (
    <div className='sign-in'>
       <div className='sign-up-box'>
            <div className='sign-up-logo'>
            <img src={logo} alt="image al" />

            </div>
            <div className='sign-up-header'>
              <h1>Sign Up</h1>
              <div className='Or'>Or Sign in</div>

            </div>
            <div className='input-box'>
              <input placeholder='Email' type='text'></input>
            </div>
            <div className='input-box'>
              <input placeholder='Password' type='text'></input>
            </div>
            <div className='input-box'>
              <input placeholder='Re-Enter Password' type='text'></input>
            </div>

            <div className='footer'>
              <div className='sign-up-box-remember-me'>
                <input type='checkbox'></input>
                <label>Remember me</label>
              </div>
              <div className='sign-up-box-forgot-password'>
                <a>
                Forgot Password?
                </a>
              </div>
            </div>

            <div className='sign-up-button-box'>
              <button className='sign-up-button'>
                  Log In
              </button>

            </div>

        </div>
    </div>
  )
}
