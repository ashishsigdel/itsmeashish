import { myAxios } from "./apiServices";

export const getCreations = async () => {
  try {
    const response = await myAxios.get("/creation/get");
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getCreation = async (uid: string) => {
  try {
    const response = await myAxios.get(`/creation/get/${uid}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
