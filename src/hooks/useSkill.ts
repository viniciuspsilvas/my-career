import { useQuery } from "@tanstack/react-query";

export function useSkill() {
  return useQuery({
    queryKey: ["skill"],
    queryFn: async () => {
      const res = await fetch("/api/skills");
      if (!res.ok) throw new Error("Failed to fetch skill");
      return res.json();
    },
  });
}