import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const DEEPGRAM_API_KEY = "your_deepgram_api_key_here"; // Replace this with your API key

app.post("/api/text-to-speech", async (req, res) => {
  const { text, voice } = req.body;

  try {
    const response = await fetch("https://api.deepgram.com/v1/speech/text-to-speech", {
      method: "POST",
      headers: {
        Authorization: `Token ${DEEPGRAM_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, voice }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      return res.status(response.status).send(errorMessage);
    }

    const audioBuffer = await response.arrayBuffer();
    res.set("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error("Error in proxy server:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 3000; // Choose any port you like
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
