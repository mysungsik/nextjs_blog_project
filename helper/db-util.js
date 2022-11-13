import { MongoClient } from "mongodb";

const MongodbURI = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.mzdaqy1.mongodb.net/?retryWrites=true&w=majority`;

export function ConnectMongodb() {
  const client = new MongoClient(MongodbURI);
  return client;
}

export async function insertUserInfo(client, collection, data) {
  return client
    .db(`${process.env.mongodb_database}`)
    .collection(collection)
    .insertOne(data);
}
