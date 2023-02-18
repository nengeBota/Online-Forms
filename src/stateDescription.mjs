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
const mustBeTrue = z.literal(true);

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
	[fieldNames.mgtAndTechnicalCompetencies.orgChart]: file,
	[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]: file,
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
	[fieldNames.orgDevProgramAndBudget.orgDevStrategy]: file,
	[fieldNames.orgDevProgramAndBudget.employmentPlan]: file,
	[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]: file,
	[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: file,
	[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]: file,
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
	[fieldNames.localContent.valueOfServiceReceived._]: z.array(
		z.object({
			[fieldNames.localContent.valueOfServiceReceived.isEditing]:
				z.boolean(),
			[fieldNames.localContent.valueOfServiceReceived.typeOfService]:
				nonEmptyString,
			[fieldNames.localContent.valueOfServiceReceived.contractSum]:
				nonEmptyString,
			[fieldNames.localContent.valueOfServiceReceived
				.nameOfClientCompany]: nonEmptyString,
		})
	),
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
	[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: file,
});
export const declarationDesc = file;
export const miscFilesDesc = file;
export const coverPageDesc = file;
export const checkListDesc = z.object({
	[fieldNames.checkList.coverPage]: mustBeTrue,
	[fieldNames.checkList.applicationForm]: mustBeTrue,
	[fieldNames.checkList.certificateOfIncorporation]: mustBeTrue,
	[fieldNames.checkList.certificateToCommenceBusiness]: mustBeTrue,
	[fieldNames.checkList.companyRegulations]: mustBeTrue,
	[fieldNames.checkList.signedHssePolicyAndObj]: mustBeTrue,
	[fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]:
		mustBeTrue,
	[fieldNames.checkList.validTaxClearanceCertificate]: mustBeTrue,
	[fieldNames.checkList.vatCertificate]: mustBeTrue,
	[fieldNames.checkList.originalSsnitClearanceCertificate]: mustBeTrue,
	[fieldNames.checkList.companyProfileAndBusinessPlan]: mustBeTrue,
	[fieldNames.checkList.copiesOfOtherRegulatoryCerts]: mustBeTrue,
	[fieldNames.checkList.copyOfApplicationPackReceipt]: mustBeTrue,
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
