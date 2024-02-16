import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { projects } from "../projectsData";
import { useState } from "react";

export async function generateStaticParams() {
  return [
    // projects.map((project) => {
    //   return { id: project.id };
    // }),
    { id: "preggylicious" },
    { id: "apceramics" },
    { id: "fcvandams" },
    { id: "vpbijlmermeer" },
  ];
}

interface ProjectPageData {
  id: string;
  name: string;
  description: string;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const pageData = projects.find((obj) => {
    return (obj.id = params.id);
  });

  if (!pageData) {
    return;
  }

  return <>{params.id}</>;
}
