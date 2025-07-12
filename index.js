import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Node Test 1",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});