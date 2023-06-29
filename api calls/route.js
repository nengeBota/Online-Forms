import express from "express";
import permitAppFile from "./permit.model.js";
import state from "../src/stateDescription.mjs";

const router = express.Router();

router.route("/").post(async (req, res) => {
	try {
		const { error } = state.safeParse(req.body);
		console.log("parsing validation error -> ", JSON.stringify(error));

		const newPermitFile_ = new permitAppFile(req.body);

		await newPermitFile_.save();
		return res.status(200).json({ message: "Successfully submitted" });
	} catch (error) {
		console.error("error in catch block -> ", JSON.stringify(error));
		return res.status(500).json({ message: "something went wrong", error });
	}
});

export default router;
