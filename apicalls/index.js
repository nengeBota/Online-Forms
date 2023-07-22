import dotenv from "dotenv";
import express from "express";
import bodyparser from "body-parser";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import permitRouter from "./route.js";
import { fileURLToPath } from "url";

dotenv.config({ path: "../.env" });
const server = express();
server.use(bodyparser.json({ limit: "10mb" }));
server.use(bodyparser.urlencoded({ extended: true, limit: "10mb" }));

if (process.env.NODE_ENV === "development") {
	server.use(cors());
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uri = process.env.DATABASE_URL;
const port = process.env.PORT || "3000";

mongoose.connect(uri).then(
	() => {
		console.log("connection to atlas server successful");
	},
	(err) => {
		console.log(err);
	}
);

server.use(express.static("public"));

server.use("/submit", permitRouter);
server.use("/", (_, res) =>
	res.sendFile(path.join(__dirname, "public", "index.html"))
);

server.listen(port, () => console.log("success"));
