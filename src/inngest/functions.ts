import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert NextJs Developer. You write clean, readable, and maintainable code. You write simple NextJs and ReactJs snippets",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet of code ${event.data.value}`
    );

    console.log("Output of summarizer", output);

    return { output };
  }
);
