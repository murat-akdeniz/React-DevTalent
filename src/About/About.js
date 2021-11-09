import React, { useState } from 'react'
import img1 from '../images/white-collar.png'
import img2 from '../images/star.svg'
import img3 from '../images/location.svg'
import pdf from '../images/pdf.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import yellowstar from '../images/star-yellow.svg'
import CircleProgress from './CircleProgress'


const About = () => {

   const [check, setCheck] = useState(true);
   return (
      <div className="container py-5">
         <div className='row'>
            <div className="col-lg-4 col-md-12 p-0 text-center">
               <img src={img1} alt="white collar" className="img-fluid" />
               <div className="icons">
                  <a href="#!"><img src={pdf} alt="pdf" className="icon-img" /></a>
                  <a href="#!"><img src={linkedin} alt="linkedin" className="icon-img" /></a>
                  <a href="#!"><img src={github} alt="github" className="icon-img" /></a>
                  <a href="#!"><img src={twitter} alt="twitter" className="icon-img" /></a>
               </div>
            </div>
            <div className="col-lg-4 col-md-12 p-2">
               <div className="name py-3 mt-sm-3 mt-3">

                  <div className="part1">
                     <h3>Bojan Sandic</h3>
                     <button className='my-btn'>
                        <img src={img2} alt="star" className="img-fluid" />
                        FEATURED
                     </button>
                  </div>

                  <div className="part2">
                     <div className="my-sm-0 my-2"><span className="circle"></span><span>Web Developer</span></div>

                     <div><img src={img3} alt="yer" /><span>Germany, Munichen</span></div>
                  </div>
               </div>

               <div className="about-me">
                  <h3>About Me</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
               <div style={{ textAlign: 'center' }}>
                  <button className="contact-me">Contact Me</button>
               </div>
            </div>
            <div className="col-lg-4 col-md-12 ps-5">

               <div className="total-review">
                  <img src={yellowstar} alt="reviews" width="20" height="20" />
                  <small>5.0 of 325 Total Reviews</small>
               </div>

               <div className="circle-container">
                  <div className="circle-1">
                     <CircleProgress pieColor={check} />
                  </div>
               </div>
               <div className="text"><span>DevTalent Rank</span></div>
               <div className="circle-container">
                  <div className="circle-1">
                     <CircleProgress pieColor={!check} />
                  </div>
               </div>

               <div className="text"><span>DevTalent Score</span></div>

               {/*                <div className="circle-container">
                  <div className="circle-1">
                     <div className="circle-blue">
                        <div className="circle-3"><span>%78</span></div>
                     </div>
                  </div>
               </div>
               <div className="text"><span>DevTalent Score</span></div> */}
            </div>
         </div>
      </div>

   )
}

export default About
