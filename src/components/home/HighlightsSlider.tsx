"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const amount = 10;

export const HighlightsSlider = () => {
  return (
    <div className="flex w-screen flex-col justify-center gap-y-12 py-12">
      <h2 className="text-center text-5xl font-bold">In de schijnwerpers</h2>
      <Swiper
        pagination
        slidesPerView={"auto"}
        loop={true}
        modules={[Pagination]}
        className="mySwiper mySwiper h-[600px] w-full"
      >
        {[...Array(amount)].map((_e, i) => (
          <HighlightedSlide key={i} slide={i + 1} />
        ))}
      </Swiper>
    </div>
  );
};

type HighlightedSlideProps = {
  slide: number;
};

const HighlightedSlide: FC<HighlightedSlideProps> = ({ slide }) => {
  return (
    <SwiperSlide className="!w-auto">
      <Image
        src={`/images/home/highlights/${slide}.jpg`}
        width={728}
        height={1024}
        alt={`${slide}`}
        className="block h-full w-auto object-cover"
      />
    </SwiperSlide>
  );
};

HighlightedSlide.displayName = "SwiperSlide";
