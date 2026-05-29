const hasApiKey = () => Boolean(process.env.OPENAI_API_KEY || process.env.OPEN_API_KEY);

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(200).json({
    ok: true,
    service: 'seoultech-career-match-api',
    hasOpenAiKey: hasApiKey(),
    acceptedEnvNames: ['OPENAI_API_KEY', 'OPEN_API_KEY'],
    timestamp: new Date().toISOString(),
  });
}
