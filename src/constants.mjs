import {
	localContentFieldNames,
	localContentInitialErrorState,
	localContentInitialState,
} from "./helpers/localContent/index.js";

export const FIN_CAPABILITY_WHAT_APPLIES_OPTIONS = {
	upstreamPetroleumIndustryOnly: "upstreamPetroleumIndustryOnly",
	upstreamPetroleumIndustryAndOtherSectors:
		"upstreamPetroleumIndustryAndOtherSectors",
	existingButNewToUpstreamPetroleumIndustry:
		"existingButNewToUpstreamPetroleumIndustry",
	newlyIncorporated: "newlyIncorporated",
};

// creating these so that they can be shared between miscFiles and checklist names
const hssePolicyAndObj = "hsePolicyAndObj";
const certificateOfIncorporation = "certificateOfIncorporation";
const certificateToCommenceBusiness = "certificateToCommenceBusiness";
const companyRegulationsDocument = "companyRegulationsDocument";
const currentAuditedFinReportsOrProjectedRevenue =
	"currentAuditedFinReportsOrProjectedRevenue";
const validTaxClearanceCertificate = "validTaxClearanceCertificate";
const vatCertificate = "vatCertificate";
const validSSNITClearanceCertificate = "validSSNITClearanceCertificate";
const companyProfileAndBusinessPlan = "companyProfileAndBusinessPlan";
const epaPermit = "epaPermit";
const airOperatorCertificate = "airOperatorCertificate";
const aviationLicense = "aviationLicense";
const fdaHygieneCertificate = "fdaHygieneCertificate";
const copyOfApplicationPackReceipt = "copyOfApplicationPackReceipt";
const coverPage = "coverPage";

export const fieldNames = {
	// PAGE 1 - CORPORATE STRUCTURE AND SERVICES
	corporateStructureAndServices: {
		_: "corporateStructureAndServices",
		applicantName: "applicantName",
		dateOfIncorporation: "dateOfIncorporation",
		placeOfIncorporation: "placeOfIncorporation",
		contactDetails: {
			_: "contactDetails",
			officeAddress: "officeAddress",
			postalAddress: "postalAddress",
			city: "city",
			region: "region",
			country: "country",
			GHpost: "GHpost",
		},
		emailAddress: "emailAddress",
		website: "website",

		//made some change here
		contactPerson: {
			_: "contactPerson",
			name: "name",
			mobileNumber: "mobileNumber",
			email: "email",
			isEditing: "isEditing",
		},

		nameOfSubsidiaryOrAffiliate: "nameOfSubsidiaryOrAffiliate",
		nationalityOfAffiliate: "nationalityOfAffiliate",
		permitCategory: "permitCategory",
		shareholders: {
			_: "shareholders",
			name: "name",
			address: "address",
			nationality: "nationality",
			percentage: "percentage",
			isEditing: "isEditing",
		},
		beneficial: {
			_: "beneficial",
			name: "name",
			address: "address",
			nationality: "nationality",
			percentage: "percentage",
			isEditing: "isEditing",
		},
		executiveDirectors: {
			_: "executiveDirectors",
			name: "name",
			email: "email",
			contact: "contact",
			nationality: "nationality",
      position: "position",
      occupation: "occupation",
		},
		activities: "activities",
		corporateStructure: "corporateStructure",
		description: "description",
	},
	// PART 2 - financial capability
	finCapability: {
		_: "financialCapability",
		whatApplies: "whatApplies",
		whatAppliesUploadedDocument: "uploadedDocument",
		sourceOfFunds: "sourceOfFunds",
	},

	// management and technical competencies
	mgtAndTechnicalCompetencies: {
		_: "mgtAndTechnicalCompetencies",
		orgChart: "orgChart",
		detailedStaffInfo: "detailedStaffInfo",
		requiredExpertise: "requiredExpertise",
		sourcesOfEquipment: "sourcesOfEquipment",
	},

	detailsOfExperience: {
		_: "detailsOfExperience",
		companyExperience: "companyExperience",
		countries: "countries",
		contractsExecuted: {
			_: "contractsExecuted",
			isEditing: "isEditing",
			descriptionOfContract: "descriptionOfContract",
			nameOfCompanyWorkWasDoneFor: "nameOfCompanyWorkWasDoneFor",
			contractDuration: "contractDuration",
			contractValue: "contractValue",
		},
	},

	// part 3
	// organisational development programme and budget
	orgDevProgramAndBudget: {
		_: "orgDevProgramAndBudget",
		orgDevStrategy: "orgDevStrategy",
		employmentPlan: "employmentPlan",
		expertise: "expertise",
		GIPCQuota: "GIPCQuota",
		techTransferProgramAndBudget: "techTransferProgramAndBudget",
		trainingProgramAndBudget: "trainingProgramAndBudget",
		csrAndSocialDevProgramAndBudget: "scrAndSocialDevProgramAndBudget",
	},

	// local content
	localContent: localContentFieldNames,

	// healthSafetySecurityEnv
	healthSafetySecurityEnv: {
		_: "healthSafetySecurityEnv",
		hssePolicyAndObj: hssePolicyAndObj,
	},

	// misc files
	miscFiles: {
		_: "miscFiles",
		certificateOfIncorporation: certificateOfIncorporation,
		certificateToCommenceBusiness: certificateToCommenceBusiness,
		companyRegulationsDocument: companyRegulationsDocument,
		signedHSSEPolicyAndObj: hssePolicyAndObj,
		currentAuditedFinReportsOrProjectedRevenue:
			currentAuditedFinReportsOrProjectedRevenue,
		validTaxClearanceCertificate: validTaxClearanceCertificate,
		vatCertificate: vatCertificate,
		validSSNITClearanceCertificate: validSSNITClearanceCertificate,
		companyProfileAndBusinessPlan: companyProfileAndBusinessPlan,
		EPAPermit: epaPermit,
		airOperatorCertificate: airOperatorCertificate,
		aviationLicense: aviationLicense,
		fdaHygieneCertificate: fdaHygieneCertificate,
		copyOfApplicationPackReceipt: copyOfApplicationPackReceipt,
	},
	// applicant declaration
	declaration: "declaration",

	// cover page
	coverPage: coverPage,

	// checklist
	checkList: {
		_: "checkList",
		coverPage: coverPage,
		applicationForm: "applicationForm",
		certificateOfIncorporation: certificateOfIncorporation,
		certificateToCommenceBusiness: certificateToCommenceBusiness,
		companyRegulations: companyRegulationsDocument,
		signedHssePolicyAndObj: hssePolicyAndObj,
		currentAuditedFinReportsOrProjectedRevenue:
			currentAuditedFinReportsOrProjectedRevenue,
		validTaxClearanceCertificate: validTaxClearanceCertificate,
		vatCertificate: vatCertificate,
		originalSsnitClearanceCertificate: validSSNITClearanceCertificate,
		companyProfileAndBusinessPlan: companyProfileAndBusinessPlan,
		EPAPermit: epaPermit,
		airOperatorCertificate: airOperatorCertificate,
		aviationLicense: aviationLicense,
		fdaHygieneCertificate: fdaHygieneCertificate,
		copyOfApplicationPackReceipt: copyOfApplicationPackReceipt,
	},
};

