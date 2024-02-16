import { ProjectImages } from "@/data/projectsData";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

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
        <Image
          key={key}
          priority={key === 0}
          src={`/images/projects/${id}/${image.file}.jpg`}
          width={image.horizontal ? 900 : 400}
          height={600}
          alt={image.file}
          className="w-full border-8 border-black bg-white object-cover p-2 sm:p-4 md:h-[600px]"
        />
      ))}
    </div>
  );
};
