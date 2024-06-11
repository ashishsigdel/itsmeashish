"use client";

import { Button, SectionTitle } from "@/components/common";
import ProjectCard from "@/components/projects/ProjectCard";
// import { projectsData } from "@/data/Projects";
import useHomeProject from "@/hooks/use-homeProjects";
import { projects } from "@/types/projects";
import Link from "next/link";
import { useEffect } from "react";

export default function Highlight() {
  const { projects, fetchProjects } = useHomeProject();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto">
      <SectionTitle title={"Projects Highlights"} />
      <div className="flex flex-wrap gap-6 mt-16">
        {projects.map((project: projects) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="mx-auto">
        <Link href={"/portfolio"}>
          <Button title={"All-Projects"} />
        </Link>
      </div>
    </div>
  );
}
