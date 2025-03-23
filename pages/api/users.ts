import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/dbConnect';
import User from '../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all users from the database
    const users = await User.find({});

    // Return the users as JSON
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}