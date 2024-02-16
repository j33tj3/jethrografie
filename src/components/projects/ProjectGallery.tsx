"use client";
import { projects } from "@/data/projectsData";
import Image from "next/image";
import { ProjectData } from "./ProjectsGallery";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProjectGallery = ({ projectId }: { projectId: string }) => {
  const project = projects.find((obj) => {
    return obj.id === projectId;
  });
  const { id, name, description, images } = project as ProjectData;
  return (
    <div>
      <div className="m-auto flex w-full max-w-5xl flex-col gap-y-6">
        <h1 className="text-3xl font-bold uppercase">{name}</h1>
        <div>{description}</div>
      </div>

      <div className="flex w-screen flex-col justify-center gap-y-12 py-12">
        <Swiper
          navigation
          slidesPerView={"auto"}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper mySwiper h-[600px] w-full !overflow-y-visible [&>.swiper-button-next]:border-4"
        >
          {images.map((image, key) => {
            return (
              <SwiperSlide key={key} className="!w-auto">
                <Image
                  key={key}
                  src={`/images/projects/${id}/${image.file}.jpg`}
                  width={image.horizontal ? 900 : 400}
                  height={image.horizontal ? 600 : 600}
                  alt=""
                  className="h-full w-auto !overflow-y-visible border-8 border-black bg-white object-cover p-4"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
