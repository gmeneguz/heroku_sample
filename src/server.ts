import express from "express";
import { router } from "./routes/messages";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Versão 1.3");
});

app.use(router);

export function startServer() {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`app started and listening at port ${port}`);
  });
}
