export interface Source {
  noteId: string;
  title: string;
  url?: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  timestamp: Date;
  isLoading?: boolean;
}
