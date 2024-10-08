import { myAxios } from "@/services/apiServices";
import { getProjects } from "@/services/projectServices";
import { useState } from "react";

const useWebProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleLoadMore = () => {
    setLimit(limit + 6);
    fetchProjects(currentPage);
  };

  const fetchProjects = async (page = 1) => {
    setLoading(true);
    try {
      const response = await getProjects();
      setProjects(response.data);
      // setCurrentPage(response.data.data.currentPage);
      // setTotalPages(response.data.data.totalPages);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    fetchProjects,
    loading,
    handleLoadMore,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};

export default useWebProject;
