import {BannerSwp} from './styled';

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import stylesSw from "./page.module.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function MainSwiper() {
  return (
    <BannerSwp className={stylesSw.mainSwiper}>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={stylesSw.swiper}
        >
          {
            [...Array(10).keys()].map((i) => {
              return (
                <SwiperSlide className={stylesSw.swiperSlide} >
                  <img src={`../../../images/swiper/${i + 1}.jpg`} alt="banner" />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </BannerSwp>
  );
}