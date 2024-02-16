"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";

export const SwiperNavigation = () => {
  return (
    <>
      <SwiperNavigationButton direction="left" />
      <SwiperNavigationButton direction="right" />
    </>
  );
};

interface SwiperNavigationButtonProps {
  direction: "left" | "right";
}
const SwiperNavigationButton: React.FC<SwiperNavigationButtonProps> = ({
  direction,
}) => {
  const isLeft = direction === "left";
  const buttonClass = twMerge(
    "md:absolute md:top-1/2 z-10 md:-mt-[22px] border-[6px] border-black bg-white",
    isLeft ? "left-4" : "right-4",
  );
  const swiper = useSwiper();
  return (
    <motion.button
      onClick={() => {
        isLeft ? swiper.slidePrev() : swiper.slideNext();
      }}
      className={buttonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLeft ? (
        <ChevronLeftIcon className="h-8 w-8" />
      ) : (
        <ChevronRightIcon className="h-8 w-8" />
      )}
    </motion.button>
  );
};
