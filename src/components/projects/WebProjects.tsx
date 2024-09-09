"use client";
import { Button, SectionTitle, Spinner } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import { projectsData } from "@/data/Projects";
import useHomeProject from "@/hooks/use-homeProjects";
import useWebProject from "@/hooks/use-webProjects";

export default function WebProjects() {
  const { projects, fetchProjects, loading } = useWebProject();

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[600px]">
        <div className="flex flex-wrap gap-6 w-full">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="flex flex-wrap gap-6 mt-16 mx-auto mb-10">
                {projects.map((project: projects) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mx-auto">
        <Button title={"load-more"} />
      </div>
    </>
  );
}
