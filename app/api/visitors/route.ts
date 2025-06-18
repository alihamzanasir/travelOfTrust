import type { NextApiRequest, NextApiResponse } from 'next';

type Visitor = {
  id: string;
  city: string;
  timestamp: number;
};

let visitors: Visitor[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, city } = req.body;

    // Remove old entries (older than 24 hours)
    const now = Date.now();
    visitors = visitors.filter(visitor => now - visitor.timestamp < 24 * 60 * 60 * 1000);

    // Add new visitor
    visitors.push({ id, city, timestamp: now });

    return res.status(200).json({ message: 'Visitor recorded' });
  } else if (req.method === 'GET') {
    // Return all visitors from the last 24 hours
    return res.status(200).json(visitors);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
