import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// import data
import { heroSlider } from "../data";

import Header from "./Header";

const HeroSlider = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Header title="Welcome to Pet Heaven" />
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="heroSlider"
      >
        {heroSlider.map((slide, index) => {
          // destructure slide
          const { title, subtitle, image, buttonText } = slide;
          return (
            <SwiperSlide className="py-12 lg:py-16" key={index}>
              <div className="container mx-auto text-center lg:text-left">
                <div className="flex flex-col justify-between items-center lg:flex-row">
                  <div className="homeText">
                    <h1 className="text-blue text-[36px] leading-tight lg:text-[72px] lg:leading-[98px] font-extrabold mb-4">
                      {title}
                    </h1>
                    <p
                      className="text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8"
                      style={{
                        color: "black",

                        textAlign: "center",
                      }}
                    >
                      {subtitle}
                    </p>
                    <button className="btn bg-orange text-white mb-8 lg:mb-0">
                      {buttonText}
                    </button>
                  </div>
                  <div className="homeImage">
                    <img src={image.type} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
