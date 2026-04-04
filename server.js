import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve static files from dist (production build)
app.use(express.static(path.join(__dirname, 'dist')));

// Instantiate the OpenAI client once using the server-side API key
const apiKey = process.env.XAI_API_KEY;
if (!apiKey) {
  console.warn('WARNING: XAI_API_KEY environment variable is not set. The /api/chat endpoint will be unavailable.');
}
const xaiClient = apiKey
  ? new OpenAI({ apiKey, baseURL: 'https://api.x.ai/v1' })
  : null;

// Allowlist of accepted models to prevent misuse
const ALLOWED_MODELS = ['grok-beta'];

// Chat API endpoint — proxies to xAI, keeping the API key server-side
app.post('/api/chat', async (req, res) => {
  if (!xaiClient) {
    return res.status(500).json({ error: 'API key not configured on the server' });
  }

  const { messages, model } = req.body;
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request: messages must be an array' });
  }

  const chosenModel = ALLOWED_MODELS.includes(model) ? model : ALLOWED_MODELS[0];

  try {
    const completion = await xaiClient.chat.completions.create({
      model: chosenModel,
      messages,
    });

    res.json(completion);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('xAI API error:', message);
    res.status(500).json({ error: 'Failed to get response from AI service' });
  }
});

// SPA fallback — serve index.html for all other routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
