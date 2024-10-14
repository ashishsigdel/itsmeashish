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
  };

  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[600px]">
        <div className="flex flex-wrap gap-6 w-full">
          {loading ? (
            <Spinner />
          ) : (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mx-auto mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project: projects) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
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
