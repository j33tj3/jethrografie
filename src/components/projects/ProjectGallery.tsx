"use client";
import { projects } from "@/data/projectsData";
import Image from "next/image";
import { ProjectData } from "./ProjectsGallery";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavigation } from "../ui/SwiperNavigation";

export const ProjectGallery = ({ projectId }: { projectId: string }) => {
  const project = projects.find((obj) => {
    return obj.id === projectId;
  });
  const { id, name, images } = project as ProjectData;

  return (
    <div>
      <div className="m-auto w-full max-w-5xl px-4">
        <h1 className="text-3xl font-bold uppercase">{name}</h1>
      </div>

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
                  className="border-8   border-black bg-white object-cover p-2 sm:p-4 md:h-[600px]  "
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
