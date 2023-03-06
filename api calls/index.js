import dotenv from "dotenv";
import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { default as schema } from "../src/stateDescription.mjs";
import pg from "pg";
import formatAllErrorsForState from "../src/helpers/formatAllErrorsForState.js";

dotenv.config();
const server = express();
server.use(bodyparser.json());
server.use(cors());
const { Client } = pg;
const client = new Client({
	host: process.env.DB_HOST || "127.0.0.1",
	port: process.env.DB_PORT || 5432,
	user: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "G0ldilocks",
	database: process.env.DB_DATABASE || "tester",
});

// client.connect();

server.get("/", (req, res) => {
	console.log("this is what alvin says i should do");
	return res.json({ message: "welcome" });
});

server.post("/submit", (req, res) => {
	try {
		const values = req.body;
		console.log("values -> ", values);

		// if validation fails, we return a 40x with the description of what went wrong
		const { error } = schema.safeParse(values);

        if (Boolean(error)) {
			const errorState = formatAllErrorsForState(error?.format());
			res.status(400).send({ message: "Invalid input", errorState });
        }
        
        // extract the values, store in database @Bota
        



	} catch (error) {
		res.status(400).send({ message: "invalid input" });
	}
});


server.post("/applicant_details", async (req, res) => {
	try {
		const {
			uniqueid,
			applicantname,
			submissiondate,
			dateincorporated,
			placeincorporated,
			postal,
			email,
			website,
			contactperson,
			contactpersonmobile,
			affiliate,
			affiliatenationality,
		} = req.body;

		const result = await client.query(
			`insert into applicant_details("uniqueid","applicantname","submissiondate","dateincorporated","placeincorporated","postal","email","website","contactperson","contactpersonmobile","affiliate","affiliatenationality") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
			[
				uniqueid,
				applicantname,
				submissiondate,
				dateincorporated,
				placeincorporated,
				postal,
				email,
				website,
				contactperson,
				contactpersonmobile,
				affiliate,
				affiliatenationality,
			]
		);

		console.log("result of the query -> ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.post("/beneficials", async (req, res) => {
	try {
		const {
			beneficialname,
			Address,
			nationality,
			percentageshare,
			applicantuniqueid,
		} = req.body;

		const result = await client.query(
			`insert into beneficials("beneficialname", "Address","nationality", "percentageshare", "applicantuniqueid") VALUES ($1,$2,$3,$4,$5)`,
			[
				beneficialname,
				Address,
				nationality,
				percentageshare,
				applicantuniqueid,
			]
		);

		console.log("result of the query -> ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

//get category table columns for category session on form
server.get("/category", async (req, res) => {
	try {
		const result = await client.query(
			`select "id", "permitcategory" from category`
		);

		console.log("result of selecting categories -> ", result);

		res.status(200).json({
			success: true,
			data: result.rows,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

//get categorylist table columns for categorylist session on form
server.get("/categorylist", async (req, res) => {
	try {
		const result = await client.query(
			`select "id", "list",categoryid from categorylist`
		);

		console.log("result of selecting categorylist -> ", result);

		res.status(200).json({
			success: true,
			data: result.rows,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

/**
 * this session is dependent on category & categoryList
 * from the category and categorylist session on the form, save the ids from the respective tables
 */
server.post("/applicantpermitcategory", async (req, res) => {
	const {
		applicantuniqueid,
		categoryid,
		categorylistid1,
		categorylistid2,
		description,
	} = req.body;
	try {
		const result = await client.query(
			`INSERT INTO applicantpermitcategory("Description", "applicantuniqueid", "categoryid", categorylistid1, categorylistid2) values ($1, $2, $3, $4, $5)`,
			[
				description,
				applicantuniqueid,
				categoryid,
				categorylistid1,
				categorylistid2,
			]
		);

		console.log("result of selecting applicantpermitcategory -> ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.post("/beneficial", async (req, res) => {
	const {
		applicantuniqueid,
		beneficialname,
		address,
		nationality,
		percentageshare,
	} = req.body;
	try {
		const result = await client.query(
			`insert into beneficials(beneficialname, "address", nationality, percentageshare, applicantuniqueid) values ($1,$2,$3,$4,$5)`,
			[
				applicantuniqueid,
				beneficialname,
				address,
				nationality,
				percentageshare,
			]
		);
		console.log("beneficials result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

//positions should be hard coded as (management, other positions)
server.post("/companystaff", async (req, res) => {
	const {
		positions,
		numberofghanaians,
		numberofforeigners,
		totalnumberstaff,
		applicantuniqueid,
	} = req.body;
	try {
		const result = await client.query(
			`insert into companystaff(positions, numberghanaians, numberforeigners, totalnumberstaff, applicantuniqueid) values ($1,$2,$3,$4,$5)`,
			[
				positions,
				numberofghanaians,
				numberofforeigners,
				totalnumberstaff,
				applicantuniqueid,
			]
		);
		console.log("companystaff result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.post("/directorsormanagement", async (req, res) => {
	const {
		managementname,
		occupation,
		nationality,
		position,
		applicantuniqueid,
	} = req.body;
	try {
		const result = await client.query(
			`insert into directorsormanagement(mgtname, occupation, nationality,position, applicantuniqueid) values ($1,$2,$3,$4,$5)`,
			[
				managementname,
				occupation,
				nationality,
				position,
				applicantuniqueid,
			]
		);
		console.log("directors result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.post("/servicereceived", async (req, res) => {
	const { servicetype, contractsum, companyname, applicantuniqueid } =
		req.body;
	try {
		const result = await client.query(
			`insert into servicereceived(servicetype, contractsum, companyname, applicantuniqueid) values ($1,$2,$3,$4)`,
			[servicetype, contractsum, companyname, applicantuniqueid]
		);
		console.log("received services result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.post("/servicerendered", async (req, res) => {
	const { servicetype, contractsum, companyname, applicantuniqueid } =
		req.body;
	try {
		const result = await client.query(
			`insert into servicerendered(servicetype, contractsum, companyname, applicantuniqueid) values ($1,$2,$3,$4)`,
			[servicetype, contractsum, companyname, applicantuniqueid]
		);
		console.log("rendered services result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.post("/shareholders", async (req, res) => {
	const {
		applicantuniqueid,
		shareholdername,
		address,
		nationality,
		percentageshare,
	} = req.body;
	try {
		const result = await client.query(
			`insert into shareholders(shareholdername, "address", nationality, percentageshare, applicantuniqueid) values ($1,$2,$3,$4,$5)`,
			[
				shareholdername,
				address,
				nationality,
				percentageshare,
				applicantuniqueid,
			]
		);
		console.log("shareholders result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

//this request corresponds to pieces of information scattered over the form which follows no form of formal sequence.
server.post("/additionalinformation", async (req, res) => {
	const {
		applicantuniqueid,
		sourcesoffunding,
		sourcesofexpertise,
		sourcesofMachinery,
		detailofexperience,
		currentglobaloperations,
		upstreampetroleumcontractsexecuted,
		percentageghanaianparticipation,
		infrastructuralinvestment,
		ghanaiangoodsutilised,
	} = req.body;
	try {
		const result = await client.query(
			`insert into additionalinformation(sourcesoffunding, sourcesofexpertise, "sourcesOfEquipment&Machinery",detailofexperience, currentglobaloperations, upstreampetroleumcontractsexecuted, percentageghanaianparticipation, infrastructuralinvestment, ghanaiangoodsutilised, applicantuniqueid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
			[
				sourcesoffunding,
				sourcesofexpertise,
				sourcesofMachinery,
				detailofexperience,
				currentglobaloperations,
				upstreampetroleumcontractsexecuted,
				percentageghanaianparticipation,
				infrastructuralinvestment,
				ghanaiangoodsutilised,
				applicantuniqueid,
			]
		);
		console.log("additional information result: ", result);

		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

server.listen(5001, () => console.log("success"));
