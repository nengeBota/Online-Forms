import { z } from "zod";
import { fieldNames } from "./constants.mjs";
import validations from "./constants/fieldValidations.js";
import localContentSchema from "./helpers/localContent/localContent.schema.js";

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
const finCapabilityValidations = validations[fieldNames.finCapability._];

const getMiscFilesValidation = (field) =>
	validations[fieldNames.miscFiles._][field];

export const corporateStructureAndServicesDesc = z
	.object({
		...corporateStructureValidations,
	})
	.superRefine((data, ctx) => {
		const { companyIsJointVenture = false, contactPerson } = data;
		console.log({ contactPerson, companyIsJointVenture, data });

		if (companyIsJointVenture) {
			if (!Array.isArray(contactPerson)) {
				ctx.addIssue({
					code: z.ZodIssueCode.invalid_type,
          message: "Should be a list of contact persons",
          path: ['contactPerson']
				});

				return;
			}

			if (contactPerson.length < 2) {
				ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          path: ['contactPerson'],
					message:
						"Joint Ventures should provide at least 2 contact persons; one from each party",
				});
			}
		}
	});

export const financialCapabilityDesc = z.object({
	[fieldNames.finCapability.whatApplies]:
		finCapabilityValidations[fieldNames.finCapability.whatApplies],
	[fieldNames.finCapability.whatAppliesUploadedDocument]:
		finCapabilityValidations[
			fieldNames.finCapability.whatAppliesUploadedDocument
		],
	[fieldNames.finCapability.sourceOfFunds]:
		finCapabilityValidations[fieldNames.finCapability.sourceOfFunds],
});
export const mgtAndTechnicalCompetenciesDesc = z.object({
	[fieldNames.mgtAndTechnicalCompetencies.orgChart]:
		validations[fieldNames.mgtAndTechnicalCompetencies._][
			fieldNames.mgtAndTechnicalCompetencies.orgChart
		],
	[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]:
		validations[fieldNames.mgtAndTechnicalCompetencies._][
			fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo
		],
	[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]:
		validations[fieldNames.mgtAndTechnicalCompetencies._][
			fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment
		],
});
export const detailsOfExperienceDesc = z.object({
	[fieldNames.detailsOfExperience.companyExperience]:
		validations[fieldNames.detailsOfExperience._][
			fieldNames.detailsOfExperience.companyExperience
		],
	[fieldNames.detailsOfExperience.countries]:
		validations[fieldNames.detailsOfExperience._][
			fieldNames.detailsOfExperience.countries
		],
	/**[fieldNames.detailsOfExperience.contractsExecuted._]:
		validations[fieldNames.detailsOfExperience._][
			fieldNames.detailsOfExperience.contractsExecuted._
		],*/
});
export const orgDevProgramAndBudgetDesc = z.object({
	[fieldNames.orgDevProgramAndBudget.orgDevStrategy]: file,
	[fieldNames.orgDevProgramAndBudget.employmentPlan]: file,
	[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]: file,
	[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: file,
	[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]: file,
	[fieldNames.orgDevProgramAndBudget.expertise]: file,
	[fieldNames.orgDevProgramAndBudget.GIPCQuota]: file,
});
export const localContentDesc = localContentSchema;

export const healthSafetySecurityEnvDesc = z.object({
	[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: file,
});
export const declarationDesc = file;
export const miscFilesDesc = z
	.object({
		[fieldNames.miscFiles.certificateOfIncorporation]:
			getMiscFilesValidation(
				fieldNames.miscFiles.certificateOfIncorporation
			),
		[fieldNames.miscFiles.certificateToCommenceBusiness]:
			getMiscFilesValidation(
				fieldNames.miscFiles.certificateToCommenceBusiness
			),
		[fieldNames.miscFiles.companyRegulationsDocument]:
			getMiscFilesValidation(
				fieldNames.miscFiles.companyRegulationsDocument
			),
		[fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue]:
			getMiscFilesValidation(
				fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue
			),
		[fieldNames.miscFiles.validTaxClearanceCertificate]:
			getMiscFilesValidation(
				fieldNames.miscFiles.validTaxClearanceCertificate
			),
		[fieldNames.miscFiles.vatCertificate]: getMiscFilesValidation(
			fieldNames.miscFiles.vatCertificate
		),
		[fieldNames.miscFiles.validSSNITClearanceCertificate]:
			getMiscFilesValidation(
				fieldNames.miscFiles.validSSNITClearanceCertificate
			),
		[fieldNames.miscFiles.companyProfileAndBusinessPlan]:
			getMiscFilesValidation(
				fieldNames.miscFiles.companyProfileAndBusinessPlan
			),
		// [fieldNames.miscFiles.EPAPermit]: getMiscFilesValidation(
		// 	fieldNames.miscFiles.EPAPermit
		// ),
		// [fieldNames.miscFiles.airOperatorCertificate]: getMiscFilesValidation(
		// 	fieldNames.miscFiles.airOperatorCertificate
		// ),
		// [fieldNames.miscFiles.aviationLicense]: getMiscFilesValidation(
		// 	fieldNames.miscFiles.aviationLicense
		// ),
		// [fieldNames.miscFiles.fdaHygieneCertificate]: getMiscFilesValidation(
		// 	fieldNames.miscFiles.fdaHygieneCertificate
		// ),
		[fieldNames.miscFiles.copyOfApplicationPackReceipt]:
			getMiscFilesValidation(
				fieldNames.miscFiles.copyOfApplicationPackReceipt
			),
	})
	.superRefine((data, ctx) => {
		const { companyIsJointVenture } = data;

		/**
		 * if company is joint venture, then expect the jv file uploads to not be empty
		 */
	});
export const coverPageDesc = file;
export const checkListDesc = z
	.object({
		[fieldNames.checkList.coverPage]: mustBeTrue,
		[fieldNames.checkList.applicationForm]: mustBeTrue,
		[fieldNames.checkList.certificateOfIncorporation]: mustBeTrue,
		[fieldNames.checkList.certificateToCommenceBusiness]: mustBeTrue,
		[fieldNames.checkList.companyRegulations]: mustBeTrue,
		[fieldNames.checkList.signedHssePolicyAndObj]: mustBeTrue,
		[fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]:
			mustBeTrue,
		[fieldNames.checkList.validTaxClearanceCertificate]: z.boolean(),
		[fieldNames.checkList.vatCertificate]: z.boolean(),
		[fieldNames.checkList.originalSsnitClearanceCertificate]: z.boolean(),
		[fieldNames.checkList.companyProfileAndBusinessPlan]: mustBeTrue,
		[fieldNames.checkList.copyOfApplicationPackReceipt]: mustBeTrue,
		// [fieldNames.checkList.EPAPermit]: mustBeTrue,
		// [fieldNames.checkList.airOperatorCertificate]: mustBeTrue,
		// [fieldNames.checkList.aviationLicense]: mustBeTrue,
		// [fieldNames.checkList.fdaHygieneCertificate]: mustBeTrue,
	})
	.superRefine((data, ctx) => {
		const { companyIsJointVenture } = data;

		/**
		 * if company is joint venture, then expect
		 */
	});

const state = z
  .object({
    [fieldNames.corporateStructureAndServices._]:
      corporateStructureAndServicesDesc,

    [fieldNames.finCapability._]: financialCapabilityDesc,

    [fieldNames.mgtAndTechnicalCompetencies._]:
      mgtAndTechnicalCompetenciesDesc,

    [fieldNames.detailsOfExperience._]: detailsOfExperienceDesc,

    [fieldNames.orgDevProgramAndBudget._]: orgDevProgramAndBudgetDesc,

    [fieldNames.localContent._]: localContentSchema,

    [fieldNames.healthSafetySecurityEnv._]: healthSafetySecurityEnvDesc,

    [fieldNames.miscFiles._]: miscFilesDesc,

    [fieldNames.declaration]: declarationDesc,

    [fieldNames.coverPage]: coverPageDesc,

    [fieldNames.checkList._]: checkListDesc,
  });

export default state;
