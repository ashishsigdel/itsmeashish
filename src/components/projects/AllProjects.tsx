"use client";
import { Button, Pagination, SectionTitle, Spinner } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useWebProject from "@/hooks/use-webProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion";

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
    fetchProjects(pageNumber);

    // Scroll to the top of the Portfolio section
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-col justify-center my-3 px-3 mx-auto min-h-[600px]">
        <div className="flex flex-wrap gap-6 w-full">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 mx-auto mb-10">
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
