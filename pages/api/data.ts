import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/dbConnect';
import Fact from '../../models/FactModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Attempting to pull data");
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all users from the database
    const facts = await Fact.find({});

    // Return the users as JSON
    res.status(200).json(facts);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}