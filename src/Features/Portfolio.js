import React from 'react'
import uuid from 'react-uuid'
const Portfolio = (props) => {
   return (
      props.img.map((item) => {
         console.log('item', item)
         return (
            <div className="portfolio" key={uuid()}>
               <div className="col">
                  <img src={item.p1} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>
               <div className="col">
                  <img src={item.p2} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>
               <div className="col">
                  <img src={item.p3} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>
               <div className="col">
                  <img src={item.p4} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>

               <div className="col">
                  <img src={item.p5} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>
               <div className="col">
                  <img src={item.p6} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>
               <div className="col">
                  <img src={item.p7} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>
               <div className="col">
                  <img src={item.p8} alt="images" className="img-fluid" />
                  <span>Project Name</span>
               </div>

            </div>
         )
      })


   )
}

export default Portfolio
