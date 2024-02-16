"use client";
// import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const SplashSlider = () => {
  const pathName = usePathname();

  if (pathName !== "/") {
    return;
  }

  const slideItems = 4;

  return (
    <div>
      <Swiper
        className="h-screen w-full bg-red-300"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
      >
        {[...Array(slideItems)].map((_item, index) => (
          <SwiperItem slide={index + 1} key={index} />
        ))}
      </Swiper>
    </div>
  );
};

type SwiperItemProps = {
  slide: number;
};

const SwiperItem: FC<SwiperItemProps> = ({ slide }) => {
  return (
    <SwiperSlide className="h-full w-full">
      <Image
        src={`/images/home/horizontal/${slide}.jpg`}
        width={1920}
        height={1080}
        alt={`${slide}`}
        className="block w-full h-full object-cover"
      />
    </SwiperSlide>
  );
};

SwiperItem.displayName = "SwiperSlide";
