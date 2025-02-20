import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IStat } from "../models/Stat";

export function useStat(): UseQueryResult<IStat[]> {
  return useQuery<IStat[]>({
    queryKey: ["stat"],
    queryFn: async () => {
      const res = await fetch("/api/stats");
      if (!res.ok) throw new Error("Failed to fetch stat");
      return res.json();
    },
  });
}
