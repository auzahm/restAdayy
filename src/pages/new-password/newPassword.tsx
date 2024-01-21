import React from 'react'
import Logo_Icon_Heading from '../../layout/template/logo_icon_heading/logo_icon_heading'
import Footer from '../../layout/footer'
import logo from "../../assets/Logo2b .png"
import lockicon from "../../assets/circle_lock.png"
import "./newPassword.css"
import Button from '../../components/component/button/button'



function newPassword():React.ReactElement {

  const handleClick=()=>{

  }


return (<>
    <div className='np-container'>
        {/* LOGO_ICON HEADING TEMPLATE */}
        <Logo_Icon_Heading logo={logo} icon={lockicon} text='Lets get you ' heading='Set New Password'/>
       
       {/* PASSWORDS */}
       <div className='np-passwords'>
        <label className='np-passwordLabel'>Password</label>
        <input className='np-password' type="password" required />
        <label className='np-passwordLabel'>Confirm Password</label>
        <input className='np-password' type="password" required/>
       </div>

       {/* Button Component */}
       <Button text="Submit" dark={false} onClick={handleClick}/>

        </div>
    <Footer/>
    </>
  )
}

export default newPassword