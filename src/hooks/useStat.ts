import { useQuery } from "@tanstack/react-query";

export function useStat() {
  return useQuery({
    queryKey: ["stat"],
    queryFn: async () => {
      const res = await fetch("/api/stat");
      if (!res.ok) throw new Error("Failed to fetch stat");
      return res.json();
    },
  });
}