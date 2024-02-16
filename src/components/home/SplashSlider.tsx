"use client";
// import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export const SplashSlider = () => {
  const pathName = usePathname();

  if (pathName !== "/") {
    return;
  }

  const slideItems = 4;

  const scrollToNav = () => {
    const navElement = document.getElementById("main-navigation");
    if (navElement) {
      navElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center dark:bg-black bg-white"
      id="top"
    >
      <Swiper
        className="h-screen w-full"
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
      <motion.button
        onClick={scrollToNav}
        className="z-10 bg-black/50 border-2 p-4 absolute text-white dark:text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="w-6 h-6"
          animate={{
            y: ["0px", "8px", "-8px", "4px", "0px"],
          }}
          transition={{
            y: {
              duration: 0.5,
              repeat: Infinity,
              ease: "easeOut",
              repeatType: "loop",
              repeatDelay: 1,
            },
          }}
        >
          <ChevronDoubleDownIcon className="w-full h-full fill-black dark:fill-white" />
        </motion.div>
      </motion.button>
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
