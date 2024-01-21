import React, { useState } from 'react';
import './send_code.css';
import LOGO_ICON_HEADING from '../../layout/template/logo_icon_heading/logo_icon_heading';
import arrowicon from '../../assets/circle_arrow.png';
import logo from '../../assets/Logo2b .png';
import Button from '../../components/component/button/button';
import Footer from '../../layout/footer/index';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Send(): React.ReactElement {
  const [radio, setRadio] = useState('phone');
  let navigate = useNavigate();

  // Handle Button Click
  const handleClick = () => {
    return navigate('/verification-code');
  };

  // Handle Radio Click
  const handleRadio = (e: any) => {
    setRadio(e.target.value);
  };

  return (
    <>
      <div className="sc-container">
        {/* LOGO_ICON_HEADING TEMPLATE */}
        <LOGO_ICON_HEADING logo={logo} icon={arrowicon} text="Lets get you in" heading="Send Code Verification" />

        {/* TEXT IN GREY */}
        <span className="sc-greyText">Enter your email OR phone number that is registered with your restAday account</span>

        {/* Phone or Email Radio */}
        <div className="sc-radio-input">
          {/* PHONE */}
          <label className="input-label" htmlFor="phone">
            <input
              className="sc-phone"
              type="radio"
              id="phone"
              value="phone"
              name="phone"
              checked={radio === 'phone'}
              onChange={handleRadio}
            />
            {/* RADIO CUSTOM ICON */}
            <span className="circle">
              <span className="innercircle"></span>
            </span>
            <span className="lab-text">Phone Number</span>
          </label>

          {/* EMAIL */}
          <label className="input-label" htmlFor="email">
            <input
              className="sc-email"
              type="radio"
              name="phone"
              value="email"
              id="email"
              checked={radio === 'email'}
              onChange={handleRadio}
            />
            {/* RADIO CUSTOM ICON */}
            <span className="circle">
              <span className="innercircle"></span>
            </span>
            <span className="lab-text">Email</span>
          </label>
        </div>

        {/* input for phone or email */}
        {radio === 'phone' && (
          <div className="sc-num" id="p-number">
            <PhoneInput country={'us'} inputProps={{ required: true }} placeholder="Enter Your Mobile Number" />
          </div>
        )}
        {radio === 'email' && <input className="sc-num" type="email" placeholder="login@gmail.com" id="p-number" />}


        {/* BUTTON   */}
        <Button text="Send" dark={true} onClick={handleClick} />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Send;
