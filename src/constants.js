export const FIN_CAPABILITY_WHAT_APPLIES_OPTIONS = {
  upstreamPetroleumIndustryOnly: "upstreamPetroleumIndustryOnly",
  upstreamPetroleumIndustryAndOtherSectors:
    "upstreamPetroleumIndustryAndOtherSectors",
  existingButNewToUpstreamPetroleumIndustry:
    "existingButNewToUpstreamPetroleumIndustry",
  newlyIncorporated: "newlyIncorporated",
};

export const fieldNames = {
  // PAGE 1 - CORPORATE STRUCTURE AND SERVICES
  corporateStructureAndServices: {
    _: "corporateStructureAndServices",
    applicantName: 'applicantName',
    dateOfIncorporation: 'dateOfIncorporation',
    placeOfIncorporation: 'placeOfIncorporation',
    contactDetails: {
      _: "contactDetails",
      officeAddress: "officeAddress",
      postalAddress: "postalAddress",
      city: "city",
      region: "region",
      country: "country",
    },
    emailAddress: "emailAddress",
    website: "website",
    contactPerson: {
      _: "contactPerson",
      name: "name",
      mobileNumber: "mobileNumber",
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
    executiveDirectors: "executiveDirectors",
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
    techTransferProgramAndBudget: "techTransferProgramAndBudget",
    trainingProgramAndBudget: "trainingProgramAndBudget",
    csrAndSocialDevProgramAndBudget: "scrAndSocialDevProgramAndBudget",
  },

  // local content
  localContent: {
    _: "localContent",
    percentageOfGhanaianParticipation: "percentageOfGhanaianParticipation",
    ghanaianMgtStaffBreakdown: "ghanaianMgtStaffBreakdown",
    foreignMgtStaffBreakdown: "foreignMgtStaffBreakdown",
    ghanaianOtherStaffBreakdown: "ghanaianOtherStaffBreakdown",
    foreignOtherStaffBreakdown: "foreignOtherStaffBreakdown",
    totalMgtStaffBreakdown: "totalMgtStaffBreakdown",
    totalOtherStaffBreakdown: "totalOtherStaffBreakdown",
    infraExpenditure: "infraExpenditure",
    valueOfServiceProvided: {
      _: "valueOfServiceProvided",
      isEditing: "isEditing",
      typeOfService: "typeOfService",
      contractSum: "contractSum",
      nameOfClientCompany: "nameOfClientCompany",
    },
    valueOfServiceReceived: {
      _: "valueOfServiceReceived",
      isEditing: "isEditing",
      typeOfService: "typeOfService",
      contractSum: "contractSum",
      nameOfClientCompany: "nameOfClientCompany",
    },
    rawMaterials: "rawMaterials",
    ghanaianFinishedGoods: 'ghanaianFinishedGoods',
  },

  // healthSafetySecurityEnv
  healthSafetySecurityEnv: {
    _: "healthSafetySecurityEnv",
    hssePolicyAndObj: "hssePolicyAndObj",
  },

  // misc files
  miscFiles: 'miscFiles',

  // applicant declaration
  declaration: {
    _: 'declaration',
    name: 'name',
    position: 'position',
    signature: 'signature',
    date: 'date',

  },

  // cover page
  coverPage: 'coverPage',

  // checklist
  checkList: {
    _: 'checkList',
    coverPage: 'coverPage',
    applicationForm: 'applicationForm',
    certificateOfIncorporation: 'certificateOfIncorporation',
    certificateToCommenceBusiness: 'certificateToCommenceBusiness',
    companyRegulations: 'companyRegulations',
    signedHssePolicyAndObj: 'signedHssePolicyAndObj',
    currentAuditedFinReportsOrProjectedRevenue: 'currentAuditedFinReportsOrProjectedRevenue',
    validTaxClearanceCertificate: 'validTaxClearanceCertificate',
    vatCertificate: 'vatCertificate',
    originalSsnitClearanceCertificate: 'originalSsnitClearanceCertificate',
    somethingImportantThatsMissing: 'somethingImportantThatsMissing',
    copiesOfOtherRegulatoryCerts: 'copiesOfOtherRegulatoryCerts',
    copyOfApplicationPackReceipt: 'copyOfApplicationPackReceipt',
  }
};

export const PERMIT_CATEGORIES = {
  specialised: "specialized",
  general: "general",
};

export const NEW_VALUE_OF_SERVICE = {
  [fieldNames.localContent.valueOfServiceProvided.isEditing]: true,
  [fieldNames.localContent.valueOfServiceProvided.typeOfService]: "",
  [fieldNames.localContent.valueOfServiceProvided.contractSum]: "",
  [fieldNames.localContent.valueOfServiceProvided.nameOfClientCompany]: "",
};

export const initialErrorState = {
  // PAGE 1 - CORPORATE STRUCTURE AND SERVICES
  [fieldNames.corporateStructureAndServices._]: {
    [fieldNames.corporateStructureAndServices.applicantName]: [],
    [fieldNames.corporateStructureAndServices.dateOfIncorporation]: [],
    [fieldNames.corporateStructureAndServices.placeOfIncorporation]: [],
    [fieldNames.corporateStructureAndServices.contactDetails._]: {
      [fieldNames.corporateStructureAndServices.contactDetails.officeAddress]: [],
      [fieldNames.corporateStructureAndServices.contactDetails.postalAddress]: [],
      [fieldNames.corporateStructureAndServices.contactDetails.city]: [],
      [fieldNames.corporateStructureAndServices.contactDetails.region]: [],
      [fieldNames.corporateStructureAndServices.contactDetails.country]: [],
    },
    [fieldNames.corporateStructureAndServices.emailAddress]: [],
    [fieldNames.corporateStructureAndServices.website]: [],
    [fieldNames.corporateStructureAndServices.contactPerson._]: {
      [fieldNames.corporateStructureAndServices.contactPerson.name]: [],
      [fieldNames.corporateStructureAndServices.contactPerson.mobileNumber]: [],
    },

    [fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]: [],
    [fieldNames.corporateStructureAndServices.nationalityOfAffiliate]: [],
    [fieldNames.corporateStructureAndServices.permitCategory]: PERMIT_CATEGORIES.general,
    [fieldNames.corporateStructureAndServices.shareholders._]: [
      {
        [fieldNames.corporateStructureAndServices.shareholders.name]: [],
        [fieldNames.corporateStructureAndServices.shareholders.address]: [],
        [fieldNames.corporateStructureAndServices.shareholders.nationality]: [],
        [fieldNames.corporateStructureAndServices.shareholders.percentage]: [],
        [fieldNames.corporateStructureAndServices.shareholders.isEditing]: true,
      },
    ],
    [fieldNames.corporateStructureAndServices.beneficial._]: [
      {
        [fieldNames.corporateStructureAndServices.beneficial.name]: [],
        [fieldNames.corporateStructureAndServices.beneficial.address]: [],
        [fieldNames.corporateStructureAndServices.beneficial.nationality]: [],
        [fieldNames.corporateStructureAndServices.beneficial.percentage]: [],
        [fieldNames.corporateStructureAndServices.beneficial.isEditing]: true,
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
        [fieldNames.localContent.valueOfServiceProvided
          .isEditing]: [],
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
        [fieldNames.localContent.valueOfServiceReceived
          .isEditing]: [],
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
  [fieldNames.declaration._]: {
    [fieldNames.declaration.name]: [],
    [fieldNames.declaration.position]: [],
    [fieldNames.declaration.signature]: [],
    [fieldNames.declaration.date]: [],
  },

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
    [fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]: false,
    [fieldNames.checkList.validTaxClearanceCertificate]: false,
    [fieldNames.checkList.vatCertificate]: false,
    [fieldNames.checkList.originalSsnitClearanceCertificate]: false,
    [fieldNames.checkList.somethingImportantThatsMissing]: false,
    [fieldNames.checkList.copiesOfOtherRegulatoryCerts]: false,
    [fieldNames.checkList.copyOfApplicationPackReceipt]: false,
  }
};

export const initialState = {
  // PAGE 1 - CORPORATE STRUCTURE AND SERVICES
  [fieldNames.corporateStructureAndServices._]: {

    [fieldNames.corporateStructureAndServices.applicantName]: "",
    [fieldNames.corporateStructureAndServices.dateOfIncorporation]: "",
    [fieldNames.corporateStructureAndServices.placeOfIncorporation]: "",
    [fieldNames.corporateStructureAndServices.contactDetails._]: {
      [fieldNames.corporateStructureAndServices.contactDetails.officeAddress]: "",
      [fieldNames.corporateStructureAndServices.contactDetails.postalAddress]: "",
      [fieldNames.corporateStructureAndServices.contactDetails.city]: "",
      [fieldNames.corporateStructureAndServices.contactDetails.region]: "",
      [fieldNames.corporateStructureAndServices.contactDetails.country]: "",
    },
    [fieldNames.corporateStructureAndServices.emailAddress]: "",
    [fieldNames.corporateStructureAndServices.website]: "",
    [fieldNames.corporateStructureAndServices.contactPerson._]: {
      [fieldNames.corporateStructureAndServices.contactPerson.name]: "",
      [fieldNames.corporateStructureAndServices.contactPerson.mobileNumber]: "",
    },

    [fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]: "",
    [fieldNames.corporateStructureAndServices.nationalityOfAffiliate]: "",
    [fieldNames.corporateStructureAndServices.permitCategory]: PERMIT_CATEGORIES.general,
    [fieldNames.corporateStructureAndServices.shareholders._]: [
      {
        [fieldNames.corporateStructureAndServices.shareholders.name]: "",
        [fieldNames.corporateStructureAndServices.shareholders.address]: "",
        [fieldNames.corporateStructureAndServices.shareholders.nationality]: "",
        [fieldNames.corporateStructureAndServices.shareholders.percentage]: "",
        [fieldNames.corporateStructureAndServices.shareholders.isEditing]: true,
      },
    ],
    [fieldNames.corporateStructureAndServices.beneficial._]: [
      {
        [fieldNames.corporateStructureAndServices.beneficial.name]: "",
        [fieldNames.corporateStructureAndServices.beneficial.address]: "",
        [fieldNames.corporateStructureAndServices.beneficial.nationality]: "",
        [fieldNames.corporateStructureAndServices.beneficial.percentage]: "",
        [fieldNames.corporateStructureAndServices.beneficial.isEditing]: true,
      },
    ],
    [fieldNames.corporateStructureAndServices.executiveDirectors]: "",
    [fieldNames.corporateStructureAndServices.activities]: [],
    [fieldNames.corporateStructureAndServices.corporateStructure]: "",
    [fieldNames.corporateStructureAndServices.description]: "",
  },
  // PART 2

  // financial capability
  [fieldNames.finCapability._]: {
    [fieldNames.finCapability.whatApplies]: "",
    [fieldNames.finCapability.whatAppliesUploadedDocument]: "",
    [fieldNames.finCapability.sourceOfFunds]: "",
  },

  // management and technical competencies
  [fieldNames.mgtAndTechnicalCompetencies._]: {
    [fieldNames.mgtAndTechnicalCompetencies.orgChart]: "",
    [fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo]: "",
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
    [fieldNames.orgDevProgramAndBudget.orgDevStrategy]: "",
    [fieldNames.orgDevProgramAndBudget.employmentPlan]: "",
    [fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget]: "",
    [fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget]: "",
    [fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget]: "",
  },

  // local content
  [fieldNames.localContent._]: {
    [fieldNames.localContent.percentageOfGhanaianParticipation]: 0,
    [fieldNames.localContent.ghanaianMgtStaffBreakdown]: 0,
    [fieldNames.localContent.foreignMgtStaffBreakdown]: 0,
    [fieldNames.localContent.totalMgtStaffBreakdown]: 0,
    [fieldNames.localContent.ghanaianOtherStaffBreakdown]: 0,
    [fieldNames.localContent.foreignOtherStaffBreakdown]: 0,
    [fieldNames.localContent.totalOtherStaffBreakdown]: 0,
    [fieldNames.localContent.infraExpenditure]: 0,
    [fieldNames.localContent.rawMaterials]: '',
    [fieldNames.localContent.ghanaianFinishedGoods]: '',
    [fieldNames.localContent.valueOfServiceProvided._]: [
      {
        [fieldNames.localContent.valueOfServiceProvided
          .isEditing]: true,
        [fieldNames.localContent.valueOfServiceProvided.typeOfService]:
          "",
        [fieldNames.localContent.valueOfServiceProvided.contractSum]:
          "",
        [fieldNames.localContent.valueOfServiceProvided
          .nameOfClientCompany]: "",
      },
    ],
    [fieldNames.localContent.valueOfServiceReceived._]: [
      {
        [fieldNames.localContent.valueOfServiceReceived
          .isEditing]: true,
        [fieldNames.localContent.valueOfServiceReceived.typeOfService]:
          "",
        [fieldNames.localContent.valueOfServiceReceived.contractSum]:
          "",
        [fieldNames.localContent.valueOfServiceReceived
          .nameOfClientCompany]: "",
      },
    ],
  },

  [fieldNames.healthSafetySecurityEnv._]: {
    [fieldNames.healthSafetySecurityEnv.hssePolicyAndObj]: "",
  },

  [fieldNames.miscFiles]: '',

  // applicant declaration
  [fieldNames.declaration._]: {
    [fieldNames.declaration.name]: '',
    [fieldNames.declaration.position]: '',
    [fieldNames.declaration.signature]: '',
    [fieldNames.declaration.date]: '',
  },

  // cover page
  [fieldNames.coverPage]: '',

  // checklist
  [fieldNames.checkList._]: {
    [fieldNames.checkList.coverPage]: false,
    [fieldNames.checkList.applicationForm]: false,
    [fieldNames.checkList.certificateOfIncorporation]: false,
    [fieldNames.checkList.certificateToCommenceBusiness]: false,
    [fieldNames.checkList.companyRegulations]: false,
    [fieldNames.checkList.signedHssePolicyAndObj]: false,
    [fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue]: false,
    [fieldNames.checkList.validTaxClearanceCertificate]: false,
    [fieldNames.checkList.vatCertificate]: false,
    [fieldNames.checkList.originalSsnitClearanceCertificate]: false,
    [fieldNames.checkList.somethingImportantThatsMissing]: false,
    [fieldNames.checkList.copiesOfOtherRegulatoryCerts]: false,
    [fieldNames.checkList.copyOfApplicationPackReceipt]: false,
  }
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
    value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.upstreamPetroleumIndustryOnly,
    text: `For existing companies which undertake services
  solely for the upstream petroleum industry, provide
  Audited Financial Reports for the past three years`,
  },
  {
    value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.upstreamPetroleumIndustryAndOtherSectors,
    text: `For existing companies which undertake services for
  the upstream petroleum industry and other sectors,
  in addition to Audited Financial Reports, provide
  leter from Auditors showing your upstream oil and
  gas revenue for the past year under audit.`,
  },
  {
    value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.existingButNewToUpstreamPetroleumIndustry,
    text: `For existing companies which are new to the upstream
  petroleum industry (ie. Companies which have never
  received a contract for service in the upstream
  petroleum industry), provide AUdited Financial
  Report for the past year and a three year projected
  revenue for intended upstream oil and gas
  activities.`,
  },
  {
    value: FIN_CAPABILITY_WHAT_APPLIES_OPTIONS.newlyIncorporated,
    text: `For newly incorporated companies, provide a three
  year projected revenue for intended upstream oil and
  gas activities.`,
  },
];
