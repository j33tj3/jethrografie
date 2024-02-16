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

  const images = require.context(
    "../../../public/images/home/splash",
    true,
    /\.(jpe?g)$/,
  );
  const imageList = images.keys().map((image) => images(image));

  const scrollToNav = () => {
    const navElement = document.getElementById("main-navigation");
    if (navElement) {
      navElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center bg-white dark:bg-black"
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
        {imageList.map((item, index) => (
          <SwiperItem url={item.default.src} index={index + 1} key={index} />
        ))}
      </Swiper>
      <motion.button
        onClick={scrollToNav}
        className="absolute z-10 border-2 bg-white p-0.5 dark:text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="border-2 border-black p-4">
          <motion.div
            className="h-6 w-6"
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
            <ChevronDoubleDownIcon className="h-full w-full fill-black dark:fill-white" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
};

type SwiperItemProps = {
  url: string;
  index: number;
};

const SwiperItem: FC<SwiperItemProps> = ({ url, index }) => {
  return (
    <SwiperSlide className="h-full w-full">
      <Image
        src={url}
        width={1920}
        height={1080}
        alt={`slide ${index}`}
        className="block h-full w-full object-cover"
      />
    </SwiperSlide>
  );
};

SwiperItem.displayName = "SwiperSlide";