export const PERMIT_CATEGORIES = {
	specialised: "specialized",
	general: "general",
};

export const initialErrorState = {
	summary: {
		page2: false,
		page3: false,
		page4: false,
		page5: false,
		page6: false,
		page7: false,
	},
	// PAGE 1 - CORPORATE STRUCTURE AND SERVICES
	[fieldNames.corporateStructureAndServices._]: {
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
			[fieldNames.corporateStructureAndServices.contactDetails.GHpost]:
				[],
		},

		[fieldNames.corporateStructureAndServices.emailAddress]: [],
		[fieldNames.corporateStructureAndServices.website]: [],

		//made some change here
		[fieldNames.corporateStructureAndServices.contactPerson._]: [
			{
				[fieldNames.corporateStructureAndServices.contactPerson.name]:
					[],
				[fieldNames.corporateStructureAndServices.contactPerson
					.mobileNumber]: [],
				[fieldNames.corporateStructureAndServices.contactPerson.email]:
					[],
				[fieldNames.corporateStructureAndServices.contactPerson
					.isEditing]: true,
			},
		],

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
		[fieldNames.corporateStructureAndServices.executiveDirectors._]: [
			{
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.contact]: [],
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.name]: [],
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.email]: [],
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.nationality]: [],
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.position]: [],
			},
		],
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
		[fieldNames.orgDevProgramAndBudget.expertise]: [],
		[fieldNames.orgDevProgramAndBudget.GIPCQuota]: [],
		[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]: [],
		[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: [],
		[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]: [],
	},

	// local content
	[fieldNames.localContent._]: localContentInitialErrorState,

	[fieldNames.healthSafetySecurityEnv._]: {
		[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: [],
	},

	[fieldNames.miscFiles._]: {
		[fieldNames.miscFiles.certificateOfIncorporation]: [],
		[fieldNames.miscFiles.certificateToCommenceBusiness]: [],
		[fieldNames.miscFiles.companyRegulationsDocument]: [],
		[fieldNames.miscFiles.signedHSSEPolicyAndObj]: [],
		[fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue]: [],
		[fieldNames.miscFiles.validTaxClearanceCertificate]: [],
		[fieldNames.miscFiles.vatCertificate]: [],
		[fieldNames.miscFiles.validSSNITClearanceCertificate]: [],
		[fieldNames.miscFiles.companyProfileAndBusinessPlan]: [],
		[fieldNames.miscFiles.EPAPermit]: [],
		[fieldNames.miscFiles.airOperatorCertificate]: [],
		[fieldNames.miscFiles.aviationLicense]: [],
		[fieldNames.miscFiles.fdaHygieneCertificate]: [],
		[fieldNames.miscFiles.copyOfApplicationPackReceipt]: [],
	},

	// applicant declaration
	[fieldNames.declaration]: [],

	// cover page
	[fieldNames.coverPage]: [],

	// checklist
	[fieldNames.checkList._]: {
		[fieldNames.checkList.coverPage]: [],
		[fieldNames.checkList.applicationForm]: [],
		[fieldNames.checkList.certificateOfIncorporation]: [],
		[fieldNames.checkList.certificateToCommenceBusiness]: [],
		[fieldNames.checkList.companyRegulations]: [],
		[fieldNames.checkList.signedHssePolicyAndObj]: [],
		[fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]: [],
		[fieldNames.checkList.validTaxClearanceCertificate]: [],
		[fieldNames.checkList.vatCertificate]: [],
		[fieldNames.checkList.originalSsnitClearanceCertificate]: [],
		[fieldNames.checkList.companyProfileAndBusinessPlan]: [],
		[fieldNames.checkList.epaPermit]: [],
		[fieldNames.checkList.airOperatorCertificate]: [],
		[fieldNames.checkList.aviationLicense]: [],
		[fieldNames.checkList.fdaHygieneCertificate]: [],
		[fieldNames.checkList.copyOfApplicationPackReceipt]: [],
	},
};

