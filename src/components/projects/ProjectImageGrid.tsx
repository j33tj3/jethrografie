import { ProjectImages } from "@/data/projectsData";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ImageFrame } from "../ui/ImageFrame";

export const ProjectImageGrid = ({
  id,
  images,
  className,
}: {
  id: string;
  images: ProjectImages[];
  className: string;
}) => {
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      {images.map((image, key) => (
        <ImageFrame key={key}>
          <Image
            priority={key === 0}
            src={`/images/projects/${id}/${image.file}.jpg`}
            width={image.horizontal ? 900 : 400}
            height={600}
            alt={image.file}
            className="w-full object-cover md:h-[600px]"
          />
        </ImageFrame>
      ))}
    </div>
  );
};
