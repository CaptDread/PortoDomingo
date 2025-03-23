// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Sample data to return
  const data = {
    message: 'Hello from the Next.js API!',
    timestamp: new Date().toISOString(),
  };

  // Return the data as JSON
  res.status(200).json(data);
}