import { myAxios } from "./apiServices";

export const signIn = async (formData: any) => {
  try {
    const response = await myAxios.post("/auth/login", {
      email: formData.email,
      password: formData.password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Register = async (formData: any) => {
  try {
    const response = await myAxios.post("/auth/register", {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    const response = await myAxios.post("/auth/logout", {});
    return response.data;
  } catch (error) {
    throw error;
  }
};
