import React from 'react'



import { tableStore, tableStore2 } from '../DataStore/tableData'
import TableWork from './TableWork'
import TableEducation from './TableEducation'
import Portfolio from './Portfolio'
import { blog, portfolio, skill } from '../DataStore/imageStore'
import Blog from './Blog'
import Skill from './Skill'



const Features = () => {

   return (
      <div className="features container-fluid p-0">
         <div className="buttons" id="btns">

            <div className="my-container">
               <a href="#tech-skill" className="section">Technology - Skills</a>
               <a href="#work-exp" className="section">Work Experience</a>
               <a href="#education" className="section">Education</a>
               <a href="#portfolio" className="section">Portfolio</a>
               <a href="#blog" className="section">Blog</a>
            </div>

         </div>
         <div className="container">
            <div className="skills">
               <div className="headings" id="tech-skill">
                  <h3 className="headings__skill">Skills</h3>
                  <h3 className="headings__technology">Technology</h3>
                  <h3 className="headings__languages">Languages</h3>
               </div>
               <Skill skills={skill} />
            </div>

            <div className="work-experience">
               <div className="heading" id="work-exp">
                  <div className="heading__round"></div>
                  <h3>Work Experience</h3>
               </div>
               <TableWork table={tableStore} />

               <div className="heading" id="education">
                  <div className="heading__round"></div>
                  <h3>Education</h3>
               </div>
               <TableEducation table={tableStore2} />


               <div className="heading mt-5 mb-5" id="portfolio">
                  <div className="heading__round"></div>
                  <h3>Portfolio</h3>
               </div>
               <Portfolio img={portfolio} />

               <div className="more-posts"><span>Load More Posts</span></div>
               <div className="heading mt-5 mb-5" id="blog">
                  <div className="heading__round"></div>
                  <h3>Blog</h3>
               </div>
               <Blog data={blog} />

               <div className="more-posts"><span>Load More Posts</span></div>
            </div>
         </div>
      </div>

   )
}

export default Features
