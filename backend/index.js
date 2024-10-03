import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config();

const corsOptions = {
    origin: 'https://ai-image-generator-elkh.onrender.com',
    optionsSuccessStatus: 200
  };

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
    return res.status(200).send("Server is up");
});

app.post("/generate", async (req, res) => {
    const { prompt, size } = req.body;

    if (!prompt || !size) {
        return res.status(400).send("Bad Request");
    }

    try {
        const response = await openai.images.generate({
            prompt,
            size,
            n: 1,
        });
        const image_url = response.data[0].url;

        return res.status(200).send({
            src: image_url,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
});

const port = process.env.PORT || 8200;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
