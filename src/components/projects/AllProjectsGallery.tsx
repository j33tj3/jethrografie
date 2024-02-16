"use client";
import { projects, ProjectData } from "@/data/projectsData";
import { rotateImage } from "@/utils/rotateImage";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ImageFrame } from "../ui/ImageFrame";

export const AllProjectsGallery = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project: ProjectData, index: number) => {
        const { name, id } = project;
        return (
          <div
            key={index}
            className={twMerge("flex flex-col justify-center", rotateImage(2))}
          >
            <Link
              href={`/projects/${id}`}
              className="group self-center bg-black p-2 text-lg font-bold uppercase text-white dark:bg-white dark:text-black md:p-4"
            >
              {name}
            </Link>
            <Link href={`/projects/${id}`} className="group">
              <ImageFrame className="-mt-3">
                <Image
                  src={`/images/projects/${id}/featured.jpg`}
                  alt={"we"}
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </ImageFrame>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
