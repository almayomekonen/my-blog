import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let client;

    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.26zhx4l.mongodb.net/${process.env.mongodb_database}`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const messages = await db.collection("messages").find().toArray();
      res.status(200).json({ messages });
    } catch (error) {
      res.status(500).json({ message: "Fetching messages failed!" });
    }

    client.close();
  }
}
