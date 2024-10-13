"use client";

import { getProjectById } from "@/services/projectServices";
import { projects } from "@/types/projects";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { ProjectDetails } from "@/components/projects";

export default function Project() {
  const params = useParams<{ id: string }>();
  const [project, setProject] = React.useState<projects | null>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (params.id) {
          const response = await getProjectById(parseInt(params.id)); // parsing the id
          setProject(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [params]);

  return (
    <div className="flex lg:flex-row flex-col w-full h-full">
      {loading ? (
        <p>Loading...</p>
      ) : project ? (
        <>
          <div className="lg:w-[70%] w-full relative">
            <ProjectDetails project={project} />
          </div>
          <div className="w-[30%] p-4 text-white">
            <h2 className="text-lg font-semibold">Suggestions</h2>
            <p>Here you can show suggestions or related content.</p>
          </div>
        </>
      ) : (
        <p>Project not found!</p>
      )}
    </div>
  );
}
