"use client";

import { Button, SectionTitle, Spinner } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import { projectsData } from "@/data/Projects";

export default function RecentProject() {
  const { projects, fetchProjects, loading } = useRecentProject();
  // const projects = projectsData;

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-6xl w-full my-3 px-3 mx-auto min-h-[600px]">
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
  );
}
