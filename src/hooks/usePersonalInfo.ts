import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IPersonalInfo } from "../models/PersonalInfo";

export function usePersonalInfo(): UseQueryResult<IPersonalInfo[]> {
  return useQuery<IPersonalInfo[]>({
    queryKey: ["personalInfo"],
    queryFn: async () => {
      const res = await fetch("/api/personal-info");
      if (!res.ok) throw new Error("Failed to fetch personal info");
      return res.json();
    },
  });
}