"use client";

import { myAxios } from "@/services/apiServices";
import { useState } from "react";

const useRecentProject = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await myAxios.get(`projects/all-projects`, {
      params: {
        startIndex: 0,
        limit: 6,
      },
    });
    setProjects(response.data.data.projects);
  };

  return { projects, fetchProjects };
};

export default useRecentProject;
