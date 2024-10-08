import { myAxios } from "./apiServices";

export const getProjects = async () => {
  try {
    const response = await myAxios.get("/project/get");
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
