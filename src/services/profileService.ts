import { myAxios } from "./apiServices";

export const getActive = async () => {
  try {
    const response = await myAxios.get("/profile/get-enabled");
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
