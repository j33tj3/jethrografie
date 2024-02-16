"use client";
import { projects } from "@/data/projectsData";
import { rotateImage } from "@/utils/rotateImage";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export interface ProjectData {
  name: string;
  id: string;
  images: ProjectImages[];
}

export interface ProjectImages {
  file: string;
  horizontal: boolean;
}

export const ProjectsGallery = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project: ProjectData, index: number) => {
        const { name, id } = project;
        console.log(name);
        return (
          <Link
            key={index}
            className={twMerge("flex flex-col justify-center", rotateImage(2))}
            href={`/projects/${id}`}
          >
            <div className="self-center bg-black p-4 font-medium uppercase text-white">
              {name}
            </div>
            <div className="-mt-2 border-8 border-black bg-white p-4">
              <Image
                src={`/images/projects/${id}/featured.jpg`}
                alt={"we"}
                width={600}
                height={400}
                className="h-auto w-full"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
