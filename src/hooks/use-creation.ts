import { ChangeEvent, FormEvent, useState } from "react";
import {
  getCreation,
  getCreations,
  getLink,
  getLinkLoggedin,
} from "@/services/creationServices";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export interface Creation {
  id: string;
  title: string;
  description: string;
  coverPhoto: string;
  tags?: string;
  isDemoLink?: boolean;
  isSourceLink?: boolean;
  isResourceLink?: boolean;
}

export default function useCreation() {
  const router = useRouter();
  const params = useParams<{ uuid: string }>();
  const uuid = params.uuid;

  const [isLoading, setIsLoading] = useState(false);
  const [creations, setCreations] = useState<Creation[]>([]);
  const [creation, setCreation] = useState<Creation | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
  });
  const { email, fullName } = formData;

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateFullName = () => {
    setFullNameError(!fullName ? "Full name is required!" : null);
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      !email
        ? "Email is required!"
        : !emailPattern.test(email)
        ? "Invalid email format!"
        : null
    );
  };

  const fetchCreations = async () => {
    try {
      setIsLoading(true);

      const response = await getCreations();

      setCreations(response.data.projects);
    } catch (error: any) {
      console.log(error);

      console.error("Error while fetching...");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCreation = async () => {
    try {
      setIsLoading(true);
      const response = await getCreation(uuid);
      setCreation(response.data);
    } catch (error: any) {
      console.error("Error while fetching...");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetLink = async (which: string) => {
    try {
      setIsLoading(true);
      const response = await getLinkLoggedin(uuid, which);
      router.push(`/asprog/project/${uuid}/confirm`);
    } catch (error) {
      console.error("Error while sending...");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetLinkGuest = async (
    event: FormEvent<HTMLFormElement>,
    which: string
  ) => {
    event.preventDefault();
    setFullNameError(null);
    setEmailError(null);

    validateFullName();
    validateEmail();
    if (!fullNameError && !emailError && fullName && email) {
      try {
        setIsLoading(true);
        const response = await getLink(uuid, which, formData);
        router.push(`/asprog/project/${uuid}/confirm`);
      } catch (error) {
        console.error("Error while sending...", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    isLoading,
    fetchCreations,
    creations,
    fetchCreation,
    creation,
    handleGetLink,
    formData,
    handleChange,
    email,
    fullName,
    handleGetLinkGuest,
  };
}
