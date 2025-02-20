import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IProject } from "../models/Project";

export function useProjects(): UseQueryResult<IProject[]> {
  return useQuery<IProject[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json();
    },
  });
}
