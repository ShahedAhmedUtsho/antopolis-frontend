'use client'



import { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Provider from "@/Provider/Provider";
import MainRoot from "@/Components/Main/MainRoot";
const queryClient = new QueryClient()


export default function Home() {


  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <MainRoot />
      </Provider>
    </QueryClientProvider>



  );
}
