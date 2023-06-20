import express from "express";
import permitAppFile from "./permit.model.js";
import state from "../src/stateDescription.mjs";

const router = express.Router();

//post method -- using only one collection
router.route("/").post(async (req, res) => {
	try {
    // const { error } = state.safeParse(req.body);

    // console.log('parsing validation error -> ', error);

    // if (error) {
    //   return res.status(400).json(error);
    // }

		const applicatonName = req.body.applicantName;
		const dateOfIncorporation = req.body.dateOfIncorporation;
		const placeOfIncorporation = req.body.placeOfIncorporation;
		const officeAddress = req.body.officeAddress;
		const postalAddress = req.body.postalAddress;
		const city = req.body.city;
		const region = req.body.region;
		const country = req.body.country;
		const emailAddress = req.body.emailAddress;
		const website = req.body.website;
		const contactPerson = req.body.name;
		const mobileNumberOfcontactPerson = req.body.mobileNumber;
		const emailOfcontactPerson = req.body.email;
		const nameOfSubsidiaryOrAffiliate =
			req.body.nameOfSubsidiaryOrAffiliate;
		const nationalityOfAffiliate = req.body.nationalityOfAffiliate;
		const permitCategory = req.body.permitCategory;
		const executiveDirectors = req.body.executiveDirectors;
		const activities = req.body.activities;
		const description = req.body.description;
		const whatApplies = req.body.whatApplies;
		const requiredExpertiseLocalNInternational = req.body.requiredExpertise;
		const sourcesOfEquipmentForPetroleumActivities =
			req.body.sourcesOfEquipment;
		const companyPastPetroleumExperience = req.body.companyExperience;
		const countriesWithPetroleumActivities = req.body.countries;
		const percentageOfGhanaianParticipation =
			req.body.percentageOfGhanaianParticipation;
		const ghanaianMgtStaffBreakdown = req.body.ghanaianMgtStaffBreakdown;
		const foreignMgtStaffBreakdown = req.body.foreignMgtStaffBreakdown;
		const totalMgtStaffBreakdown = req.body.totalMgtStaffBreakdown;
		const ghanaianOtherStaffBreakdown =
			req.body.ghanaianOtherStaffBreakdown;
		const foreignOtherStaffBreakdown = req.body.foreignOtherStaffBreakdown;
		const totalOtherStaffBreakdown = req.body.totalOtherStaffBreakdown;
		const infrastructuralInvestments = req.body.infraExpenditure;
		const rawMaterialsUtilized = req.body.rawMaterials;
		const ghanaianFinishedGoodsUtilized = req.body.ghanaianFinishedGoods;
		const localContentStatus = req.body.localContent;
		const corporateStructure = req.body.corporateStructure;
		const shareholders = req.body.shareholders;
		const beneficial = req.body.beneficial;
		const financialCapabilityDocument =
			req.body.financialCapabilityDocument;
		const organisationalChart = req.body.orgChart;
		const detailedStaffInfo = req.body.detailedStaffInfo;
		const contractsExecuted = req.body.contractsExecuted;
		const orgDevStrategy = req.body.orgDevStrategy;
		const employmentPlan = req.body.employmentPlan;
		const techTransferProgramAndBudget =
			req.body.techTransferProgramAndBudget;
		const trainingProgramAndBudget = req.body.trainingProgramAndBudget;
		const csrAndSocialDevProgramAndBudget =
			req.body.scrAndSocialDevProgramAndBudget;
		const valueOfServiceRendered = req.body.valueOfServiceProvided;
		const valueOfServiceReceived = req.body.valueOfServiceReceived;
		const hssePolicyAndObj = req.body.hssePolicyAndObj;
		const certificateOfIncorporation = req.body.certificateOfIncorporation;
		const certificateToCommenceBusiness =
			req.body.certificateToCommenceBusiness;
		const companyRegulationsDocument = req.body.companyRegulationsDocument;
		const currentAuditedFinReportsOrProjectedRevenue =
			req.body.currentAuditedFinReportsOrProjectedRevenue;
		const validTaxClearanceCertificate =
			req.body.validTaxClearanceCertificate;
		const vatCertificate = req.body.vatCertificate;
		const validSSNITClearanceCertificate =
			req.body.validSSNITClearanceCertificate;
		const companyProfileAndBusinessPlan =
			req.body.companyProfileAndBusinessPlan;
		const epaPermit = req.body.epaPermit;
		const airOpeartorCertificate = req.body.airOpeartorCertificate;
		const aviationLicense = req.body.aviationLicense;
		const fdaHygieneCertificate = req.body.fdaHygieneCertificate;
		const copyOfApplicationPackReceipt =
			req.body.copyOfApplicationPackReceipt;
		const declaration = req.body.declaration;
		const coverPage = req.body.coverpage;

		const newPermitFile = new permitAppFile({
			applicatonName,
			dateOfIncorporation,
			placeOfIncorporation,
			officeAddress,
			postalAddress,
			city,
			region,
			country,
			emailAddress,
			website,
			contactPerson,
			mobileNumberOfcontactPerson,
			emailOfcontactPerson,
			nameOfSubsidiaryOrAffiliate,
			nationalityOfAffiliate,
			permitCategory,
			executiveDirectors,
			activities,
			description,
			whatApplies,
			requiredExpertiseLocalNInternational,
			sourcesOfEquipmentForPetroleumActivities,
			companyPastPetroleumExperience,
			countriesWithPetroleumActivities,
			percentageOfGhanaianParticipation,
			ghanaianMgtStaffBreakdown,
			foreignMgtStaffBreakdown,
			totalMgtStaffBreakdown,
			ghanaianOtherStaffBreakdown,
			foreignOtherStaffBreakdown,
			totalOtherStaffBreakdown,
			infrastructuralInvestments,
			rawMaterialsUtilized,
			ghanaianFinishedGoodsUtilized,
			localContentStatus,
			corporateStructure,
			shareholders,
			beneficial,
			financialCapabilityDocument,
			organisationalChart,
			detailedStaffInfo,
			contractsExecuted,
			orgDevStrategy,
			employmentPlan,
			techTransferProgramAndBudget,
			trainingProgramAndBudget,
			csrAndSocialDevProgramAndBudget,
			valueOfServiceReceived,
			validSSNITClearanceCertificate,
			valueOfServiceRendered,
			hssePolicyAndObj,
			certificateOfIncorporation,
			certificateToCommenceBusiness,
			companyProfileAndBusinessPlan,
			companyRegulationsDocument,
			currentAuditedFinReportsOrProjectedRevenue,
			validTaxClearanceCertificate,
			vatCertificate,
			epaPermit,
			airOpeartorCertificate,
			aviationLicense,
			fdaHygieneCertificate,
			copyOfApplicationPackReceipt,
			declaration,
			coverPage,
    });
    
    const newPermitFile_ = new permitAppFile(req.body);

		console.log("\n");
		const response = await newPermitFile_.save();
		console.log("response -> ", response);
		return res.status(200).json({ message: "success" });
	} catch (error) {
		console.error("error -> ", error);
		return res.status(500).json({ message: "something went wrong" });
	}
});

export default router;
