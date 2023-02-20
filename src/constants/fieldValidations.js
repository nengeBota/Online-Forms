import { z } from "zod";
import {
	fieldNames,
	FIN_CAPABILITY_WHAT_APPLIES_OPTIONS,
	PERMIT_CATEGORIES,
} from "../constants.mjs";
// import { file } from "../stateDescription.mjs";
// import { dateBeforeToday, file, nonEmptyString } from "../stateDescription.mjs";

export const nonEmptyString = z.string().min(1, { message: "Required" });
export const file = z.array(
	z.object({ fileName: nonEmptyString, file: z.string() })
);
export const positiveNumber = z.number({ min: 0 });
export const dateBeforeToday = z
	.date()
	.max(new Date(), { message: "Date cannot be later than today" });

const corporateStructureAndServices = fieldNames.corporateStructureAndServices;

const validations = {
	[corporateStructureAndServices._]: {
		[corporateStructureAndServices.applicantName]: nonEmptyString,
		[corporateStructureAndServices.dateOfIncorporation]: dateBeforeToday,
		[corporateStructureAndServices.placeOfIncorporation]: nonEmptyString,
		[corporateStructureAndServices.contactDetails._]: {
			[corporateStructureAndServices.contactDetails.officeAddress]:
				nonEmptyString,
			[corporateStructureAndServices.contactDetails.postalAddress]:
				nonEmptyString,
			[corporateStructureAndServices.contactDetails.city]: nonEmptyString,
			[corporateStructureAndServices.contactDetails.region]:
				nonEmptyString,
			[corporateStructureAndServices.contactDetails.country]:
				nonEmptyString,
		},
		[corporateStructureAndServices.emailAddress]: z.string().email(),
		[corporateStructureAndServices.website]: z.string().url(),
		[corporateStructureAndServices.contactPerson._]: {
			[corporateStructureAndServices.contactPerson.name]: nonEmptyString,
			[corporateStructureAndServices.contactPerson.mobileNumber]:
				nonEmptyString,
		},
		[corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
			nonEmptyString,
		[corporateStructureAndServices.nationalityOfAffiliate]: nonEmptyString,
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
					z.number({ max: 100, min: 0 }),
				[corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),
		[corporateStructureAndServices.beneficial._]: z.array(
			z.object({
				[corporateStructureAndServices.beneficial.name]: nonEmptyString,
				[corporateStructureAndServices.beneficial.nationality]:
					nonEmptyString,
				[corporateStructureAndServices.beneficial.percentage]: z.number(
					{ max: 100 }
				),
				[corporateStructureAndServices.beneficial.address]:
					nonEmptyString,
				[corporateStructureAndServices.beneficial.isEditing]:
					z.boolean(),
			})
		),

		[corporateStructureAndServices.executiveDirectors]: nonEmptyString,
		[corporateStructureAndServices.activities]: z
			.array(nonEmptyString)
			.length(2, { message: "Must select exactly two items" }),
		[corporateStructureAndServices.corporateStructure]: file,
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
	[fieldNames.mgtAndTechnicalCompetencies.requiredExpertise]: nonEmptyString,
	[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]: nonEmptyString,
    }
};

export default validations;
