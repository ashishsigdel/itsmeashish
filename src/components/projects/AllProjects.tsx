"use client";

import { Button, Pagination, SectionTitle, Spinner } from "@/components/common";
import { ProjectCard } from "@/components/projects";
import useRecentProject from "@/hooks/use-recentProjects";
import { projects } from "@/types/projects";
import { useEffect } from "react";
import useWebProject from "@/hooks/use-webProjects";
import { MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion

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
  };

  useEffect(() => {
    fetchProjects(currentPage); // Fetch initial data with currentPage
  }, [currentPage]);

  // Animation variants for the project cards
  const cardVariants = (isEven: boolean) => ({
    hidden: { opacity: 0, x: isEven ? -50 : 50 }, // Left or right based on index
    visible: { opacity: 1, x: 0 }, // Move to center and become fully visible
  });

  return (
    <>
      <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[600px]">
        <div className="flex flex-wrap gap-6 w-full">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mx-auto mb-10">
              {projects.map((project: projects, index: number) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants(index % 2 === 0)} // Alternate direction
                  initial="hidden"
                  whileInView="visible" // Trigger animation when in view
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is visible
                >
                  <ProjectCard project={project} />
                </motion.div>
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
