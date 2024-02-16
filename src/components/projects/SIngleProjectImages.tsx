"use client";

import { projects } from "@/data/projectsData";
import { ProjectImageGrid } from "./ProjectImageGrid";
import { ProjectImageSwiper } from "./ProjectImageSwiper";
import { ProjectData } from "@/data/projectsData";
import { useEffect, useState } from "react";

export const SingleProjectImages = ({ projectId }: { projectId: string }) => {
  const [projectData, setProjectData] = useState<ProjectData>();
  const project = projects.find((obj) => {
    return obj.id === projectId;
  });
  useEffect(() => {
    setProjectData(project);
  }, [project]);

  if (!projectData) {
    return;
  }

  const { id, name, images } = projectData;

  return (
    <>
      <div className="m-auto w-full max-w-5xl">
        <h1 className="text-center text-3xl font-bold uppercase">{name}</h1>
      </div>
      <ProjectImageGrid className="md:hidden" id={id} images={images} />
      <ProjectImageSwiper className="hidden md:block" id={id} images={images} />
    </>
  );
};
