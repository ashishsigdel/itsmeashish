"use client";

import { myAxios } from "@/services/apiServices";
import { useState } from "react";

const useRecentProject = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await myAxios.get(`projects/all-projects`, {
        params: {
          startIndex: 0,
          limit: 6,
        },
      });
      setProjects(response.data.data.projects);
    } catch (error: any) {
      console.log(error);
    }
  };

  return { projects, fetchProjects };
};

export default useRecentProject;
