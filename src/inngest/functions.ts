import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("initial-delay", "30s");

    await step.sleep("processing-delay", "20s");

    await step.sleep("final-delay", "10s");

    const email = event.data?.email || "Guest";
    return { message: `Hello ${email}!` };
  }
);
