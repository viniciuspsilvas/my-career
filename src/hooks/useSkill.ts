import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ISkill } from "../models/Skill";

export function useSkill(): UseQueryResult<ISkill[]> {
  return useQuery<ISkill[]>({
    queryKey: ["skill"],
    queryFn: async () => {
      const res = await fetch("/api/skills");
      if (!res.ok) throw new Error("Failed to fetch skill");
      return res.json();
    },
  });
}