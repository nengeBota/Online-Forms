import { z } from "zod";
import {
	fieldNames,
	FIN_CAPABILITY_WHAT_APPLIES_OPTIONS,
	PERMIT_CATEGORIES,
} from "./constants.mjs";
import validations from "./constants/fieldValidations.js";

export const nonEmptyString = z.string().min(1, { message: "Required" });
export const file = z.array(
	z.object({ fileName: nonEmptyString, file: z.string() })
);
export const positiveNumber = z.number({ min: 0 });
export const dateBeforeToday = z
	.date()
	.max(new Date(), { message: "Date cannot be later than today" });

const corporateStructureValidations =
	validations[fieldNames.corporateStructureAndServices._];

const corporateStructureFields = fieldNames.corporateStructureAndServices;

const { corporateStructureAndServices } = fieldNames;

export const corporateStructureAndServicesDesc = z.object({
	...corporateStructureValidations,

	[corporateStructureAndServices.contactDetails._]: z.object({
		[corporateStructureAndServices.contactDetails.officeAddress]:
			corporateStructureValidations[
				corporateStructureFields.contactDetails._
			][corporateStructureFields.contactDetails.officeAddress],

		[corporateStructureAndServices.contactDetails.postalAddress]:
			corporateStructureValidations[
				corporateStructureFields.contactDetails._
			][corporateStructureFields.contactDetails.postalAddress],

		[corporateStructureAndServices.contactDetails.city]:
			corporateStructureValidations[
				corporateStructureFields.contactDetails._
			][corporateStructureFields.contactDetails.city],

		[corporateStructureAndServices.contactDetails.region]:
			corporateStructureValidations[
				corporateStructureFields.contactDetails._
			][corporateStructureFields.contactDetails.region],

		[corporateStructureAndServices.contactDetails.country]:
			corporateStructureValidations[
				corporateStructureFields.contactDetails._
			][corporateStructureFields.contactDetails.country],
	}),

	[corporateStructureAndServices.contactPerson._]: z.object({
		[corporateStructureAndServices.contactPerson.name]:
			corporateStructureValidations[
				corporateStructureFields.contactPerson._
			][corporateStructureFields.contactPerson.name],
		[corporateStructureAndServices.contactPerson.mobileNumber]:
			corporateStructureValidations[
				corporateStructureFields.contactPerson._
			][corporateStructureFields.contactPerson.mobileNumber],
	}),
});

