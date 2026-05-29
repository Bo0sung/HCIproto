const MODEL = 'gpt-4.1-nano';

const getApiKey = () => process.env.OPENAI_API_KEY || process.env.OPEN_API_KEY;

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
      error: 'OPENAI_API_KEY is not configured',
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        input: '한국어로 짧게 "연결 테스트 성공"이라고 답해줘.',
        max_output_tokens: 40,
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      return res.status(200).json({
        ok: false,
        stage: 'openai',
        status: response.status,
        model: MODEL,
        error: responseText,
      });
    }

    const data = JSON.parse(responseText);

    return res.status(200).json({
      ok: true,
      stage: 'openai',
      status: response.status,
      model: MODEL,
      text: data.output_text ?? null,
    });
  } catch (error) {
    return res.status(200).json({
      ok: false,
      stage: 'exception',
      model: MODEL,
      error: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
