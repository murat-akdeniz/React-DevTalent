import React from 'react'
import logo from '../images/dev-talent-logo.svg'
import LogIn from './Login'



const Header = () => {
   return (
      <header className="container header">

         <div className="wrapper">

            <div className="logo">
               <img src={logo} alt="dev-talent-logo" />
            </div>

            <div className="my-link">
               <a href="#btns">Features</a>
               <LogIn></LogIn>
               <div className="btn-wrapper">
                  <button className="my-btn">Get Your Free Page</button>
               </div>
            </div>
         </div>

      </header>
   )
}

export default Header
