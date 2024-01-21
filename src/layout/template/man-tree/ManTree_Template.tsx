import React from 'react'
import image from "../../../assets/login-img.png"



function ManTree_Template():React.ReactElement{
  return (
    <div>

<div className='left-box'>

<img className='image' src={image} alt="Login-Image" />

<h3 className='heading'>Select your language for your restaday account.</h3>  

<p className='para'>In publishing and graphic design, Lorem ipsum is a place and holder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>        

</div>
    </div>
  )
}

export default ManTree_Template;