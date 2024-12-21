import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "היי! 👋 אני כאן כדי לעזור רק עם שאלות על פיתוח פולסטאק – JavaScript, React, HTML, CSS, וכל מה שקשור לפיתוח אתרים. אם יש לך שאלות על נושאים אחרים, אני לא יכול לעזור, אבל אם זה פיתוח אתרים, אני כאן בשבילך בשמחה! 😊",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 700,
        temperature: 0.7,
        top_p: 1,
      });

      res.status(200).json({ message: completion.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: "Error interacting with OpenAI API." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
