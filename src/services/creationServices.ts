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

export const getLinkLoggedin = async (uid: string, which: string) => {
  try {
    const response = await myAxios.post(
      `/creation/get-link/${uid}?linkType=${which}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getLink = async (uid: string, which: string, formData: any) => {
  try {
    const response = await myAxios.post(
      `/creation/get-link/${uid}?linkType=${which}`,
      { fullName: formData.fullName, email: formData.email }
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
