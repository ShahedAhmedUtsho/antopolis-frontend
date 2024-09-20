'use client'

import MainRoot from "@/Components/Main/MainRoot";
import Provider from "@/Provider/Provider";
import { split } from "postcss/lib/list";
import { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
