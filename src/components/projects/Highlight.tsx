"use client";

import { Button, SectionTitle, Spinner } from "@/components/common";
import ProjectCard from "@/components/projects/ProjectCard";
// import { projectsData } from "@/data/Projects";
import useHomeProject from "@/hooks/use-homeProjects";
import { projects } from "@/types/projects";
import Link from "next/link";
import { useEffect } from "react";

export default function Highlight() {
  const { projects, fetchProjects, loading } = useHomeProject();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-7xl mt-3 mb-7 px-3 mx-auto">
      <SectionTitle title={"Projects Highlights"} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mx-auto mb-10">
          {projects.map((project: projects) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <div className="mx-auto">
        <Link href={"/portfolio"}>
          <Button title={"All-Projects"} />
        </Link>
      </div>
    </div>
  );
}
