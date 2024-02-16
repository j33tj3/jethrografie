import { ProjectImageGrid } from "@/components/projects/ProjectImageGrid";
import { ProjectImageSwiper } from "@/components/projects/ProjectImageSwiper";
import { SingleProjectImages } from "@/components/projects/SIngleProjectImages";
import { projects } from "@/data/projectsData";

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
    <div className="flex justify-center">
      <div className="px-4 py-12">
        <SingleProjectImages projectId={params.id} />
      </div>
    </div>
  );
}