export const initialState = {
	// PAGE 1 - CORPORATE STRUCTURE AND SERVICES
	[fieldNames.corporateStructureAndServices._]: {
		[fieldNames.corporateStructureAndServices.applicantName]: "",
		[fieldNames.corporateStructureAndServices.dateOfIncorporation]: "",
		[fieldNames.corporateStructureAndServices.placeOfIncorporation]: "",
		[fieldNames.corporateStructureAndServices.contactDetails._]: {
			[fieldNames.corporateStructureAndServices.contactDetails
				.officeAddress]: "",
			[fieldNames.corporateStructureAndServices.contactDetails
				.postalAddress]: "",
			// [fieldNames.corporateStructureAndServices.contactDetails.city]: "",
			// [fieldNames.corporateStructureAndServices.contactDetails.region]:
			// 	"",
			// [fieldNames.corporateStructureAndServices.contactDetails.country]:
			// "",
			[fieldNames.corporateStructureAndServices.contactDetails.GHpost]:
				"",
		},
		[fieldNames.corporateStructureAndServices.emailAddress]: "",
		[fieldNames.corporateStructureAndServices.website]: "",

		//some change here too
		[fieldNames.corporateStructureAndServices.contactPerson._]: [
			{
				[fieldNames.corporateStructureAndServices.contactPerson.name]:
					"",
				[fieldNames.corporateStructureAndServices.contactPerson
					.mobileNumber]: "",
				[fieldNames.corporateStructureAndServices.contactPerson.email]:
					"",
				[fieldNames.corporateStructureAndServices.contactPerson
					.isEditing]: true,
			},
		],

		[fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
			"",
		[fieldNames.corporateStructureAndServices.nationalityOfAffiliate]: "",
		[fieldNames.corporateStructureAndServices.permitCategory]:
			PERMIT_CATEGORIES.general,
		[fieldNames.corporateStructureAndServices.shareholders._]: [
			{
				[fieldNames.corporateStructureAndServices.shareholders.name]:
					"",
				[fieldNames.corporateStructureAndServices.shareholders.address]:
					"",
				[fieldNames.corporateStructureAndServices.shareholders
					.nationality]: "",
				[fieldNames.corporateStructureAndServices.shareholders
					.percentage]: "",
				[fieldNames.corporateStructureAndServices.shareholders
					.isEditing]: true,
			},
		],
		[fieldNames.corporateStructureAndServices.beneficial._]: [
			{
				[fieldNames.corporateStructureAndServices.beneficial.name]: "",
				[fieldNames.corporateStructureAndServices.beneficial.address]:
					"",
				[fieldNames.corporateStructureAndServices.beneficial
					.nationality]: "",
				[fieldNames.corporateStructureAndServices.beneficial
					.percentage]: "",
				[fieldNames.corporateStructureAndServices.beneficial
					.isEditing]: true,
			},
		],
		[fieldNames.corporateStructureAndServices.executiveDirectors._]: [
			{
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.contact]: "",
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.name]: "",
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.email]: "",
				[fieldNames.corporateStructureAndServices.executiveDirectors
          .nationality]: "",
        occupation: "",
				[fieldNames.corporateStructureAndServices.executiveDirectors
					.position]: "",
				isEditing: true,
			},
		],
		[fieldNames.corporateStructureAndServices.activities]: [],
		[fieldNames.corporateStructureAndServices.corporateStructure]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.corporateStructureAndServices.description]: "",
	},
	// PART 2

	// financial capability
	[fieldNames.finCapability._]: {
		//todo: the default value for this line below should be ""
		[fieldNames.finCapability.whatApplies]:
			FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.newlyIncorporated,
		[fieldNames.finCapability.whatAppliesUploadedDocument]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.finCapability.sourceOfFunds]: "",
	},

	// management and technical competencies
	[fieldNames.mgtAndTechnicalCompetencies._]: {
		[fieldNames.mgtAndTechnicalCompetencies.orgChart]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.mgtAndTechnicalCompetencies.requiredExpertise]: "",
		[fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment]: "",
	},

	// C. DETAILS OF EXPERIENCE
	[fieldNames.detailsOfExperience._]: {
		[fieldNames.detailsOfExperience.companyExperience]: "",
		[fieldNames.detailsOfExperience.countries]: "",
		[fieldNames.detailsOfExperience.contractsExecuted._]: [
			{
				[fieldNames.detailsOfExperience.contractsExecuted
					.isEditing]: true,
				[fieldNames.detailsOfExperience.contractsExecuted
					.descriptionOfContract]: "",
				[fieldNames.detailsOfExperience.contractsExecuted
					.nameOfCompanyWorkWasDoneFor]: "",
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractDuration]: "",
				[fieldNames.detailsOfExperience.contractsExecuted
					.contractValue]: "",
			},
		],
	},

	// part 3 - plans and programmes
	// organisational development programme and budget
	[fieldNames.orgDevProgramAndBudget._]: {
		[fieldNames.orgDevProgramAndBudget.orgDevStrategy]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.orgDevProgramAndBudget.employmentPlan]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.orgDevProgramAndBudget.expertise]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.orgDevProgramAndBudget.GIPCQuota]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: [
			{
				fileName: "",
				file: "",
			},
		],
		[fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]: [
			{
				fileName: "",
				file: "",
			},
		],
	},

	// local content
	[fieldNames.localContent._]: localContentInitialState,

	[fieldNames.healthSafetySecurityEnv._]: {
		[fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: [
			{ fileName: "", file: "" },
		],
	},

	[fieldNames.miscFiles._]: {
		[fieldNames.miscFiles.certificateOfIncorporation]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.certificateToCommenceBusiness]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.companyRegulationsDocument]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.signedHSSEPolicyAndObj]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.validTaxClearanceCertificate]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.vatCertificate]: [{ fileName: "", file: "" }],
		[fieldNames.miscFiles.validSSNITClearanceCertificate]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.companyProfileAndBusinessPlan]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.EPAPermit]: [{ fileName: "", file: "" }],
		[fieldNames.miscFiles.airOperatorCertificate]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.aviationLicense]: [{ fileName: "", file: "" }],
		[fieldNames.miscFiles.fdaHygieneCertificate]: [
			{ fileName: "", file: "" },
		],
		[fieldNames.miscFiles.copyOfApplicationPackReceipt]: [
			{ fileName: "", file: "" },
		],
	},

	// applicant declaration
	[fieldNames.declaration]: [{ fileName: "", file: "" }],

	// cover page
	[fieldNames.coverPage]: [{ fileName: "", file: "" }],

	// checklist
	[fieldNames.checkList._]: {
		[fieldNames.checkList.coverPage]: false,
		[fieldNames.checkList.applicationForm]: true,
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
		[fieldNames.checkList.EPAPermit]: false,
		[fieldNames.checkList.airOperatorCertificate]: false,
		[fieldNames.checkList.aviationLicense]: false,
		[fieldNames.checkList.fdaHygieneCertificate]: false,
		[fieldNames.checkList.copyOfApplicationPackReceipt]: false,
	},
};

