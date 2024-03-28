import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '../../utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDB();
  const photos = await db.collection('photos').find().toArray();
  res.json(photos);
}