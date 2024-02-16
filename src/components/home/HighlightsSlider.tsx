"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FC } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { twMerge } from "tailwind-merge";

export const HighlightsSlider = () => {
  const images = require.context(
    "../../../public/images/home/highlights",
    true,
    /\.(jpe?g)$/,
  );
  const imageList = images.keys().map((image) => images(image));

  return (
    <div className="flex w-screen flex-col justify-center gap-y-12 py-12">
      <Swiper
        pagination
        slidesPerView={"auto"}
        spaceBetween={12}
        centeredSlides={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper mySwiper h-[600px] w-full !overflow-y-visible"
      >
        {imageList.map((e, i) => (
          <HighlightedSlide url={e.default.src} key={i} slide={i + 1} />
        ))}
      </Swiper>
    </div>
  );
};

type HighlightedSlideProps = {
  url: string;
  slide: number;
};

const HighlightedSlide: FC<HighlightedSlideProps> = ({ url, slide }) => {
  const randomRotate = Math.floor(Math.random() * 3 + 1);
  const randomDirection = Boolean(Math.round(Math.random())) ? "-" : "";
  return (
    <SwiperSlide className="!w-auto">
      <Image
        src={url}
        width={728}
        height={1024}
        alt={`${slide}`}
        className={twMerge(
          `block h-full w-auto border-8 border-black bg-white object-cover p-4 ${randomDirection}rotate-${randomRotate}`,
        )}
      />
    </SwiperSlide>
  );
};

HighlightedSlide.displayName = "SwiperSlide";
