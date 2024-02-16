import Image from "next/image";
import { projects } from "./projectsData";
import { twMerge } from "tailwind-merge";
import { rotateImage } from "@/utils/rotateImage";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex justify-center px-4">
      <div className="grid w-full max-w-5xl gap-8 py-12 md:grid-cols-2">
        {projects.map((project, index) => {
          const { name, id } = project;
          return (
            <Link
              key={index}
              className={twMerge(
                "flex flex-col justify-center",
                rotateImage(2),
              )}
              href={`/projects/${id}`}
            >
              <div className="self-center bg-black p-4 font-medium uppercase text-white">
                {name}
              </div>
              <div className="-mt-2 border-8 border-black p-4">
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
    </div>
  );
}
