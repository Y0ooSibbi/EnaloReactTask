import React from 'react'
import './SignIn.css'
import logo from '../assets/image.png'


export default function SignIn() {
  return (
    <div className='sign-in'>
      <div className='main-image'>
        <img src='https://s3-alpha-sig.figma.com/img/6dd6/fb84/9a1008b9de2fc1c4ad5db39e51ae4b62?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fHuE5sEYTizQUvkHjCThxsms8faG3az5tXZe8ru0-rP3LIT1AICLBOTdjD~1MuWj~V8PNv7HwxumDD6gPKul4KwGD-~4lO7SAKN5-MUqbWOysURU0cWSqXGLcsvAwkSF247rGcwB6x0OJ8WyXSAsm5s6HyIEGxuviiOemjW2th8sojMuu~GWw~yu7uLX6SLpwVmU~Zvn2xSo4WxwI3lPVpBXwsorlBxfWtQ8AI2pLJO0IvS1xpp--l3XEXthkFWtmuUtdXvNpV9CMt7cerNmzlDuFyvVoMyHwUIe~cZnTMMaTaGC75uWdmOoNb~fG-oLPRZGUbbcXrAmi9POeapPoQ__'></img>
      </div>
      <div className='right-part'>
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
      
    </div>
  )
}
