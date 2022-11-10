import { ConnectMongodb, insertUserInfo } from "../../helper/db-util";

async function userContact(req, res) {
  let client;
  try {
    client = await ConnectMongodb();
  } catch (error) {
    res.status(500).json({ message: "connection fail" });
  }

  if (req.method === "POST") {
    const { email, name, content } = req.body;

    if (!email || !email.includes("@") || !name || !content) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const insertData = {
      email,
      name,
      content,
    };

    const insertResult = await insertUserInfo(client, "userInfo", insertData);

    res.status(200).json({ message: "success", result: insertData });
  }

  client.close();
}

export default userContact;
