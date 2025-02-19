import { useQuery } from "@tanstack/react-query";

export function useSkill() {
  return useQuery({
    queryKey: ["skill"],
    queryFn: async () => {
      const res = await fetch("/api/skill");
      if (!res.ok) throw new Error("Failed to fetch skill");
      return res.json();
    },
  });
}