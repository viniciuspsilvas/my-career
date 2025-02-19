import { useQuery } from "@tanstack/react-query";

export function usePersonalInfo() {
  return useQuery({
    queryKey: ["personalInfo"],
    queryFn: async () => {
      const res = await fetch("/api/personal-info");
      if (!res.ok) throw new Error("Failed to fetch personal info");
      return res.json();
    },
  });
}