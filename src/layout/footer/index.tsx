import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

function Footer():React.ReactElement {
  return (
    <div className='footer'>
      <div className='left-content'>restAday © 2023 | All Rights Reserved</div>
      <div className='right-content'>
        <ul className='list'>
            <li><Link className='linklist' to="/">About</Link>      </li>|
            <li><Link className='linklist' to="/">Privacy</Link>    </li>|
            <li><Link className='linklist' to="/">Help</Link>       </li>|
            <li><Link className='linklist' to="/">Cookies</Link>    </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;