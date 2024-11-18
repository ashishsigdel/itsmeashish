import { useState } from "react";
import { getCreation, getCreations } from "@/services/creationServices";
import { useParams, useSearchParams } from "next/navigation";

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
  const params = useParams<{ uuid: string }>();
  const uuid = params.uuid;

  const [isLoading, setIsLoading] = useState(false);
  const [creations, setCreations] = useState<Creation[]>([]);
  const [creation, setCreation] = useState<Creation | null>(null);

  const fetchCreations = async () => {
    try {
      setIsLoading(true);
      const response = await getCreations();

      setCreations(response.data.projects);
    } catch (error: any) {
      console.error(error.response.data.message);
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
      console.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchCreations,
    creations,
    fetchCreation,
    creation,
  };
}
