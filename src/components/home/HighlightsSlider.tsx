"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FC } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const HighlightsSlider = () => {
  const images = require.context(
    "../../../public/images/home/highlights",
    true,
    /\.(jpe?g)$/,
  );
  const imageList = images.keys().map((image) => images(image));

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
  return (
    <SwiperSlide className="!w-auto">
      <Image
        src={url}
        width={728}
        height={1024}
        alt={`${slide}`}
        className="block h-full w-auto object-cover"
      />
    </SwiperSlide>
  );
};

HighlightedSlide.displayName = "SwiperSlide";
