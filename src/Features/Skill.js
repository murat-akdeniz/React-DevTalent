import React from 'react'
import uuid from 'react-uuid'

const Skill = (props) => {

   return (

      props.skills.map((item) => {

         return (
            <div className="my-table" key={uuid()}>
               <div className="icon">
                  <img src={item.img1} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img2} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img3} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img4} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img3} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img5} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img6} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img5} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img7} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img8} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img9} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img7} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img10} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img11} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img12} alt="experience" />
                  <small>5 Years Experience</small>
               </div>
               <div className="icon">
                  <img src={item.img10} alt="experience" />
                  <small>9 Years Experience</small>
               </div>
            </div>
         )
      })


   )
}

export default Skill
