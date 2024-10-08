"use client";
import { Button, Pagination, SectionTitle, Spinner } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import { projectsData } from "@/data/Projects";
import useHomeProject from "@/hooks/use-homeProjects";
import useWebProject from "@/hooks/use-webProjects";
import { MdArrowBack } from "react-icons/md";

export default function AllProjects() {
  const {
    projects,
    fetchProjects,
    loading,
    totalPages,
    currentPage,
    setCurrentPage,
  } = useWebProject();

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    fetchProjects(pageNumber); // Pass the new page number to fetchProjects
  };

  useEffect(() => {
    fetchProjects(currentPage); // Fetch initial data with currentPage
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[600px]">
        <div className="flex flex-wrap gap-6 w-full">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mx-auto mb-10">
              {projects.map((project: projects) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mb-20">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
