import { myAxios } from "./apiServices";

export const getProjects = async (page: number) => {
  try {
    const response = await myAxios.get(`/project/get?page=${page}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getProjectById = async (id: number) => {
  try {
    const response = await myAxios.get(`/project/get-by-id?id=${id}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
