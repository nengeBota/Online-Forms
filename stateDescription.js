import { validators } from "validate.js";
import { z } from "zod";
import {
	fieldNames,
	FIN_CAPABILITY_WHAT_APPLIES_OPTIONS,
	PERMIT_CATEGORIES,
} from "./src/constants";

const file = z.object({ fileName: z.string(), file: z.string() });
const positiveNumber = z.number({ min: 0 });

const state = z.object({
	[fieldNames.corporateStructureAndServices._]: z.object({
		[fieldNames.corporateStructureAndServices.applicantName]: z.string(),
		[fieldNames.corporateStructureAndServices.dateOfIncorporation]: z
			.date()
			.max(new Date(), { message: "Date cannot be later than today" }),
		[fieldNames.corporateStructureAndServices.placeOfIncorporation]:
			z.string(),
		[fieldNames.corporateStructureAndServices.contactDetails._]: z.object({
			[fieldNames.corporateStructureAndServices.contactDetails
				.officeAddress]: z.string(),
			[fieldNames.corporateStructureAndServices.contactDetails
				.postalAddress]: z.string(),
			[fieldNames.corporateStructureAndServices.contactDetails.city]:
				z.string(),
			[fieldNames.corporateStructureAndServices.contactDetails.region]:
				z.string(),
			[fieldNames.corporateStructureAndServices.contactDetails.country]:
				z.string(),
		}),
		[fieldNames.corporateStructureAndServices.emailAddress]: z
			.string()
			.email(),
		[fieldNames.corporateStructureAndServices.website]: z.string().url(),
		[fieldNames.corporateStructureAndServices.contactPerson._]: z.object({
			[fieldNames.corporateStructureAndServices.contactPerson.name]:
				z.string(),
			[fieldNames.corporateStructureAndServices.contactPerson
				.mobileNumber]: z
				.string()
				.refine((input) => validators.isMobilePhone(input)),
		}),
		[fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
			z.string(),
		[fieldNames.corporateStructureAndServices.nationalityOfAffiliate]:
			z.string(),
		[fieldNames.corporateStructureAndServices.permitCategory]: z.enum(
			Object.values(PERMIT_CATEGORIES)
		),
		[fieldNames.corporateStructureAndServices.shareholders._]: z.array(
			z.object({
				[fieldNames.corporateStructureAndServices.shareholders.name]:
					z.string(),
				[fieldNames.corporateStructureAndServices.shareholders.address]:
					z.string(),
				[fieldNames.corporateStructureAndServices.shareholders
					.nationality]: z.string(),
				[fieldNames.corporateStructureAndServices.shareholders
					.percentage]: z.number({ max: 100 }),
				[fieldNames.corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),
		[fieldNames.corporateStructureAndServices.beneficial._]: z.array(
			z.object({
				[fieldNames.corporateStructureAndServices.beneficial.name]:
					z.string(),
				[fieldNames.corporateStructureAndServices.beneficial
					.nationality]: z.string(),
				[fieldNames.corporateStructureAndServices.beneficial
					.percentage]: z.number({ max: 100 }),
				[fieldNames.corporateStructureAndServices.beneficial.address]:
					z.string(),
				[fieldNames.corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),
		[fieldNames.corporateStructureAndServices.executiveDirectors]:
			z.string(),
		[fieldNames.corporateStructureAndServices.activities]: z
			.array(z.string())
			.length(2),
		[fieldNames.corporateStructureAndServices.corporateStructure]:
			z.array(file),
		[fieldNames.corporateStructureAndServices.description]: z.string(),
	}),
	[fieldNames.finCapability._]: z.object({
		[fieldNames.finCapability.whatApplies]: z.enum(
			Object.values(FIN_CAPABILITY_WHAT_APPLIES_OPTIONS)
		),
		[fieldNames.finCapability.whatAppliesUploadedDocument]: file,
		[fieldNames.finCapability.sourceOfFunds]: z.string(),
	}),
	[fieldNames.mgtAndTechnicalCompetencies._]: z.object({
		[fieldNames.mgtAndTechnicalCompetencies.orgChart]: z.array(file),
		[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]:
			z.array(file),
		[fieldNames.mgtAndTechnicalCompetencies.requiredExpertise]: z.string(),
		[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]: z.string(),
	}),

	[fieldNames.detailsOfExperience._]: z.object({
		[fieldNames.detailsOfExperience.companyExperience]: z.string(),
		[fieldNames.detailsOfExperience.countries]: z.string(),
		[fieldNames.detailsOfExperience.contractsExecuted._]: z.array(
			z.object({
				[fieldNames.detailsOfExperience.contractsExecuted.isEditing]:
					z.boolean(),
				[fieldNames.detailsOfExperience.contractsExecuted
					.descriptionOfContract]: z.string(),
				[fieldNames.detailsOfExperience.contractsExecuted
					.nameOfCompanyWorkWasDoneFor]: z.string(),
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractDuration]: z.string(),
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractValue]: z.string(),
			})
		),
	}),

	[fieldNames.orgDevProgramAndBudget._]: z.object({
		[fieldNames.orgDevProgramAndBudget.orgDevStrategy]: z.array(file),
		[fieldNames.orgDevProgramAndBudget.employmentPlan]: z.array(file),
		[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]:
			z.array(file),
		[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]:
			z.array(file),
		[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]:
			z.array(file),
	}),

	[fieldNames.localContent._]: z.object({
		[fieldNames.localContent.percentageOfGhanaianParticipation]:
			positiveNumber,
		[fieldNames.localContent.ghanaianMgtStaffBreakdown]: positiveNumber,
		[fieldNames.localContent.foreignMgtStaffBreakdown]: positiveNumber,
		[fieldNames.localContent.totalMgtStaffBreakdown]: positiveNumber,
		[fieldNames.localContent.ghanaianOtherStaffBreakdown]: positiveNumber,
		[fieldNames.localContent.foreignOtherStaffBreakdown]: positiveNumber,
		[fieldNames.localContent.totalOtherStaffBreakdown]: positiveNumber,
		[fieldNames.localContent.infraExpenditure]: positiveNumber,
		[fieldNames.localContent.rawMaterials]: z.string(),
		[fieldNames.localContent.ghanaianFinishedGoods]: z.string(),
		[fieldNames.localContent.valueOfServiceProvided._]: z.array(
			z.object({
				[fieldNames.localContent.valueOfServiceProvided.isEditing]:
					z.boolean(),
				[fieldNames.localContent.valueOfServiceProvided.typeOfService]:
					z.string(),
				[fieldNames.localContent.valueOfServiceProvided.contractSum]:
					z.string(),
				[fieldNames.localContent.valueOfServiceProvided
					.nameOfClientCompany]: z.string(),
			})
		),
	}),

	[fieldNames.healthSafetySecurityEnv._]: z.object({
		[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: z.array(file),
	}),

	[fieldNames.miscFiles]: z.array(file),

	[fieldNames.declaration]: z.array(file),

	[fieldNames.coverPage]: file,

	[fieldNames.checkList._]: z.object({
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
	}),
});

export default state;
