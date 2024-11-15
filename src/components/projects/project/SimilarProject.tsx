"use client";
import { Spinner } from "@/components/common";
import { getSuggestions } from "@/services/projectServices";
import { projects } from "@/types/projects";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "@/components/me/projects";

export default function SimilarProject() {
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState<projects[] | []>([]);

  const fetchSimilar = async () => {
    try {
      const response = await getSuggestions(parseInt(params.id));
      setProjects(response.data);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSimilar();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full border-b-[1px] border-[#ccc] dark:border-gray-500 pb-4">
        <h3 className="font-semibold text-[27.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
          Similar Projects
        </h3>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center p-5 w-full">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-7 mx-auto w-full mb-10">
          {projects.map((project: projects) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
