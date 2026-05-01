import { Message } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-6`}>
      <div className={`max-w-[80%] flex flex-col gap-2 ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? "bg-primary text-primary-foreground rounded-br-sm"
              : "bg-card text-card-foreground border border-border shadow-xl rounded-bl-sm"
          }`}
        >
          {message.isLoading ? (
            <div className="flex items-center gap-1 h-6">
              <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></span>
            </div>
          ) : (
            <p className="whitespace-pre-wrap text-[15px] leading-relaxed">
              {message.content}
            </p>
          )}
        </div>

        {/* Sources */}
        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-1 flex flex-col gap-1.5 pl-1">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
              Sources
            </span>
            <div className="flex flex-wrap gap-2">
              {message.sources.map((source, idx) => (
                source.url ? (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Badge variant="secondary" className="text-xs font-medium bg-secondary text-secondary-foreground border-border cursor-pointer">
                      {source.title}
                    </Badge>
                  </a>
                ) : (
                  <Badge key={idx} variant="secondary" className="text-xs font-medium bg-secondary text-secondary-foreground border-border">
                    {source.title}
                  </Badge>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
