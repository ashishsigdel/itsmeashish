import { myAxios } from "./apiServices";

export const getAll = async () => {
  try {
    const response = await myAxios.get("/service/get");
    return response.data;
  } catch (error) {
    throw error;
  }
};
