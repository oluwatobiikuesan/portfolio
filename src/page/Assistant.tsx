import { useEffect, useRef, useState, type FormEvent } from "react";
import { openai } from "../util/openai";
import { profile } from "../data/profile";
import Icon from "../component/Icon";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = ["What does Oluwatobi work on?", "Explain React hooks simply", "Tips for a clean API design"];

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `Ask AI | ${profile.firstName} ${profile.lastName}`;
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;

    const history = [...messages, { role: "user", content } as Message];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "grok-beta",
        messages: [
          {
            role: "system",
            content: `You are a helpful AI assistant on ${profile.firstName} ${profile.lastName}'s portfolio. You are knowledgeable about software development. Keep answers short and clear.`,
          },
          ...history,
        ],
      });
      const reply = completion.choices?.[0]?.message?.content || "Sorry, I could not generate a response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "I could not reach the AI service. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(input);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-eyebrow text-base-content/50">Assistant</p>
      <h1 className="text-headline mt-6">Ask me anything.</h1>
      <p className="text-lead mt-4 text-base-content/65">A small AI helper for questions about software and this portfolio.</p>

      <div className="card mt-12 border border-base-300 bg-base-100">
        <div className="h-[55vh] min-h-80 space-y-2 overflow-y-auto p-4 md:p-6">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
              <p className="text-base-content/50">Start with a question, or try one of these:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)} className="btn btn-outline btn-sm border-base-300 font-normal">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"}`}>
              <div className="chat-header text-eyebrow mb-1 text-base-content/40">{msg.role === "user" ? "You" : "AI"}</div>
              <div
                className={`chat-bubble whitespace-pre-wrap leading-relaxed ${
                  msg.role === "user" ? "chat-bubble-primary" : "bg-base-200 text-base-content"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat chat-start">
              <div className="chat-bubble bg-base-200">
                <span className="loading loading-dots loading-sm" />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 border-t border-base-300 p-3 md:p-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question"
            aria-label="Your question"
            className="input w-full"
          />
          <button type="submit" disabled={!input.trim() || loading} className="btn btn-primary btn-square" aria-label="Send">
            <Icon name="send" className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
