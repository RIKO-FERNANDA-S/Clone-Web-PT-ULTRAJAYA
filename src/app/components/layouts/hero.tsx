import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';


import Img1 from "../../../../public/img/imghome1.jpg"
import Img2 from "../../../../public/img/imghome2.jpg"
import Img3 from "../../../../public/img/imghome3.jpg"
import Img4 from "../../../../public/img/imghome4.jpg"
import Img5 from "../../../../public/img/imghome5.jpg"
import Img6 from "../../../../public/img/imghome6.jpg"
import Img7 from "../../../../public/img/imghome7.jpg"
import Img8 from "../../../../public/img/imghome8.jpg"
import Image from 'next/image';


export default function Hero() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (swiper: SwiperClass, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <main className='h-max'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
      
        <SwiperSlide><Image src={Img1} alt='gambar 1' /></SwiperSlide>
        <SwiperSlide><Image src={Img2} alt='gambar 2' /></SwiperSlide>
        <SwiperSlide><Image src={Img3} alt='gambar 3' /></SwiperSlide>
        <SwiperSlide><Image src={Img4} alt='gambar 4' /></SwiperSlide>
        <SwiperSlide><Image src={Img5} alt='gambar 5' /></SwiperSlide>
        <SwiperSlide><Image src={Img6} alt='gambar 6' /></SwiperSlide>
        <SwiperSlide><Image src={Img7} alt='gambar 7' /></SwiperSlide>
        <SwiperSlide><Image src={Img8} alt='gambar 8' /></SwiperSlide>
        

        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </main>
  );
}