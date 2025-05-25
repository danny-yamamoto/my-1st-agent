import { VoltAgent, Agent } from "@voltagent/core";
import { VercelAIProvider } from "@voltagent/vercel-ai";

//import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";

const agent = new Agent({
  name: "my-voltagent-app",
  instructions: "A helpful assistant that answers questions without using tools",
  llm: new VercelAIProvider(),
//  model: openai("gpt-4o-mini"),
  model: google("gemini-2.0-flash-001"),
  tools: [],
});

new VoltAgent({
  agents: {
    agent,
  },
}); 