"use client";

import { Button, SectionTitle } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";

export default function RecentProject() {
  const { projects, fetchProjects } = useRecentProject();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto">
      <div className="flex flex-wrap gap-6 mt-16">
        {projects.map((project: projects) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
