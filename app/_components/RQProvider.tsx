"use client";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RQProvider({ children }: { children: any }) {
  const queryClientRef = useRef<QueryClient>(new QueryClient());
  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
}
