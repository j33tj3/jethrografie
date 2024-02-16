"use client";
import { ProjectImages } from "@/data/projectsData";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavigation } from "../ui/SwiperNavigation";

export const ProjectImageSwiper = ({
  id,
  images,
  className,
}: {
  id: string;
  images: ProjectImages[];
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="flex w-screen flex-col justify-center gap-y-12 py-12">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          className="!flex w-full flex-wrap justify-center gap-4 !overflow-y-visible"
        >
          {images.map((image, key) => {
            return (
              <SwiperSlide
                key={key}
                className="!flex !h-auto w-full items-center justify-center px-2 sm:px-0 md:!w-auto"
              >
                <Image
                  priority={key === 0}
                  src={`/images/projects/${id}/${image.file}.jpg`}
                  width={image.horizontal ? 900 : 400}
                  height={600}
                  alt=""
                  className="border-8 border-black bg-white object-cover p-2 sm:p-4 md:h-[600px]  "
                />
              </SwiperSlide>
            );
          })}
          <SwiperNavigation />
        </Swiper>
      </div>
    </div>
  );
};
