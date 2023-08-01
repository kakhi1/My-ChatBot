const express = require("express");

const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(cors());

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
