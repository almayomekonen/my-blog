import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, favoriteTopic } = req.body;

    // Validate input
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === "" ||
      !favoriteTopic ||
      favoriteTopic.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Check if email already exists in the database
    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.26zhx4l.mongodb.net/${process.env.mongodb_database}`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const existingUser = await db.collection("messages").findOne({ email });

      if (existingUser) {
        res.status(409).send("כנראה שכבר שלחת הודעה.");
        client.close();
        return;
      }

      // Store the new message
      const newMessage = {
        email,
        name,
        message,
        favoriteTopic,
      };

      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;

      res
        .status(201)
        .json({ message: "Successfully stored message!", message: newMessage });
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
    } finally {
      client.close();
    }
  }
}
