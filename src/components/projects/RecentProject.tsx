"use client";

import { Button, SectionTitle } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import { projectsData } from "@/data/Projects";

export default function RecentProject() {
  // const { projects, fetchProjects } = useRecentProject();
  const projects = projectsData;

  useEffect(() => {
    // fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-6xl w-full my-3 px-3 mx-auto">
      <div className="flex flex-wrap gap-6 mt-16 w-full">
        {projects.map((project: projects) => (
          <>
            <ProjectCard key={project._id} project={project} />
          </>
        ))}
      </div>
    </div>
  );
}
