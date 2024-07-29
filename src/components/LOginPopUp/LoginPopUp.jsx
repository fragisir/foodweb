import React, { useState } from 'react'
import'./LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp=({setShowLogin}) =>{
    const[currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-tittle">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"? null:<input type="text" placeholder="Username" required/>}
            <input type="email" placeholder="email" required/>
            <input type="password" placeholder="Password" required/>

        </div>
        <button>{currState==="sign up"?"Crate account":"login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"required />
            <p>By continuing, i agree to the terms of use&privacy policy.</p>
        </div>
        {currState==="Login"
        ? <p>Crate a new account? <span onClick={()=>setCurrState("sign up")}> Click here</span></p>   
    :<p>Already have a account?<span onClick={()=>setCurrState("Login")}>Login here</span></p> 
    }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
