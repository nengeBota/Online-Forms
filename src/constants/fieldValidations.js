import { z } from "zod";
import {
	fieldNames,
	FIN_CAPABILITY_WHAT_APPLIES_OPTIONS,
	PERMIT_CATEGORIES,
} from "../constants.mjs";
import { localContentFieldValidations } from "../helpers/localContent/index.js";

export const nonEmptyString = z.string().min(1, { message: "Required" });
export const file = z.array(
	z.object({ fileName: nonEmptyString, file: z.string() })
);
const optional = (schema) => z.union([schema, z.literal("")]);
const optionalFile = z.array(
	z.object({ fileName: optional(nonEmptyString), file: optional(z.string()) })
);
export const positiveNumber = z.coerce.number({ min: 1 });
export const dateBeforeToday = z.coerce
	.date()
	.max(new Date(), { message: "Date cannot be later than today" });
const percentage = z.coerce
	.number()
	.gt(0, { message: "Can't be less than 1%" })
	.lt(101, { message: "Can't be greater than 100%" });

const corporateStructureAndServices = fieldNames.corporateStructureAndServices;

const validations = {
	[corporateStructureAndServices._]: {
		[corporateStructureAndServices.applicantName]: nonEmptyString,
		[corporateStructureAndServices.dateOfIncorporation]: dateBeforeToday,
		[corporateStructureAndServices.placeOfIncorporation]: nonEmptyString,

		[corporateStructureAndServices.contactDetails._]: z.object({
			[corporateStructureAndServices.contactDetails.officeAddress]:
				nonEmptyString,
			[corporateStructureAndServices.contactDetails.postalAddress]:
				nonEmptyString,
			[corporateStructureAndServices.contactDetails.GHpost]:
				nonEmptyString,
		}),

		[corporateStructureAndServices.emailAddress]: z.string().email(),
		[corporateStructureAndServices.website]: optional(
			z.string().url({
				message: "Invalid URL. Please ensure it includes http/https",
			})
		),
		//made some changes here
		[corporateStructureAndServices.contactPerson._]: z.array(
			z.object({
				[corporateStructureAndServices.contactPerson.name]:
					nonEmptyString,
				[corporateStructureAndServices.contactPerson.mobileNumber]:
					nonEmptyString,
				[corporateStructureAndServices.contactPerson.email]: z
					.string()
					.email(),
				[corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),

		[corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
			optional(nonEmptyString),
		[corporateStructureAndServices.nationalityOfAffiliate]:
			optional(nonEmptyString),
		[corporateStructureAndServices.permitCategory]: z.enum(
			Object.values(PERMIT_CATEGORIES)
		),
		[corporateStructureAndServices.shareholders._]: z.array(
			z.object({
				[corporateStructureAndServices.shareholders.name]:
					nonEmptyString,
				[corporateStructureAndServices.shareholders.address]:
					nonEmptyString,
				[corporateStructureAndServices.shareholders.nationality]:
					nonEmptyString,
				[corporateStructureAndServices.shareholders.percentage]:
					percentage,
				[corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),
		[corporateStructureAndServices.beneficial._]: z.array(
			z.object({
				[corporateStructureAndServices.beneficial.name]: nonEmptyString,
				[corporateStructureAndServices.beneficial.nationality]:
					nonEmptyString,
				[corporateStructureAndServices.beneficial.percentage]:
					percentage,
				[corporateStructureAndServices.beneficial.address]:
					nonEmptyString,
				[corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),

		[corporateStructureAndServices.executiveDirectors._]: z.array(
			z.object({
				[corporateStructureAndServices.executiveDirectors.name]:
					nonEmptyString,
				[corporateStructureAndServices.executiveDirectors.occupation]:
					nonEmptyString,
				[corporateStructureAndServices.executiveDirectors.email]: z
					.string()
					.email(),
				[corporateStructureAndServices.executiveDirectors.contact]:
					nonEmptyString,
				[corporateStructureAndServices.executiveDirectors.nationality]:
					nonEmptyString,
				[corporateStructureAndServices.executiveDirectors.position]:
					nonEmptyString,
			})
		),

		[corporateStructureAndServices.activities]: z
			.array(nonEmptyString)
			.length(2, { message: "Must select exactly two items" }),
		[corporateStructureAndServices.corporateStructure]: optionalFile,
		[corporateStructureAndServices.description]: nonEmptyString,
	},
	[fieldNames.finCapability._]: {
		[fieldNames.finCapability.whatApplies]: z.enum(
			Object.values(FIN_CAPABILITY_WHAT_APPLIES_OPTIONS)
		),
		[fieldNames.finCapability.whatAppliesUploadedDocument]: file,
		[fieldNames.finCapability.sourceOfFunds]: nonEmptyString,
	},
	[fieldNames.mgtAndTechnicalCompetencies._]: {
		[fieldNames.mgtAndTechnicalCompetencies.orgChart]: file,
		[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]: file,
		// [fieldNames.mgtAndTechnicalCompetencies.requiredExpertise]:
		// 	nonEmptyString,
		[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]:
			nonEmptyString,
	},
	[fieldNames.detailsOfExperience._]: {
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
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractDuration]: nonEmptyString,
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractValue]: positiveNumber,
			})
		),
	},
	[fieldNames.localContent._]: localContentFieldValidations,

	[fieldNames.miscFiles._]: {
		[fieldNames.miscFiles.certificateOfIncorporation]: file,
		[fieldNames.miscFiles.certificateToCommenceBusiness]: file,
		[fieldNames.miscFiles.companyRegulationsDocument]: file,
		[fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue]: file,
		[fieldNames.miscFiles.validTaxClearanceCertificate]: file,
		[fieldNames.miscFiles.vatCertificate]: file,
		[fieldNames.miscFiles.validSSNITClearanceCertificate]: file,
		[fieldNames.miscFiles.companyProfileAndBusinessPlan]: file,
		[fieldNames.miscFiles.EPAPermit]: file,
		[fieldNames.miscFiles.airOperatorCertificate]: file,
		[fieldNames.miscFiles.aviationLicense]: file,
		[fieldNames.miscFiles.fdaHygieneCertificate]: file,
		[fieldNames.miscFiles.copyOfApplicationPackReceipt]: file,
	},
};

export default validations;

export const singlecontactPerson = z.object({
	[corporateStructureAndServices.contactPerson.name]: nonEmptyString,
	[corporateStructureAndServices.contactPerson.email]: z.string().email(),
	[corporateStructureAndServices.contactPerson.mobileNumber]: nonEmptyString,
});

export const singleShareholder = z.object({
	[corporateStructureAndServices.shareholders.name]: nonEmptyString,
	[corporateStructureAndServices.shareholders.address]: nonEmptyString,
	[corporateStructureAndServices.shareholders.nationality]: nonEmptyString,
	[corporateStructureAndServices.shareholders.percentage]: percentage,
});

export const singleexecutiveDirectors = z.object({
	[corporateStructureAndServices.executiveDirectors.name]: nonEmptyString,
	[corporateStructureAndServices.executiveDirectors.occupation]:
		nonEmptyString,
	[corporateStructureAndServices.executiveDirectors.email]: z
		.string()
		.email(),
	[corporateStructureAndServices.executiveDirectors.contact]: z.number,
	[corporateStructureAndServices.executiveDirectors.nationality]:
		nonEmptyString,
	[corporateStructureAndServices.executiveDirectors.position]: nonEmptyString,
});
