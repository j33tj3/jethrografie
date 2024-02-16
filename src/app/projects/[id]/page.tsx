import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projectsData";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: any }) {
  const pageData = projects.find((obj) => {
    return (obj.id = params.id);
  });
  // fix any
  return {
    title: `Jethrografie - Project: ${pageData?.name}`,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => {
    return { id: project.id };
  });
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const pageData = projects.find((obj) => {
    return (obj.id = params.id);
  });

  if (!pageData) {
    return;
  }

  return (
    <div className="flex justify-center px-4">
      <div className="pb-32 pt-12">
        <ProjectGallery projectId={params.id} />
      </div>
    </div>
  );
}
