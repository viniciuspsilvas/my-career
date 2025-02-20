import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IExperience } from "../models/Experience";

export function useExperience(): UseQueryResult<IExperience[]> {
  return useQuery<IExperience[]>({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await fetch("/api/experience");
      if (!res.ok) throw new Error("Failed to fetch experience");
      return res.json();
    },
  });
}
