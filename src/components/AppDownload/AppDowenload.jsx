import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
function AppDowenload() {
  return (
    <div className='app-download'id='app-download'>
        <p>For Better Experience Dowenload <br />Roshan App</p>
        <div className='app-download-plateforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDowenload