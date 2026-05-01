import { Button } from "@/components/ui/button";

const SUGGESTED_QUESTIONS = [
  "What is our onboarding process?",
  "Where do I find the engineering docs?",
  "What tools does our team use?",
  "How do we handle customer support?",
  "What is our product roadmap?",
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-2xl mx-auto p-6 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_20px_rgba(255,107,92,0.15)]">
        <span className="text-3xl">🧠</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
        Aether Knowledge Bot
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Ask anything about your workspace operations, processes, or knowledge base.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {SUGGESTED_QUESTIONS.map((q) => (
          <Button
            key={q}
            variant="outline"
            className="rounded-full bg-card hover:bg-white/5 border-border text-foreground transition-all hover:-translate-y-0.5 shadow-sm"
            onClick={() => onSelect(q)}
          >
            {q}
          </Button>
        ))}
      </div>
    </div>
  );
}
