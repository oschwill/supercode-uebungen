import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.DATABASE_LOCAL;
const client = new MongoClient(url);

const dbName = 'mmdb';

await client.connect();
export const dbo = client.db(dbName);
