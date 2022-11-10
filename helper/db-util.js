import { MongoClient } from "mongodb";

export function ConnectMongodb() {
  const client = new MongoClient(
    "mongodb+srv://audtlr:nxhYrEZyYpajzBBY@cluster0.mzdaqy1.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertUserInfo(client, collection, data) {
  return client.db("BlogContact").collection(collection).insertOne(data);
}
