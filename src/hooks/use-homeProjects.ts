"use client";

import { myAxios } from "@/services/apiServices";
import { useState } from "react";

const useHomeProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return { projects, fetchProjects, loading };
};

export default useHomeProject;
