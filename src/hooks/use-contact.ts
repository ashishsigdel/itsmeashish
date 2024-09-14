import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { messageType } from "@/types/message";
import { myAxios } from "@/services/apiServices";

export default function useContact() {
  const [responseMessage, setResponseMessage] = useState<string | undefined>(
    undefined
  );
  const [formData, setFormData] = useState<messageType>({
    email: "",
    name: "",
    company: "",
    message: "",
  });

  const { name, email, company, message } = formData;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const validateName = () => {
    if (!name) {
      setNameError("Name is required!");
    } else {
      setNameError(null);
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required!");
    } else {
      setEmailError(null);
    }
  };

  const validateMessage = () => {
    if (!message) {
      setMessageError("Message is required!");
    } else {
      setMessageError(null);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateName();
    validateEmail();
    validateMessage();

    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !messageError
    ) {
      setIsLoading(true);
      try {
        const response = await myAxios.post(`/message/messagetoemail`, {
          name,
          email,
          company,
          message,
        });
        setResponseMessage(response.data.message);
        setFormData({
          email: "",
          name: "",
          company: "",
          message: "",
        });
      } catch (error: any) {
        setResponseMessage("Cannot send Message.");
        console.log(error.message);
        return;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    name,
    company,
    email,
    message,
    formData,
    nameError,
    emailError,
    messageError,
    isLoading,
    handleChange,
    validateEmail,
    validateName,
    validateMessage,
    onSubmit,
    responseMessage,
  };
}
