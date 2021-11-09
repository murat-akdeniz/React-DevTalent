import React from 'react'
import uuid from 'react-uuid';

const Blog = (props) => {
   let img, title, tag, date;
   return (
      props.data.map((item, i) => {
         img = item.img;
         title = item.title;
         date = item.date;
         tag = item.tag;
         return (
            <div className="blog" key={uuid()}>
               <div className="col">
                  <img src={img.img1} alt="images" className="img-fluid" />
                  <div className="heading"><h4>{title.h1}</h4></div>
                  <div className="date">
                     <small className="tag">{tag.tag1}</small>
                     <small>{date.date1}</small>
                  </div>
               </div>
               <div className="col">
                  <img src={img.img2} alt="images" className="img-fluid" />
                  <div className="heading"><h4>{title.h2}</h4></div>
                  <div className="date">
                     <small className="tag">{tag.tag2}</small>
                     <small>{date.date2}</small>
                  </div>
               </div>
               <div className="col">
                  <img src={img.img3} alt="images" className="img-fluid" />
                  <div className="heading"><h4>{title.h3}</h4></div>
                  <div className="date">
                     <small className="tag">{tag.tag3}</small>
                     <small>{date.date3}</small>
                  </div>
               </div>
            </div>
         )
      })
   )
}

export default Blog
