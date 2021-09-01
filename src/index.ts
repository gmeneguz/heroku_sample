import "dotenv/config";
import { startDb } from "./db/db";
import { Message } from "./models/Message";
import { startServer } from "./server";

async function init() {
  await startDb();
  // In production use migrations instead of sync()
  await Message.sync();
  startServer();
}

init();
