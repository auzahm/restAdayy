import React from 'react'
import image from "../../assets/login-img.png";
import logo2b from "../../assets/Logo2b .png"
import "./language.css"
import Footer  from '../../layout/footer';
import ManTree_Template from '../../layout/template/man-tree/ManTree_Template';

function language():React.ReactElement {
  return (
    <div>
        <div className='l-container'>
      {/* LEFTSIDE OF PAGE */}
       <ManTree_Template/>
      {/* RIGHTSIDE OF PAGE */}
       <div className="l-right-box">
        {/* logo */}
       <img className='l-logo' src={logo2b} alt="RastAday 2nd Logo" />
         
         {/* all buttons */}
         <div className='l-btn-container'>
          <button className='l-btn'>Deutsch</button>
          <button className='l-btn'>French</button>
          <button className='l-btn'>Italian</button>
          <button className='l-btn'>Chains</button>
          <button className='l-btn'>Espanola</button>
          <button className='l-btn'>Arabic</button>
          <button className='l-btn'>More</button>
          

         </div>
       </div>
      
     </div>
     <Footer/>
    </div>
  )
}

export default language;