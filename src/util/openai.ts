import OpenAI from "openai";

// Warning: Storing API keys in client-side code is not secure.
// In a real production app, you should use a backend proxy.
// For this portfolio demo, we are using an environment variable or placeholder.
// Note: The key below is a placeholder or needs to be provided via environment variables.

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_XAI_API_KEY || "YOUR_API_KEY_HERE",
  baseURL: "https://api.x.ai/v1",
  dangerouslyAllowBrowser: true
});
