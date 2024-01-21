import React from 'react'
import "./forgot.css"
import { useNavigate } from 'react-router-dom'
import logo2b from "../../assets/Logo2b .png"
import lockicon from "../../assets/circle_lock.png"
import LOGO_ICON_HEADING from '../../layout/template/logo_icon_heading/logo_icon_heading';


function Forgot(): React.ReactElement {

    const navigate = useNavigate();

    let handleCancel = () => {
        navigate("/")
    }

    let handleSend = () => {
        navigate("/")

    }
    return (
        <div className='f-container'>
            <div>
                {/* TEMPLATE OF LOGO ICON HEADING    */}
                <LOGO_ICON_HEADING logo={logo2b} icon={lockicon} text="Lets get you reset" heading="Forgot your Password" />


                <div><span className='f-greyText'>Reset link sent to you email address.</span></div>

                <input className='f-emailinput' type="email" id="email" placeholder='login@gmail.com' required />

                <div><span className='f-blueText'>Not you? try your email address.</span></div>

                {/* TWO BUTTON */}
                <div className='two-btn'>
                    <button className='f-cbtn' onClick={handleCancel}>Cancel</button>
                    <button className='f-sbtn' onClick={handleSend}>Send Mail</button>
                </div>


            </div>
        </div>
    )
}

export default Forgot