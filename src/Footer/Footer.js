import React from 'react'
import logo from '../images/dev-talent-logo.svg'
import twitter from '../images/social-icons/twitter.svg'
import instagram from '../images/social-icons/instagram.svg'
import linkedin from '../images/social-icons/linkedin.svg'
const Footer = () => {
   return (
      <footer className="container footer">
         <div className="row">
            <div className="col-9 wrapper">
               <div className="logo">
                  <img src={logo} alt="dev-talent-logo" />
               </div>
               <div className="links">
                  <a href="#!">Features</a>
                  <a href="#!">Log In</a>
                  <a href="#!">Get Your Free Page</a>
                  <a href="^!"><img src={linkedin} alt="social" /></a>
                  <a href="^!"><img src={instagram} alt="social" /></a>
                  <a href="^!"><img src={twitter} alt="social" /></a>
               </div>
            </div>
            <hr />
            <div className="copyright">
               <small>Copyrights 2020 DevTalent</small>
               <div className="policy">
                  <small>Terms of Services</small>
                  <small>Privacy Policy</small>
               </div>
            </div>

         </div>
      </footer>
   )
}

export default Footer
