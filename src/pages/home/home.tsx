import React from 'react'
import './index.css';
import logo2 from "../../assets/logo2.png"
import Footer from "../../layout/footer/index"
import { useNavigate } from 'react-router-dom';
import logo from  "../../assets/logo.png";

function Home():React.ReactElement {
  const navigate = useNavigate();

  let handleLogin=()=>{
      navigate("/login")   
  }
 
  let handleSingup=()=>{
    navigate("/signup")

 }


 let handleLanguage=()=>{
      
  navigate("/language")

 }
  return (

    <>
    <div className="container">
    
    
    <div className="left-box">
<div >
<img className='img' src={logo} alt="RestAday-Logo" />
</div>

<h1 className='left-heading'>restAday</h1>


<div >

<div className='line'></div>
<span className='second-heading'>Social Media for Professionals & Businesses</span>
<div className='line'></div>
</div>


<p className='para'>In publishing and graphic design, Lorem ipsum is a place and holder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
</div>
       
   
        <div className="right-box">
         
         <div className="right-heading">
          Get start with
         </div>
         
         <img className='logo2' src={logo2} alt="" />
         
         
         <button className='login-btn' onClick={handleLogin}>Login      <svg className='login-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M4.58043 16.7125H21.9913L17.84 11.491C17.722 11.3427 17.8285 11.1201 18.0212 11.1201H19.8854C20.1674 11.1201 20.4349 11.2485 20.6075 11.4682L25.3256 17.403C25.8003 18.0022 25.3716 18.881 24.6035 18.881H4.58043C4.45385 18.881 4.35028 18.7783 4.35028 18.6527V16.9408C4.35028 16.8152 4.45385 16.7125 4.58043 16.7125Z" fill="white"/>
          </svg> </button>


         <button className='cr-btn' onClick={handleSingup}>Create Account</button>
         
         
         <span className='language' onClick={handleLanguage}>Change Language?</span>

        </div>
      
    </div>
   
    <Footer/>
    </>

  )
}

export default Home;