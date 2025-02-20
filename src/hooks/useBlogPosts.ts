import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IBlogPost } from "../models/BlogPost";

export function useBlogPosts(): UseQueryResult<IBlogPost[]> {
  return useQuery<IBlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed to fetch blog posts");
      return res.json();
    },
  });
}

export function useBlogPostById(id: string): UseQueryResult<IBlogPost> {
  return useQuery<IBlogPost>({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      const res = await fetch(`/api/blog/${id}`);
      if (!res.ok) throw new Error("Failed to fetch blog post");
      return res.json();
    },
    enabled: !!id,
  });
}