"use client";

import { useState } from "react";
import { Message } from "@/types";
import { ChatWindow } from "@/components/ChatWindow";
import { InputBar } from "@/components/InputBar";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    const assistantPlaceholderId = crypto.randomUUID();
    const assistantPlaceholder: Message = {
      id: assistantPlaceholderId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: content }),
      });

      const data = await response.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantPlaceholderId
            ? {
                ...msg,
                isLoading: false,
                content: response.ok ? data.answer : (data.error || "Sorry, I couldn't reach the knowledge base. Please try again."),
                sources: response.ok ? data.sources : undefined,
              }
            : msg
        )
      );
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantPlaceholderId
            ? {
                ...msg,
                isLoading: false,
                content: "Sorry, I couldn't reach the knowledge base. Please try again.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col h-screen max-h-screen bg-background overflow-hidden relative selection:bg-primary/30">
      {/* Header */}
      <header className="h-16 shrink-0 bg-card/80 backdrop-blur-[20px] border-b border-border shadow-xl shadow-black/40 flex items-center px-6 z-40 sticky top-0">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
            <span className="text-[18px]">🧠</span>
          </div>
          <div>
            <h1 className="text-foreground font-bold tracking-tight text-lg leading-tight">
              Aether Bot
            </h1>
            <p className="text-muted-foreground text-[11px] uppercase tracking-widest font-semibold">
              Workspace Operations
            </p>
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <ChatWindow messages={messages} onSuggestedSelect={handleSendMessage} />

      {/* Input Area */}
      <InputBar onSend={handleSendMessage} disabled={isLoading} />
      
      {/* Background abstract element to match Aether ops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </main>
  );
}
