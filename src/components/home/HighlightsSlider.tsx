"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import "swiper/css";
import { twMerge } from "tailwind-merge";
import { rotateImage } from "@/utils/rotateImage";
import { SwiperNavigation } from "../ui/SwiperNavigation";

export const HighlightsSlider = () => {
  const images = require.context(
    "../../../public/images/home/highlights",
    true,
    /\.(jpe?g)$/,
  );
  const imageList = images.keys().map((image) => images(image));

  return (
    <div className="relative flex w-screen flex-col justify-center gap-y-12 py-12">
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
  const [slideClass, setSlideClass] = useState<string>("");
  useEffect(() => {
    setSlideClass(
      twMerge(
        "border-8 border-black bg-white p-2  md:p-4 w-[280px] md:w-[400px]",
        rotateImage(3),
      ),
    );
  }, []);
  return (
    <SwiperSlide className="!w-auto">
      <div>
        <Image
          src={url}
          width={400}
          height={600}
          alt={`${slide}`}
          priority={index === 0}
          className={slideClass}
        />
      </div>
    </SwiperSlide>
  );
};

HighlightedSlide.displayName = "SwiperSlide";
