import { useEffect, useRef, useState } from 'react';
import { openai } from '../util/openai';
import Loading from './Loading';

interface Message {
  role: 'user' | 'system' | 'assistant';
  content: string;
}

// Initial state - keeping it empty initially for a cleaner look
const initialMessages: Message[] = [];

export default function Grok() {
  document.title = "Grok | AI Chat";
  
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Construct message history for context
      // Note: In a real app, you'd send more history, but let's keep it simple
      const apiMessages = [
        { role: "system", content: "You are a helpful AI assistant integrated into Daniel Ikuesan's portfolio. You are knowledgeable about software development." },
        ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content } as any)),
        { role: "user", content: input }
      ];

      const completion = await openai.chat.completions.create({
        model: "grok-beta", // Or gpt-3.5-turbo if grok-beta isn't valid in this context, but keeping original model ID
        messages: apiMessages,
      });

      const reply = completion.choices[0].message?.content || "Sorry, I couldn't generate a response.";

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Unable to connect to AI service." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="min-h-screen w-full bg-slate-950 flex items-center justify-center pt-20 pb-10 px-4">
      <div className="w-full max-w-4xl h-[80vh] flex flex-col bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-4 border-b border-white/5 bg-slate-900/80 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <h1 className="text-white font-medium tracking-wide">AI Assistant</h1>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">
               <span className="material-symbols-outlined text-6xl mb-4">smart_toy</span>
               <p>Start a conversation...</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white rounded-tr-sm'
                    : 'bg-slate-800 text-slate-200 rounded-tl-sm border border-white/5'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
             <div className="flex justify-start w-full">
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-sm border border-white/5">
                    <Loading />
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900/80 border-t border-white/5">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="absolute right-2 p-2 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
