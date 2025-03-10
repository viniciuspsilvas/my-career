import { useMutation, useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { IFlashCard } from "../models/FlashCard";

// Hook para buscar todos os flashcards
export function useFlashcards(): UseQueryResult<IFlashCard[]> {
  return useQuery<IFlashCard[]>({
    queryKey: ["flashcards"],
    queryFn: async () => {
      const res = await fetch("/api/flashcards");
      if (!res.ok) throw new Error("Failed to fetch flashcards");
      return res.json();
    }
  });
}

// Hook para buscar um flashcard por ID
export function useFlashcardById(id: string): UseQueryResult<IFlashCard> {
  return useQuery<IFlashCard>({
    queryKey: ["flashcard", id],
    queryFn: async () => {
      const res = await fetch(`/api/flashcards/${id}`);
      if (!res.ok) throw new Error("Failed to fetch flashcard");
      return res.json();
    },
    enabled: !!id
  });
}

// Hook para criar um novo flashcard
export function useCreateFlashcard() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: IFlashCard) => {
      const res = await fetch("/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to create flashcard");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flashcards"] });
    }
  });
}

// Hook para atualizar um flashcard
export function useUpdateFlashcard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Partial<IFlashCard> & { id: string }) => {
      const res = await fetch(`/api/flashcards/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to update flashcard");
      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["flashcard", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["flashcards"] });
    }
  });
}

// Hook para deletar um flashcard
export function useDeleteFlashcard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/flashcards/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) throw new Error("Failed to delete flashcard");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flashcards"] });
    }
  });
}

// Hook para buscar o próximo flashcard para revisão
export function useNextFlashcard(userId: string): UseQueryResult<IFlashCard> {
  return useQuery<IFlashCard>({
    queryKey: ["next-flashcard", userId],
    queryFn: async () => {
      const res = await fetch(`/api/flashcards/next-card?userId=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch next flashcard");
      return res.json();
    },
    enabled: !!userId // Só executa se o userId estiver disponível
  });
}

// Hook para salvar o progresso do usuário
export function useSaveProgress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { userId: string; flashCardId: string; choice: string }) => {
      const res = await fetch("/api/flashcards/save-progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to save progress");
      return res.json();
    },
    onSuccess: () => {
      // Invalida as queries relacionadas ao progresso para garantir que os dados estejam atualizados
      queryClient.invalidateQueries({ queryKey: ["next-flashcard"] });
    }
  });
}