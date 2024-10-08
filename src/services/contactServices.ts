import { messageType } from "@/types/message";
import { myAxios } from "./apiServices";

export const sendMessage = async (formData: messageType) => {
  try {
    const response = await myAxios.post("/contact", {
      fullName: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
