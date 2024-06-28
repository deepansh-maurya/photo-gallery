import express from "express";
const app = express();
import { mongoDBconnect } from "./database/dbconnect.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: "./env" });
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.get("/", (req, res) => {
  console.log("aa gya ");
  return res.json({ message: "aa gya" });
});
app.use(express.json());
mongoDBconnect()
  .then(() => {
    app.listen(process.env.PORT || 400);
    console.log("serve is running successfully", " ", process.env.PORT);
  })
  .catch(() => {
    console.log("server failure");
  });
console.log("Sdfdg");
import router from "./routes/photoGallery.routes.js";
app.use("/api/v1", router);
