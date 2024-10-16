"use client";

import { getProjectById } from "@/services/projectServices";
import { projects } from "@/types/projects";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { ProjectDetails, SimilarProject } from "@/components/projects";
import ProjectNotFound from "./ProjectNotFound";
import { Spinner } from "@/components/common";

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
    <div className="flex lg:flex-row flex-col w-full h-full min-h-screen">
      {loading ? (
        <div className=" flex flex-col items-center justify-center p-5 w-full">
          <Spinner />
        </div>
      ) : project ? (
        <>
          <div className="lg:w-[calc(100%-400px)] w-full relative">
            <ProjectDetails project={project} />
          </div>
          <div className="w-full lg:w-[400px] p-4 text-white ">
            <SimilarProject />
          </div>
        </>
      ) : (
        <ProjectNotFound />
      )}
    </div>
  );
}
