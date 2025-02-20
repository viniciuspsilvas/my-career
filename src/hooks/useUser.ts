import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IUser } from "../models/User";


export function useUser(): UseQueryResult<IUser[]> {
  return useQuery<IUser[]>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/user");
      if (!res.ok) throw new Error("Failed to fetch user");
      return res.json();
    },
  });
}