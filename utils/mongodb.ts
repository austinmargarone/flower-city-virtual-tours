// app/utils/mongodb.ts

import { MongoClient, Db } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'photography_gallery';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDB(): Promise<Db> {
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const db = client.db(dbName);
  cachedClient = client;
  cachedDb = db;

  return db;
}
