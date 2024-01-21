import React from 'react'
import "./button.css"

interface T_Props{
    text:string;
    dark:Boolean;
    icon?:string;
    onClick:()=>void;
   
      
    }


const button:React.FC<T_Props>=(props)=>{
  const {text,dark,onClick} = props;
  
  let bg_color:string;

  {dark ? bg_color="#011627":bg_color="#098CFC"}
  return (
    <div>
        <button className="btn" style={{background:bg_color}} onClick={onClick}>{text}  </button>
    </div>
  )
}

export default button