export const permitCategoryOptions = {
	specialised: [
		{ label: "Aviation Support Services", name: "aviationSupportServices" },
		{ label: "Calibration Services", name: "calibrationServices" },
		{ label: "Data Measurement Services", name: "dataMeasurementServices" },
		{
			label: "Diving and Hyperbaric Services",
			name: "divingAndHyperbaricServices",
		},
		{ label: "Dredging Services", name: "dredgingServices" },
		{
			label: "Drilling / Production Services",
			name: "drillingOrProductionServices",
		},
		{ label: "Environmental Services", name: "environmentalServices" },
		{
			label: "Exploration Seration Serrvices",
			name: "explorationServices",
		},
		{
			label: "Installation Services / Marine Contracting",
			name: "installationServicesAndMarineContracting",
		},
		{ label: "Integrated Services", name: "integratedServices" },
		{
			label: "Integrity Test and Inspection Services",
			name: "integrityTestAndInspectionServices",
		},
		{ label: "Laboratory Services", name: "laboratoryServices" },
		{
			label: "Major Construction Services",
			name: "majorConstructionServices",
		},
		{ label: "Marine Support Services", name: "marineSupportServices" },
		{
			label: "Onshore / Offshore Pipeline Services",
			name: "onshoreAndOffshorePipelineServices",
		},
		{
			label: "Research and Development Services",
			name: "researchAndDevelopmentServices",
		},
		{ label: "Rope Access", name: "ropeAccess" },
		{ label: "Special Transportation", name: "specialTransportation" },
		{
			label: "Surveying / Positioning Services",
			name: "surveyingAndPositioningServices",
		},
		{ label: "Technical Consultancy", name: "technicalConsultancy" },
		{ label: "Waste Management Services", name: "wasteManagementServices" },
	],
	general: [
		{ label: "Automobile Services", name: "automobileServices" },
		{
			label: "Banking / Financial Services",
			name: "bankingAndFinancialServices",
		},
		{
			label: "Construction / Rehabilitation / Fabrication works",
			name: "constructionAndRehabilitationAndFabricationWorks",
		},
		{
			label: "Equipment / Material Supply Services",
			name: "equipmentAndMaterialSupplyServices",
		},
		{
			label: "General Consultancy Services",
			name: "generalConsultancyServices",
		},
		{
			label: "Haulage / Freight / Clearing and Forwarding (International / Domestic)",
			name: "haulageAndFreightAndClearingAndForwarding",
		},
		{
			label: "Heavy Duty Equipment Supply",
			name: "heavyDutyEquipmentSupply",
		},
		{
			label: "Hospital / Medical Services",
			name: "hospitalAndMedicalServices",
		},
		{
			label: "Information Technology / Communication Services",
			name: "informationTechnologyAndCommunicationServices",
		},
		{ label: "Insurance Services", name: "insuranceServices" },
		{ label: "Maintenance", name: "maintenance" },
		{ label: "Manpower Supply", name: "manpowerSupply" },
		{ label: "Printing Services", name: "printingServices" },
		{
			label: "Protocol and Logistics Services",
			name: "protocolAndLogisticsServices",
		},
		{ label: "Sanitation", name: "sanitation" },
		{
			label: "Supply of Petroleum Products",
			name: "supplyOfPetroleumProducts",
		},
		{ label: "Water Borehole Services", name: "waterBoreholeServices" },
		{ label: "Works", name: "works" },
	],
};

export const financialCapabilityOptions = [
	{
		value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.newlyIncorporated,
		text: `Newly incorporated company: Provide a three-year projected revenue for intended upstream oil and gas activities.`,
	},
	{
		value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.upstreamPetroleumIndustryOnly,
		text: `Companies already operating solely in the upstream petroleum industry: Provide Audited Financial Reports for the previous financial year.`,
	},
	{
		value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.upstreamPetroleumIndustryAndOtherSectors,
		text: `Companies which undertake services in the upstream petroleum industry and other sectors:  Provide Audited Financial Reports for the past year, and letter from your Auditors showing applicant’s upstream oil and gas revenue for the past year.`,
	},
	{
		value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.existingButNewToUpstreamPetroleumIndustry,
		text: `For existing companies which are new to the upstream petroleum industry (ie. Companies which have never executed a contract or purchase order in the upstream petroleum industry): Provide Audited Financial Report for the past year and a three-year projected revenue for intended upstream oil and gas activities.`,
	},
];
