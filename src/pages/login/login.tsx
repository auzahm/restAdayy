import React from 'react'
import "./login.css"
import logo from "../../assets/logo2.png"
import { Link } from 'react-router-dom';
import loginicon from "../../assets/login-icon.png";
import google from "../../assets/Google.png";
import facebook from "../../assets/Facebook.png";
import { useNavigate } from 'react-router-dom';
import Footer from '../../layout/footer';
import ManTree_Template from '../../layout/template/man-tree/ManTree_Template';
import Button from '../../components/component/button/button';

function Login():React.ReactElement {

  const navigate = useNavigate();


  const handleFacebook=()=>{
    navigate("/")

 }

 let handleGoogle=()=>{
  navigate("/")
 }

 let handleEmail=()=>{
  
  navigate("/")
 }
  return (
    <>
 <div className='container'> 
     {/* LEFTSIDE   */}
      
    <ManTree_Template/>

     {/* RIGHTSIDE */}
      <div className='right-box'>
      
      <img className='logo' src={logo} alt="restaday-logo" />
      
      <span className='welcome'>Welcome back !!!</span>
      
      <h1 className='login-heading'>Log In</h1>
      
      <label className='emailPassword-label'>Email, username and mobile number</label>
      
      <input className='emailPassword-input' type="email" id="email" placeholder='login@gmail.com'  required/>

      <label className='emailPassword-label'>Password</label>
      
      <input className='emailPassword-input' type="password" id="password" placeholder='Password'  required/>
     
     
      <div className='rem-for'>
     {/* REMEBER */}
     <div className='login-rem'>
     <input id='check' type='checkbox' />
     <label className='rem-text'>Remember me.</label> 
     </div>

     {/* FORGOT */}
     <Link className='forgot-pass' to="/forgot-password" >Forgot Password</Link>
       
     </div>  

     <Button text="Login" dark={true} onClick={handleEmail}/>
      
      
      {/* <div className='two-component'>
      
      <Link className='forgot-email' to="/forgotemail" >Forgot email, username?</Link>
      
      <button className='next-btn' onClick={handleEmail}><img src={loginicon} alt="login-icon" /></button>
      
      </div> */}
      
      <span className='continue font'>or continue with</span>
      
      <div className='two-component'>
        
      
        <button className='login-btn2' onClick={handleGoogle}>
          <div className='icon'><img src={google} alt="google icon" /></div>
          Sign in with Google
       </button>

        <button className='login-btn2' onClick={handleFacebook}>
              <div className='icon'><img  src={facebook} alt="facebook icon" /></div>
                         Sign With Facebook
       </button>
   
      </div>
   
   
       <div className='two-component'>
   
      <span className='last-line font'>Don’t have an account yet?</span>
      <Link className='signup-btn font' to="/signup">Sign up for free</Link>
   
      </div>
   
   
      </div>
    </div>
 
  <Footer/>
  </>
  )
}

export default Login;