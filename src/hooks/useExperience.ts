import { useQuery } from "@tanstack/react-query";

export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await fetch("/api/experience");
      if (!res.ok) throw new Error("Failed to fetch experience");
      return res.json();
    },
  });
}