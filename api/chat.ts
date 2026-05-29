const MODEL = 'gpt-4.1-nano';

const getApiKey = () => process.env.OPENAI_API_KEY || process.env.OPEN_API_KEY;

const getPersonaPrompt = (approachType: string) => {
  if (approachType === 'practical') {
    return [
      'You are a Practical Readiness career counselor for a SeoulTech HCI prototype.',
      'Respond in natural Korean only.',
      'Your goal is to objectively check the student readiness and suggest concrete preparation tasks.',
      'Minimize emotional validation. Do not sound like an empathic counselor.',
      'Use this exact Korean structure:',
      '',
      '준비도 점검: 한 문장',
      '',
      '현재 상태: 한 문장',
      '우선순위: 한 문장',
      '',
      '실행 과제',
      '1. 구체적인 행동',
      '2. 구체적인 행동',
      '3. 구체적인 행동',
    ].join('\n');
  }

  return [
    'You are an Emotional Support career counselor for a SeoulTech HCI prototype.',
    'Respond in natural Korean only.',
    'Your goal is to help the student organize anxiety, pressure, low confidence, and decision stress.',
    'Avoid checklist-heavy advice. Focus on emotional reflection and one gentle question.',
    'Use this exact Korean structure:',
    '',
    '마음 정리: 한 문장',
    '',
    '먼저 살펴볼 부분',
    '• 감정 또는 부담에 대한 짧은 반영',
    '• 감정 또는 부담에 대한 짧은 반영',
    '',
    '함께 생각해볼 질문: 한 문장',
  ].join('\n');
};

const readRequestBody = async (req: any) => {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    return res.status(500).json({
      error: 'OPENAI_API_KEY is not configured. OPEN_API_KEY is also accepted as a fallback.',
    });
  }

  try {
    const body = await readRequestBody(req);
    const userMessage = String(body.userMessage ?? '').slice(0, 800);
    const originalConcern = String(body.originalConcern ?? '').slice(0, 800);
    const counselorName = String(body.counselorName ?? '상담사').slice(0, 80);
    const approachType = String(body.approachType ?? 'practical');
    const turnCount = Number(body.turnCount ?? 0);

    if (!userMessage.trim()) {
      return res.status(400).json({ error: 'userMessage is required' });
    }

    const instructions = [
      getPersonaPrompt(approachType),
      '',
      'Common rules:',
      '- Do not make a real diagnosis.',
      '- Do not confirm a real counseling appointment.',
      '- Keep the response concise and easy to scan.',
      '- Do not invent facts that the student did not provide.',
      `- Counselor name: ${counselorName}`,
      `- Mock counseling turn: ${turnCount + 1}`,
    ].join('\n');

    const input = [
      `학생의 최초 고민: ${originalConcern || userMessage}`,
      `이번 입력: ${userMessage}`,
    ].join('\n');

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        instructions,
        input,
        max_output_tokens: 260,
        temperature: 0.45,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    const text =
      typeof data.output_text === 'string'
        ? data.output_text
        : data.output?.flatMap((item: any) => item.content ?? [])
            ?.map((item: any) => item.text)
            ?.filter(Boolean)
            ?.join('\n');

    if (!text) {
      return res.status(502).json({ error: 'No text returned from model' });
    }

    return res.status(200).json({ text });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Unexpected server error',
    });
  }
}
