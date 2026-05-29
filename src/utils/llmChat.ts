import type { ChatMessage, Counselor } from '../types';

interface RequestCounselorReplyParams {
  counselor: Counselor;
  originalConcern: string;
  userMessage: string;
  turnCount: number;
  messages: ChatMessage[];
}

export async function requestCounselorReply({
  counselor,
  originalConcern,
  userMessage,
  turnCount,
  messages,
}: RequestCounselorReplyParams): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      counselorId: counselor.id,
      counselorName: counselor.name,
      approachType: counselor.approachType,
      originalConcern,
      userMessage,
      turnCount,
      messages: messages.slice(-6).map((message) => ({
        role: message.role,
        content: message.content,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error(`LLM request failed: ${response.status}`);
  }

  const data = (await response.json()) as { text?: string };

  if (!data.text) {
    throw new Error('LLM response was empty');
  }

  return data.text;
}
