import { useEffect, useRef } from "react";
import { Message } from "@/types";
import { MessageBubble } from "./MessageBubble";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SuggestedQuestions } from "./SuggestedQuestions";

interface ChatWindowProps {
  messages: Message[];
  onSuggestedSelect: (question: string) => void;
}

export function ChatWindow({ messages, onSuggestedSelect }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 px-4 py-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col min-h-full">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center">
            <SuggestedQuestions onSelect={onSuggestedSelect} />
          </div>
        ) : (
          <div className="flex flex-col gap-2 pb-4">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            <div ref={bottomRef} className="h-4" />
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
