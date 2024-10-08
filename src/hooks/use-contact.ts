import { ChangeEvent, FormEvent, useState } from "react";
import { messageType } from "@/types/message";
import emailjs from "emailjs-com";
import { sendMessage } from "@/services/contactServices";

export default function useContact() {
  const [responseMessage, setResponseMessage] = useState<string | undefined>(
    undefined
  );
  const [errorResponseMessage, setErrorResponseMessage] = useState<
    string | undefined
  >(undefined);
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
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateName = () => {
    if (!name) {
      setNameError("Name is required!");
    } else {
      setNameError(null);
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required!");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format!");
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

    // Perform validations
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
        // Send the email
        await sendMessage(formData);
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICEid!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEid!,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_USERid!
        );
        setResponseMessage("Message sent successfully!");

        // Reset the form after successful send
        setFormData({
          email: "",
          name: "",
          company: "",
          message: "",
        });
      } catch (error: any) {
        console.error("Error sending email:", error);
        setErrorResponseMessage(
          "Failed to send message. Please try again later."
        );
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
    setResponseMessage,
    errorResponseMessage,
    setErrorResponseMessage,
  };
}
