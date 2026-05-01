import { Source } from "@/types";

export async function askSlite(question: string): Promise<{
  answer: string;
  sources: Source[];
}> {
  const apiKey = process.env.SLITE_API_KEY;

  if (!apiKey) {
    throw new Error("SLITE_API_KEY is not defined in environment variables");
  }

  const url = new URL("https://api.slite.com/v1/ask");
  url.searchParams.append("question", question);

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "x-slite-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Slite API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    
    // Slite's response shape is approximate according to the spec:
    // { answer: string, threadIds: string[], sources: {noteId, title, url}[] }
    return {
      answer: data.answer || "I could not find an answer to your question.",
      sources: data.sources || [],
    };
  } catch (error: any) {
    console.error("Error calling Slite API:", error);
    throw new Error(error.message || "Failed to reach Slite Knowledge Base.");
  }
}
