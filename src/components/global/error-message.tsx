// src/components/global/ErrorMessage.tsx
"use client";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-center text-red-500">{message}</p>;
}