const MODEL = 'gemini-2.5-flash-lite';

const getApiKey = () => process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      stage: 'env',
      provider: 'gemini',
      error: 'GEMINI_API_KEY is not configured',
    });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: '한국어로 짧게 "연결 테스트 성공"이라고 답해줘.' }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 40,
          },
        }),
      },
    );

    const responseText = await response.text();

    if (!response.ok) {
      return res.status(200).json({
        ok: false,
        stage: 'gemini',
        status: response.status,
        model: MODEL,
        error: responseText,
      });
    }

    const data = JSON.parse(responseText);
    const text = data.candidates
      ?.flatMap((candidate: any) => candidate.content?.parts ?? [])
      ?.map((part: any) => part.text)
      ?.filter(Boolean)
      ?.join('\n');

    return res.status(200).json({
      ok: true,
      stage: 'gemini',
      status: response.status,
      model: MODEL,
      text: text ?? null,
    });
  } catch (error) {
    return res.status(200).json({
      ok: false,
      stage: 'exception',
      provider: 'gemini',
      model: MODEL,
      error: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
