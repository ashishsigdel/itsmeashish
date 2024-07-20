"use client";

import { myAxios } from "@/services/apiServices";
import { useState } from "react";

const useHomeProject = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);

  const fetchProjects = async () => {
    try {
      const response = await myAxios.get(`projects/all-projects`, {
        params: {
          startIndex: 0,
          limit: 3,
        },
      });
      setProjects(response.data.data.projects);
    } catch (error: any) {
      console.log(error);
    }
  };

  return { projects, fetchProjects };
};

export default useHomeProject;
