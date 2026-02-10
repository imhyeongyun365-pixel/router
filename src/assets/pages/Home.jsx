import React from 'react'
import "../pages/styles/Home.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation, Autoplay } from 'swiper/modules';
import { homeSlides } from '../../data/homeslide';
function Home() {
  return (
    <section className='home'>
        <div className='inner'>
        <h2>home</h2>
        <Swiper Navigation={true} pagination={true} loop modules={[Pagination,Navigation,Autoplay]} className="home-slider">
            {homeSlides.map(({id,title,img,subtitle})=>(
        <SwiperSlide key={id} style={{backgroundImage:`url(${img})`}}>
           <h4>
            {title}
            </h4>
            <p>
                {subtitle}    
            </p> 
        </SwiperSlide>
            ))}
    
      </Swiper>
        </div>
        </section>
  )
}

export default Home