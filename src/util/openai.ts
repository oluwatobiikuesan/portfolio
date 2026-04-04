// API calls are proxied through the server-side /api/chat endpoint so that
// the xAI API key is never exposed in client-side code.
export const openai = {
  chat: {
    completions: {
      create: async (params: { model: string; messages: Array<{ role: string; content: string }> }) => {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(params),
        });

        if (!response.ok) {
          throw new Error(`AI service error: ${response.status} ${response.statusText}`);
        }

        return response.json();
      },
    },
  },
};
