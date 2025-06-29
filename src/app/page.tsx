import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Client from "./client";
import { Suspense } from "react";

const HomePage = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Romain" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};

export default HomePage;
