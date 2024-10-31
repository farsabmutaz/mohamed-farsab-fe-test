// pages/api/proxy.ts
import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(baseUrl!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic dnN0ZXN0Oi9KSzY1X2VqSCMxIQ==`,
      },
      body: JSON.stringify(req.body) ?? { query: "" },
    });

    console.log('response', response.text);
    

    if (!response.ok) {
      throw new Error('Failed to fetch data from external API');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    log ('error', error);
    res.status(500).json({ message: (error as Error).message });
  }
}
