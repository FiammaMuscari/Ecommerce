import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";


import { Navigation, Autoplay } from "swiper";

const SliderContainer = () => {

    
  return (
    <>
    <div style={{ margin: "3em auto auto", width:'60em', display:'flex',maxWidth: '90%' }}>
      <Swiper style={{borderRadius:'1em'}} navigation={true} loop={true} modules={[Autoplay, Navigation]} autoplay={{delay: 2500, disableOnInteraction: false}} className="mySwiper ">
      <SwiperSlide ><img style={{maxWidth: '100%'}} src="https://i.ibb.co/x2y6tFP/1.png" alt="" /></SwiperSlide>
        <SwiperSlide>
        <img style={{maxWidth: '100%'}} src="https://i.ibb.co/znbF6F1/2.png" alt="" />
        </SwiperSlide>
        
        <SwiperSlide><img style={{maxWidth: '100%'}} src="https://i.ibb.co/fGXf7rg/3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{maxWidth: '100%'}} src="https://i.ibb.co/84Rk3wG/4.png" alt="" /></SwiperSlide>
      </Swiper>
      </div>
        </>
  )
}

export default SliderContainer