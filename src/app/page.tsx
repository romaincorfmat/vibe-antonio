"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const HomePage = () => {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job invoked");
      },
    })
  );
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "Romain" })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
};

export default HomePage;
