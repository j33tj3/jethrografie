import { SingleProjectImages } from "@/components/projects/SIngleProjectImages";
import { projects } from "@/data/projectsData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const pageData = projects.find((obj) => {
    return obj.id === params.id;
  });
  return {
    title: `${pageData?.name} |`,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => {
    return { id: project.id };
  });
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const pageData = projects.find((obj) => {
    return obj.id === params.id;
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
