import { z } from "zod";
import {
	fieldNames,
	FIN_CAPABILITY_WHAT_APPLIES_OPTIONS,
	PERMIT_CATEGORIES,
} from "./constants.mjs";
import validations from "./constants/fieldValidations.js";

export const nonEmptyString = z.string().min(1, { message: "Required" });
export const file = z.object({ fileName: nonEmptyString, file: z.string() });
export const positiveNumber = z.number({ min: 0 });
export const dateBeforeToday = z
	.date()
	.max(new Date(), { message: "Date cannot be later than today" });

const corporateStructureValidations =
	validations[fieldNames.corporateStructureAndServices._];

const { corporateStructureAndServices } = fieldNames;

export const corporateStructureAndServicesDesc = z.object({
	...corporateStructureValidations,

	[corporateStructureAndServices.contactDetails._]: z.object({
		...corporateStructureValidations[
			corporateStructureValidations.contactDetails._
		],
	}),

	[corporateStructureAndServices.contactPerson._]: z.object({
		...corporateStructureValidations[
			corporateStructureValidations.contactPerson._
		],
	}),

	// [fieldNames.corporateStructureAndServices.applicantName]: nonEmptyString,
	// [fieldNames.corporateStructureAndServices.dateOfIncorporation]: z
	// 	.date()
	// 	.max(new Date(), { message: "Date cannot be later than today" }),
	// [fieldNames.corporateStructureAndServices.placeOfIncorporation]:
	// 	nonEmptyString,
	// [fieldNames.corporateStructureAndServices.contactDetails._]: z.object({
	// 	[fieldNames.corporateStructureAndServices.contactDetails.officeAddress]:
	// 		nonEmptyString,
	// 	[fieldNames.corporateStructureAndServices.contactDetails.postalAddress]:
	// 		nonEmptyString,
	// 	[fieldNames.corporateStructureAndServices.contactDetails.city]:
	// 		nonEmptyString,
	// 	[fieldNames.corporateStructureAndServices.contactDetails.region]:
	// 		nonEmptyString,
	// 	[fieldNames.corporateStructureAndServices.contactDetails.country]:
	// 		nonEmptyString,
	// }),
	// [fieldNames.corporateStructureAndServices.emailAddress]: z.string().email(),
	// [fieldNames.corporateStructureAndServices.website]: z.string().url(),
	// [fieldNames.corporateStructureAndServices.contactPerson._]: z.object({
	// 	[fieldNames.corporateStructureAndServices.contactPerson.name]:
	// 		nonEmptyString,
	// 	[fieldNames.corporateStructureAndServices.contactPerson.mobileNumber]:
	// 		nonEmptyString,
	// }),
	// [fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
	// 	nonEmptyString,
	// [fieldNames.corporateStructureAndServices.nationalityOfAffiliate]:
	// 	nonEmptyString,
	// [fieldNames.corporateStructureAndServices.permitCategory]: z.enum(
	// 	Object.values(PERMIT_CATEGORIES)
	// ),
	// [fieldNames.corporateStructureAndServices.shareholders._]: z.array(
	// 	z.object({
	// 		[fieldNames.corporateStructureAndServices.shareholders.name]:
	// 			nonEmptyString,
	// 		[fieldNames.corporateStructureAndServices.shareholders.address]:
	// 			nonEmptyString,
	// 		[fieldNames.corporateStructureAndServices.shareholders.nationality]:
	// 			nonEmptyString,
	// 		[fieldNames.corporateStructureAndServices.shareholders.percentage]:
	// 			z.number({ max: 100 }),
	// 		[fieldNames.corporateStructureAndServices.beneficial.isEditing]:
	// 			z.boolean(),
	// 	})
	// ),
	// [fieldNames.corporateStructureAndServices.beneficial._]: z.array(
	// 	z.object({
	// 		[fieldNames.corporateStructureAndServices.beneficial.name]:
	// 			nonEmptyString,
	// 		[fieldNames.corporateStructureAndServices.beneficial.nationality]:
	// 			nonEmptyString,
	// 		[fieldNames.corporateStructureAndServices.beneficial.percentage]:
	// 			z.number({ max: 100 }),
	// 		[fieldNames.corporateStructureAndServices.beneficial.address]:
	// 			nonEmptyString,
	// 		[fieldNames.corporateStructureAndServices.beneficial.isEditing]:
	// 			z.boolean(),
	// 	})
	// ),
	// [fieldNames.corporateStructureAndServices.executiveDirectors]:
	// 	nonEmptyString,
	// [fieldNames.corporateStructureAndServices.activities]: z
	// 	.array(z.string())
	// 	.length(2),
	// [fieldNames.corporateStructureAndServices.corporateStructure]:
	// 	z.array(file),
	// [fieldNames.corporateStructureAndServices.description]: nonEmptyString,
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
	[fieldNames.checkList.coverPage]: z.boolean(),
	[fieldNames.checkList.applicationForm]: z.boolean(),
	[fieldNames.checkList.certificateOfIncorporation]: z.boolean(),
	[fieldNames.checkList.certificateToCommenceBusiness]: z.boolean(),
	[fieldNames.checkList.companyRegulations]: z.boolean(),
	[fieldNames.checkList.signedHssePolicyAndObj]: z.boolean(),
	[fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]:
		z.boolean(),
	[fieldNames.checkList.validTaxClearanceCertificate]: z.boolean(),
	[fieldNames.checkList.vatCertificate]: z.boolean(),
	[fieldNames.checkList.originalSsnitClearanceCertificate]: z.boolean(),
	[fieldNames.checkList.companyProfileAndBusinessPlan]: z.boolean(),
	[fieldNames.checkList.copiesOfOtherRegulatoryCerts]: z.boolean(),
	[fieldNames.checkList.copyOfApplicationPackReceipt]: z.boolean(),
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
