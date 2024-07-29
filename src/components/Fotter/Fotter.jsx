import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className='fotter' id='fotter'>
        <div className="fotter-content">
            <div className="fotter-content-left">
                <img src={assets.logo} alt="" />
                <p>hellojdw wehfoiwjowij </p>
                <div className="fotter-social-icons">
                    <ul>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    </ul>
                </div>
            </div>

            <div className="fotter-content-center">
                <ul>
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>Abouts Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="fotter-content-right">
                <ul>
                <h2>Get In Touch</h2>
                <li>+08064239592</li>
                <li>roshanbasnet238@gmail.com</li>
                </ul>
            </div>
            

        </div>
        <hr />
        <p className='fotter-copyright'>Copyright 2025 Roshan.com- All Right Reserved</p>
      
    </div>
  )
}

export default Fotter
