import { fieldNames, PERMIT_CATEGORIES } from "../constants.mjs";

export const SUMMARY_EXPLANATIONS = {
  fix: 'Please fix the errors in the form',
  fill: 'Please fill in the required fields',
}

const DEFAULT_SUMMARY = {
  errorsExist: true,
  message: SUMMARY_EXPLANATIONS.fill,
}

const initialErrorState = {
  summary:DEFAULT_SUMMARY,

	// PAGE 1 - CORPORATE STRUCTURE AND SERVICES
  [fieldNames.corporateStructureAndServices._]: {
    summary: DEFAULT_SUMMARY,

		[fieldNames.corporateStructureAndServices.applicantName]: [],
		[fieldNames.corporateStructureAndServices.dateOfIncorporation]: [],
		[fieldNames.corporateStructureAndServices.placeOfIncorporation]: [],
		[fieldNames.corporateStructureAndServices.contactDetails._]: {
			[fieldNames.corporateStructureAndServices.contactDetails
				.officeAddress]: [],
			[fieldNames.corporateStructureAndServices.contactDetails
				.postalAddress]: [],
			[fieldNames.corporateStructureAndServices.contactDetails.city]: [],
			[fieldNames.corporateStructureAndServices.contactDetails.region]:
				[],
			[fieldNames.corporateStructureAndServices.contactDetails.country]:
				[],
		},
		[fieldNames.corporateStructureAndServices.emailAddress]: [],
		[fieldNames.corporateStructureAndServices.website]: [],
		[fieldNames.corporateStructureAndServices.contactPerson._]: {
			[fieldNames.corporateStructureAndServices.contactPerson.name]: [],
			[fieldNames.corporateStructureAndServices.contactPerson
				.mobileNumber]: [],
    },
    
		[fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
			[],
		[fieldNames.corporateStructureAndServices.nationalityOfAffiliate]: [],
		[fieldNames.corporateStructureAndServices.permitCategory]:
			PERMIT_CATEGORIES.general,
		[fieldNames.corporateStructureAndServices.shareholders._]: [
			{
				[fieldNames.corporateStructureAndServices.shareholders.name]:
					[],
				[fieldNames.corporateStructureAndServices.shareholders.address]:
					[],
				[fieldNames.corporateStructureAndServices.shareholders
					.nationality]: [],
				[fieldNames.corporateStructureAndServices.shareholders
					.percentage]: [],
				[fieldNames.corporateStructureAndServices.shareholders
					.isEditing]: true,
			},
		],
		[fieldNames.corporateStructureAndServices.beneficial._]: [
			{
				[fieldNames.corporateStructureAndServices.beneficial.name]: [],
				[fieldNames.corporateStructureAndServices.beneficial.address]:
					[],
				[fieldNames.corporateStructureAndServices.beneficial
					.nationality]: [],
				[fieldNames.corporateStructureAndServices.beneficial
					.percentage]: [],
				[fieldNames.corporateStructureAndServices.beneficial
					.isEditing]: true,
			},
		],
		[fieldNames.corporateStructureAndServices.executiveDirectors]: [],
		[fieldNames.corporateStructureAndServices.activities]: [],
		[fieldNames.corporateStructureAndServices.corporateStructure]: [],
		[fieldNames.corporateStructureAndServices.description]: [],
	},
	// PART 2

	// financial capability
	[fieldNames.finCapability._]: {
		[fieldNames.finCapability.whatApplies]: [],
		[fieldNames.finCapability.whatAppliesUploadedDocument]: [],
		[fieldNames.finCapability.sourceOfFunds]: [],
	},

	// management and technical competencies
	[fieldNames.mgtAndTechnicalCompetencies._]: {
		[fieldNames.mgtAndTechnicalCompetencies.orgChart]: [],
		[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]: [],
		[fieldNames.mgtAndTechnicalCompetencies.requiredExpertise]: [],
		[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]: [],
	},

	// C. DETAILS OF EXPERIENCE
	[fieldNames.detailsOfExperience._]: {
		[fieldNames.detailsOfExperience.companyExperience]: [],
		[fieldNames.detailsOfExperience.countries]: [],
		[fieldNames.detailsOfExperience.contractsExecuted._]: [
			{
				[fieldNames.detailsOfExperience.contractsExecuted
					.isEditing]: true,
				[fieldNames.detailsOfExperience.contractsExecuted
					.descriptionOfContract]: [],
				[fieldNames.detailsOfExperience.contractsExecuted
					.nameOfCompanyWorkWasDoneFor]: [],
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractDuration]: [],
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractValue]: [],
			},
		],
	},

	// part 3 - plans and programmes
	// organisational development programme and budget
	[fieldNames.orgDevProgramAndBudget._]: {
		[fieldNames.orgDevProgramAndBudget.orgDevStrategy]: [],
		[fieldNames.orgDevProgramAndBudget.employmentPlan]: [],
		[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]: [],
		[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: [],
		[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]: [],
	},

	// local content
	[fieldNames.localContent._]: {
		[fieldNames.localContent.percentageOfGhanaianParticipation]: [],
		[fieldNames.localContent.ghanaianMgtStaffBreakdown]: [],
		[fieldNames.localContent.foreignMgtStaffBreakdown]: [],
		[fieldNames.localContent.totalMgtStaffBreakdown]: [],
		[fieldNames.localContent.ghanaianOtherStaffBreakdown]: [],
		[fieldNames.localContent.foreignOtherStaffBreakdown]: [],
		[fieldNames.localContent.totalOtherStaffBreakdown]: [],
		[fieldNames.localContent.infraExpenditure]: [],
		[fieldNames.localContent.rawMaterials]: [],
		[fieldNames.localContent.ghanaianFinishedGoods]: [],
		[fieldNames.localContent.valueOfServiceProvided._]: [
			{
				[fieldNames.localContent.valueOfServiceProvided.isEditing]: [],
				[fieldNames.localContent.valueOfServiceProvided.typeOfService]:
					[],
				[fieldNames.localContent.valueOfServiceProvided.contractSum]:
					[],
				[fieldNames.localContent.valueOfServiceProvided
					.nameOfClientCompany]: [],
			},
		],
		[fieldNames.localContent.valueOfServiceReceived._]: [
			{
				[fieldNames.localContent.valueOfServiceReceived.isEditing]: [],
				[fieldNames.localContent.valueOfServiceReceived.typeOfService]:
					[],
				[fieldNames.localContent.valueOfServiceReceived.contractSum]:
					[],
				[fieldNames.localContent.valueOfServiceReceived
					.nameOfClientCompany]: [],
			},
		],
	},

	[fieldNames.healthSafetySecurityEnv._]: {
		[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: [],
	},

	[fieldNames.miscFiles]: [],

	// applicant declaration
	[fieldNames.declaration]: "",

	// cover page
	[fieldNames.coverPage]: [],

	// checklist
	[fieldNames.checkList._]: {
		[fieldNames.checkList.coverPage]: false,
		[fieldNames.checkList.applicationForm]: false,
		[fieldNames.checkList.certificateOfIncorporation]: false,
		[fieldNames.checkList.certificateToCommenceBusiness]: false,
		[fieldNames.checkList.companyRegulations]: false,
		[fieldNames.checkList.signedHssePolicyAndObj]: false,
		[fieldNames.checkList
			.currentAuditedFinReportsOrProjectedRevenue]: false,
		[fieldNames.checkList.validTaxClearanceCertificate]: false,
		[fieldNames.checkList.vatCertificate]: false,
		[fieldNames.checkList.originalSsnitClearanceCertificate]: false,
		[fieldNames.checkList.companyProfileAndBusinessPlan]: false,
		[fieldNames.checkList.copiesOfOtherRegulatoryCerts]: false,
		[fieldNames.checkList.copyOfApplicationPackReceipt]: false,
	},
};

export default initialErrorState;