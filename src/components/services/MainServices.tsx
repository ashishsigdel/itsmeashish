"use client";
import { ServiceCard } from "@/components/services";
import { SectionTitle, Spinner } from "@/components/common";
import { useEffect, useState } from "react";
import { Service } from "@/types/service";
import { getAll } from "@/services/serviceServices";

export default function MainServices() {
  const [services, setServices] = useState<Service[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProject = async () => {
    setLoading(true);
    try {
      const response = await getAll();
      setServices(response.data);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <div className="flex flex-col justify-center my-3 px-3 mx-auto min-h-[100vh-96px] max-w-7xl">
      <SectionTitle title={"My Services"} />
      <div className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"></div>
      {!loading && services.length > 0 ? (
        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}

      <div className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"></div>
    </div>
  );
}
