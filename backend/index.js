import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send("Server is up");
})

const port = process.env.PORT || 8200

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})