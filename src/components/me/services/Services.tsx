"use client";
import { ServiceCard } from "@/components/me/services";
import { Spinner } from "@/components/common";
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
    <div className="max-w-7xl mx-auto h-full my-16 px-3">
      <div className="w-full text-center my-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          My Services
        </h1>
      </div>
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
