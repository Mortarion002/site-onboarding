import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

interface InputBarProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function InputBar({ onSend, disabled }: InputBarProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-border bg-background/80 backdrop-blur-xl shrink-0 z-10 sticky bottom-0">
      <div className="max-w-3xl mx-auto relative flex items-center">
        <Input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your workspace..."
          disabled={disabled}
          className="w-full pr-12 py-6 rounded-2xl bg-card border-border shadow-lg focus-visible:ring-primary focus-visible:ring-offset-0 text-[15px]"
        />
        <Button
          size="icon"
          disabled={!input.trim() || disabled}
          onClick={handleSend}
          className="absolute right-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md h-9 w-9"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
      <div className="text-center mt-2">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
          AI generated answers may contain errors.
        </span>
      </div>
    </div>
  );
}
