import { useMemo, useEffect, useState } from "react";
import { calibrationsService } from "@/API/calibrationsService.js";

export function useGetServices(filtros = {}) {
  const [services, setServices] = useState([]);
  const [errorFetch, setErrorFetch] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = useMemo(() => {
    return Object.entries(filtros)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }, [filtros]);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data } = await calibrationsService.getService(query);
      console.log("Se le envia a services:", data.data);
      setServices(data.data);
    } catch (error) {
      setErrorFetch(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [query]);

  return { services, loading, errorFetch };
}
