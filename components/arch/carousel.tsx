import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Nike from "../../public/nike.png";
import Adidas from "../../public/adidas.jpg";
import Pc from "../../public/pc.jpeg";
import IPhone from "../../public/iphone.png";
import Apple from "../../public/apple.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={Nike}
            alt={"nike"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:rounded-xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Adidas}
            alt={"adidas"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:rounded-xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Pc}
            alt={"pc"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:rounded-xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Apple}
            alt={"apple"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:rounded-xl "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
