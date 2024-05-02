"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FC } from "react";
import "swiper/css";
import { rotateImage } from "@/utils/rotateImage";
import { SwiperNavigation } from "../ui/SwiperNavigation";
import { ImageFrame } from "../ui/ImageFrame";

const images = require.context(
  "../../../public/images/home/highlights",
  true,
  /\.(jpe?g)$/,
);
const imageList = images.keys().map((image) => images(image));

export const HighlightsSlider = () => {
  return (
    <div className="relative flex w-screen flex-col justify-center gap-y-12">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        centeredSlides={true}
        loop={true}
        className="!flex w-full flex-wrap justify-center gap-4 !overflow-y-visible"
      >
        {imageList.map((e, i) => (
          <HighlightedSlide
            url={e.default.src}
            key={i}
            slide={i + 1}
            index={i}
          />
        ))}
        <SwiperNavigation />
      </Swiper>
    </div>
  );
};

type HighlightedSlideProps = {
  url: string;
  slide: number;
  index: number;
};

const HighlightedSlide: FC<HighlightedSlideProps> = ({ url, slide, index }) => {
  return (
    <SwiperSlide className="!w-auto">
      <ImageFrame className={rotateImage(3)}>
        <Image
          src={url}
          width={400}
          height={600}
          alt={`${slide}`}
          priority={index === 0 || index === imageList.length / 2}
          className="w-[280px] md:w-[400px]"
        />
      </ImageFrame>
    </SwiperSlide>
  );
};

HighlightedSlide.displayName = "SwiperSlide";
