import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/dengue-info", async (req, res) => {
  try {
    const response = await axios.get(
      "https://info.dengue.mat.br/api/alertcity/?geocode=3550308&disease=dengue&format=json&ew_start=01&ey_start=2024&ew_end=10&ey_end=2024"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
