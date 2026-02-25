import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Example route to get suggestions
app.post("/api/suggestions", async (req, res) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: req.body.text }]
    });
    res.json({ suggestions: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
