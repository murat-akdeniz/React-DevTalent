import React from 'react'
import star from '../images/star-yellow.svg'

import LeftArrow from "../images/arrows/left-arrow.svg"
import RightArrow from "../images/arrows/right-arrow.svg"
import uuid from 'react-uuid'
import { cardsData } from '../DataStore/cardsData'

import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module





const CardContainer = (props) => {
   return (
      <div className="cards-container container">

         <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            navigation={
               {
                  nextEl: '.next',
                  prevEl: '.prev'
               }
            }
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            loop={true}
            breakpoints={{

               996: {
                  slidesPerView: 3
               },
               // when window width is >= 768px
               768: {
                  slidesPerView: 2,
               },
               0: {
                  slidesPerView: 1,
               },
            }}
         >
            {
               props.cards.map(card => {
                  return (
                     <SwiperSlide key={uuid()}>
                        <div id={card.id} className='my-card'>
                           <div className="card-content">
                              <img src={card.img} alt="profile" className="img" />
                              <div className="title">
                                 <h5>{card.name}</h5>
                                 <small>{card.title}</small>
                              </div>
                           </div>
                           <p>{card.p}</p>
                           <div className="stars">
                              <img src={star} alt="score" />
                              <img src={star} alt="score" />
                              <img src={star} alt="score" />
                              <img src={star} alt="score" />
                              <img src={star} alt="score" />
                           </div>
                        </div>
                     </SwiperSlide>
                  )
               })
            }

         </Swiper>
         <div className="prev"><img src={LeftArrow} alt="prev" /></div>
         <div className="next"><img src={RightArrow} alt="next" /></div>
         <div className="swiper-pagination"></div>
      </div>
   )
}

const Slider = () => {
   return (
      <div className="reference">
         <div className="container text-center"><h3>References</h3></div>
         <CardContainer cards={cardsData} />


      </div>
   )
}

export default Slider
