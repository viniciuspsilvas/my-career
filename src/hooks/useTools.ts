import { useQuery } from "@tanstack/react-query";

export function useTools() {
  return useQuery({
    queryKey: ["tools"],
    queryFn: async () => {
      const res = await fetch("/api/tools");
      if (!res.ok) throw new Error("Failed to fetch tools");
      return res.json();
    },
  });
}