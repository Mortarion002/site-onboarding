import { useEffect, useRef } from "react";
import { Message } from "@/types";
import { MessageBubble } from "./MessageBubble";
import { SuggestedQuestions } from "./SuggestedQuestions";

interface ChatWindowProps {
  messages: Message[];
  onSuggestedSelect: (question: string) => void;
}

export function ChatWindow({ messages, onSuggestedSelect }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A small timeout ensures DOM is fully updated before scrolling
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto min-h-0 px-4 py-6 md:px-8 custom-scrollbar">
      <div className="max-w-3xl mx-auto flex flex-col min-h-full justify-end">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center">
            <SuggestedQuestions onSelect={onSuggestedSelect} />
          </div>
        ) : (
          <div className="flex flex-col gap-2 pb-4 w-full">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            <div ref={bottomRef} className="h-4 w-full" />
          </div>
        )}
      </div>
    </div>
  );
}
