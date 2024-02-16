import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <h2>{project.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
