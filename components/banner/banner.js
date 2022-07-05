import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image.js";
import slide1 from "../../public/images/61.jpg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
export default function Banner() {
  return (
    <div className="">
      <Swiper
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
          <BsFillArrowLeftCircleFill  className="prev hidden sm:block text-center text-secondary leading-relaxed sm:leading-10 text-xl sm:text-2xl absolute top-1/2 left-4 -translate-y-1/2 z-10 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-2 border-secondary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-secondary"/>
        
          <BsFillArrowRightCircleFill  className="next  hidden sm:block text-center text-secondary leading-relaxed sm:leading-10 text-xl sm:text-2xl absolute top-1/2 right-4 -translate-y-1/2 z-10 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-2 border-secondary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-secondary"/>
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