export const financialCapabilityDesc = z.object({
	[fieldNames.finCapability.whatApplies]: z.enum(
		Object.values(FIN_CAPABILITY_WHAT_APPLIES_OPTIONS)
	),
	[fieldNames.finCapability.whatAppliesUploadedDocument]: file,
	[fieldNames.finCapability.sourceOfFunds]: nonEmptyString,
});
export const mgtAndTechnicalCompetenciesDesc = z.object({
	[fieldNames.mgtAndTechnicalCompetencies.orgChart]: z.array(file),
	[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]: z.array(file),
	[fieldNames.mgtAndTechnicalCompetencies.requiredExpertise]: nonEmptyString,
	[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]: nonEmptyString,
});
export const detailsOfExperienceDesc = z.object({
	[fieldNames.detailsOfExperience.companyExperience]: nonEmptyString,
	[fieldNames.detailsOfExperience.countries]: nonEmptyString,
	[fieldNames.detailsOfExperience.contractsExecuted._]: z.array(
		z.object({
			[fieldNames.detailsOfExperience.contractsExecuted.isEditing]:
				z.boolean(),
			[fieldNames.detailsOfExperience.contractsExecuted
				.descriptionOfContract]: nonEmptyString,
			[fieldNames.detailsOfExperience.contractsExecuted
				.nameOfCompanyWorkWasDoneFor]: nonEmptyString,
			[fieldNames.detailsOfExperience.contractsExecuted.contractDuration]:
				nonEmptyString,
			[fieldNames.detailsOfExperience.contractsExecuted.contractValue]:
				nonEmptyString,
		})
	),
});
export const orgDevProgramAndBudgetDesc = z.object({
	[fieldNames.orgDevProgramAndBudget.orgDevStrategy]: z.array(file),
	[fieldNames.orgDevProgramAndBudget.employmentPlan]: z.array(file),
	[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]:
		z.array(file),
	[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: z.array(file),
	[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]:
		z.array(file),
});
export const localContentDesc = z.object({
	[fieldNames.localContent.percentageOfGhanaianParticipation]: positiveNumber,
	[fieldNames.localContent.ghanaianMgtStaffBreakdown]: positiveNumber,
	[fieldNames.localContent.foreignMgtStaffBreakdown]: positiveNumber,
	[fieldNames.localContent.totalMgtStaffBreakdown]: positiveNumber,
	[fieldNames.localContent.ghanaianOtherStaffBreakdown]: positiveNumber,
	[fieldNames.localContent.foreignOtherStaffBreakdown]: positiveNumber,
	[fieldNames.localContent.totalOtherStaffBreakdown]: positiveNumber,
	[fieldNames.localContent.infraExpenditure]: positiveNumber,
	[fieldNames.localContent.rawMaterials]: nonEmptyString,
	[fieldNames.localContent.ghanaianFinishedGoods]: nonEmptyString,
	[fieldNames.localContent.valueOfServiceProvided._]: z.array(
		z.object({
			[fieldNames.localContent.valueOfServiceProvided.isEditing]:
				z.boolean(),
			[fieldNames.localContent.valueOfServiceProvided.typeOfService]:
				nonEmptyString,
			[fieldNames.localContent.valueOfServiceProvided.contractSum]:
				nonEmptyString,
			[fieldNames.localContent.valueOfServiceProvided
				.nameOfClientCompany]: nonEmptyString,
		})
	),
});
export const healthSafetySecurityEnvDesc = z.object({
	[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: z.array(file),
});
export const declarationDesc = z.array(file);
export const miscFilesDesc = z.array(file);
export const coverPageDesc = file;
export const checkListDesc = z.object({
	[fieldNames.checkList.coverPage]: z.literal(true),
	[fieldNames.checkList.applicationForm]: z.literal(true),
	[fieldNames.checkList.certificateOfIncorporation]: z.literal(true),
	[fieldNames.checkList.certificateToCommenceBusiness]: z.literal(true),
	[fieldNames.checkList.companyRegulations]: z.literal(true),
	[fieldNames.checkList.signedHssePolicyAndObj]: z.literal(true),
	[fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]:
		z.literal(true),
	[fieldNames.checkList.validTaxClearanceCertificate]: z.literal(true),
	[fieldNames.checkList.vatCertificate]: z.literal(true),
	[fieldNames.checkList.originalSsnitClearanceCertificate]: z.literal(true),
	[fieldNames.checkList.companyProfileAndBusinessPlan]: z.literal(true),
	[fieldNames.checkList.copiesOfOtherRegulatoryCerts]: z.literal(true),
	[fieldNames.checkList.copyOfApplicationPackReceipt]: z.literal(true),
});

const state = z.object({
	[fieldNames.corporateStructureAndServices._]:
		corporateStructureAndServicesDesc,

	[fieldNames.finCapability._]: financialCapabilityDesc,

	[fieldNames.mgtAndTechnicalCompetencies._]: mgtAndTechnicalCompetenciesDesc,

	[fieldNames.detailsOfExperience._]: detailsOfExperienceDesc,

	[fieldNames.orgDevProgramAndBudget._]: orgDevProgramAndBudgetDesc,

	[fieldNames.localContent._]: localContentDesc,

	[fieldNames.healthSafetySecurityEnv._]: healthSafetySecurityEnvDesc,

	[fieldNames.miscFiles]: miscFilesDesc,

	[fieldNames.declaration]: declarationDesc,

	[fieldNames.coverPage]: coverPageDesc,

	[fieldNames.checkList._]: checkListDesc,
});

export default state;
