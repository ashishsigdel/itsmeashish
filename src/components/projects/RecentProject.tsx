"use client";

import { Button, SectionTitle } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import { projectsData } from "@/data/Projects";

export default function RecentProject() {
  const { projects, fetchProjects } = useRecentProject();
  // const projects = projectsData;

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-6xl w-full my-3 px-3 mx-auto">
      <div className="flex flex-wrap gap-6 my-16 w-full">
        {projects.map((project: projects) => (
          <div key={project._id} className="mx-auto">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
