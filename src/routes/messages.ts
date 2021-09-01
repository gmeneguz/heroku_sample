import { Router } from "express";
import { Message } from "../models/Message";

export const router = Router();

router.get("/messages", async (req, res) => {
  const messages = await Message.findAll();
  res.json(messages);
});
router.post("/messages", async (req, res) => {
  const { text, user } = req.body;
  const message = await Message.create({
    text,
    user,
  });
  res.json(message);
});
router.delete("/messages", async (req, res) => {
  await Message.destroy({
    truncate: true,
  });
  res.json({ status: true });
});
