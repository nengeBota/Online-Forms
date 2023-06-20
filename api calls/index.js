import dotenv from "dotenv";
import express from "express";
import bodyparser from "body-parser";
import path from 'path'
import cors from "cors";
import { default as schema } from "../src/stateDescription.mjs";
//import pg from "pg";
import mongoose from "mongoose";
import formatAllErrorsForState from "../src/helpers/formatAllErrorsForState.js";
import permitRouter from "./route.js";

dotenv.config({ path: "../.env" });
const server = express();
server.use(bodyparser.json({ limit: "10mb" }));
server.use(bodyparser.urlencoded({ extended: true, limit: "10mb" }));
server.use(cors());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri).then(
	() => {
		console.log("connection to atlas server successful");
	},
	(err) => {
		console.log(err);
	}
);

server.use(express.static("public"));

server.use('/', (_, res) => res.sendFile(path.join(__dirname, "public", "index.html")))
server.use("/submit", permitRouter);

server.listen(5001, () => console.log("success"));
