import React from 'react'

import "./logo_con_heading.css"

interface T_Props {
  logo:string;
  icon?:string;
  text:string;
  heading:string;
}

const logo_icon_heading:React.FC<T_Props>=(props)=>{
  return (
    <div>
      {/* LOGO OF RESTADAY */}
     <div><img className='f-image' src={props.logo} alt="Logo of RestAday"/></div>

      {/* CIRCLE ICON    */}
        <div><img className='f-icon' src={props.icon} alt="lock icon" /></div>
        
        {/* SMALL HEADING */}
        <div><span className='f-text'>{props.text}</span></div>
        
        {/* HEADING */}
        <h1 className='f-heading'>{props.heading}</h1>

    </div>
  )
}

export default logo_icon_heading