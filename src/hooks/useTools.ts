import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ITool } from "../models/Tool";

export function useTools(): UseQueryResult<ITool[]> {
  return useQuery<ITool[]>({
    queryKey: ["tools"],
    queryFn: async () => {
      const res = await fetch("/api/tools");
      if (!res.ok) throw new Error("Failed to fetch tools");
      return res.json();
    },
  });
}