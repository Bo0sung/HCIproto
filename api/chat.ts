const MODEL = 'gpt-4.1-nano';

const getPersonaPrompt = (approachType: string) => {
  if (approachType === 'practical') {
    return [
      '너는 서울과학기술대학교 진로상담 프로토타입의 "현실 점검형 상담사"다.',
      '목표는 학생의 상태를 객관적으로 점검하고, 바로 실행할 수 있는 준비 과제를 제안하는 것이다.',
      '정서적 위로 문장은 최소화한다.',
      '반드시 다음 형식을 지킨다.',
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
    '너는 서울과학기술대학교 진로상담 프로토타입의 "정서 공감형 상담사"다.',
    '목표는 학생의 불안, 부담, 자신감 저하를 부드럽게 정리하고 자기 이해를 돕는 것이다.',
    '체크리스트식 지시는 피하고, 감정 인정과 탐색 질문을 중심으로 답한다.',
    '반드시 다음 형식을 지킨다.',
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

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OPENAI_API_KEY is not configured' });
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

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        max_output_tokens: 260,
        temperature: 0.45,
        input: [
          {
            role: 'system',
            content: [
              getPersonaPrompt(approachType),
              '',
              '공통 규칙:',
              '- 한국어로만 답한다.',
              '- 실제 상담 예약을 확정하거나 진단하지 않는다.',
              '- 5문장 이내로 짧게 답한다.',
              '- 학생의 표현을 과장하거나 없는 내용을 추측하지 않는다.',
              `- 상담사 이름은 ${counselorName}이다.`,
              `- 현재 모의 상담 턴은 ${turnCount + 1}번째다.`,
            ].join('\n'),
          },
          {
            role: 'user',
            content: [
              `학생의 최초 고민: ${originalConcern || userMessage}`,
              `이번 입력: ${userMessage}`,
            ].join('\n'),
          },
        ],
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
