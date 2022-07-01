import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image.js";
import slide1 from "../../public/images/61.jpg";
export default function Banner() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
      </Swiper>
    </div>
  );
}

const Slide = () => {
  return (
    <div className="flex items-center pl-24 bg-[#f2f6f7]">
      <div className="w-1/2 pl-2 pr-8">
        <h3 className="text-xl"> Real Estate Agency</h3>
        <h1 className="text-5xl font-bold my-4 text-primary">
          Find Your Dream <br /> House By Us
        </h1>
        <p className="border-l border-primary pl-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
          <br /> quisquam ad ullam illum veniam und quos?
        </p>
        <div className="flex  mt-5 gap-6">
          <button
            className="btn2 px-8 py-4 relative bg-secondary uppercase  tracking-wider leading-none text-white overflow-hidden"
            type="button"
          >
            <span className="absolute inset-0 bg-black"></span>
            <span className="absolute inset-0 flex justify-center items-center hover:text-white">
              Our Service
            </span>
            Our Service
          </button>
          <button
            className="btn2 px-8 py-4 relative  shadow-2xl bg-white uppercase  tracking-wider leading-none text-primary overflow-hidden"
            type="button"
          >
            <span className="absolute inset-0 bg-black"></span>
            <span className="absolute inset-0 flex justify-center items-center hover:text-white">
              Learn More
            </span>
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/2 -mb-2">
        <Image src={slide1} alt="slide1" />
      </div>
    </div>
  );
};
