import React from 'react'
import './index.css';
import logo from  "../../assets/logo.png";


function Template():React.ReactElement {
  return (
    <div>
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
    </div>
  )
}

export default Template;