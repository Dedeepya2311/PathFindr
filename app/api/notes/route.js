import { generateAIResponse } from "@/utils/aiService";

export async function POST(req) {
  const { topic } = await req.json();
  const notes = await generateAIResponse(`Notes on ${topic}`);
  return Response.json({ notes });
}
