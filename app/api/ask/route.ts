import { NextRequest, NextResponse } from "next/server";
import { askSlite } from "@/lib/slite";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { question } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required and must be a string." },
        { status: 400 }
      );
    }

    const sliteResponse = await askSlite(question);
    return NextResponse.json(sliteResponse);
  } catch (error: any) {
    console.error("Ask API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
