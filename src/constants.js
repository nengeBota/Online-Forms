

export const fieldNames = {
  applicantName: "applicantName",
  dateOfIncorporation: "dateOfIncorporation",
  placeOfIncorporation: "placeOfIncorporation",
  // contactDetails: "contactDetails",
  contactDetails: {
    _: "contactDetails",
    officeAddress: 'officeAddress',
    postalAddress: 'postalAddress',
    city: 'city',
    region: 'region',
    country: 'country',
  },

  emailAddress: "emailAddress",
  website: "website",
  // contactPerson: "contactPerson",
  contactPerson: {
    _: 'contactPerson',
    name: 'name',
    mobileNumber: 'mobileNumber',
  },
  // "contactPerson.name": "name",
  // "contactPerson.mobileNumber": "mobileNumber",
  nameOfSubsidiaryOrAffiliate: "nameOfSubsidiaryOrAffiliate",
  nationalityOfAffiliate: "nationalityOfAffiliate",
  permitCategory: "permitCategory",
  // shareholders: "shareholders",
  // "shareholders.name": "name",
  // "shareholders.address": "address",
  // "shareholders.nationality": "nationality",
  // "shareholders.percentage": "percentage",
  // "shareholders.isEditing": "isEditing",
  shareholders: {
    _: "shareholders",
    name: 'name',
    address: 'address',
    nationality: 'nationality',
    percentage: 'percentage',
    isEditing: 'isEditing',
  },
  // beneficial: "beneficial",
  // "beneficial.name": "name",
  // "beneficial.address": "address",
  // "beneficial.nationality": "nationality",
  // "beneficial.percenatage": "percentage",
  // "beneficial.isEditing": "isEditing",
  beneficial: {
    _: 'beneficial',
    name: 'name',
    address: 'address',
    nationality: 'nationality',
    percentage: 'percentage',
    isEditing: 'isEditing',
  },
  corporateStructure: "corporateStructure",
  description: "description",
  // detailsOfExperience: "detailsOfExperience",
  // "detailsOfExperience.isEditing": "isEditing",
  // "detailsOfExperience.descriptionOfContract": "descriptionOfContract",
  // "detailsOfExperience.nameOfCompanyWorkWasDoneFor":
  //   "nameOfCompanyWorkWasDoneFor",
  // "details.contractDuration": "contractDuration",
  // "details.contractValue": "contractValue",
  detailsOfExperience: {
    _: 'detailsOfExperience',
    isEditing: 'isEditing',
    descriptionOfContract: 'descriptionOfContract',
    nameOfCompanyWorkWasDoneFor: 'nameOfCompanyWorkWasDoneFor',
    contractDuration: 'contractDuration',
    contractValue: 'contractValue',
  },

  // valueOfServiceOfferedByApplicantToOtherCompanies:
  //   "valueOfServiceOfferedByApplicantToOtherCompanies",
  // "valueOfServiceOfferedByApplicantToOtherCompanies.isEditing": "isEditing",
  // "valueOfServiceOfferedByApplicantToOtherCompanies.typeOfService":
  //   "typeOfService",
  // "valueOfServiceOfferedByApplicantToOtherCompanies.contractSum":
  //   "contractSum",
  // "valueOfServiceOfferedByApplicantToOtherCompanies.nameOfClientCompany":
  //   "nameOfClientCompany",
  valueOfServiceOfferedByApplicantToOtherCompanies: {
    _: "valueOfServiceOfferedByApplicantToOtherCompanies",
    isEditing: 'isEditing',
    typeOfService: 'typeOfService',
    contractSum: 'contractSum',
    nameOfClientCompany: 'nameOfClientCompany',
  },

  // valueOfServiceOfferedByOtherCompaniesToApplicant:
  //   "valueOfServiceOfferedByOtherCompaniesToApplicant",
  // "valueOfServiceOfferedByOtherCompaniesToApplicant.isEditing": "isEditing",
  // "valueOfServiceOfferedByOtherCompaniesToApplicant.typeOfService":
  //   "typeOfService",
  // "valueOfServiceOfferedByOtherCompaniesToApplicant.contractSum":
  //   "contractSum",
  // "valueOfServiceOfferedByOtherCompaniesToApplicant.nameOfClientCompany":
  //   "nameOfClientCompany",
  valueOfServiceOfferedByOtherCompaniesToApplicant: {
    _: "valueOfServiceOfferedByOtherCompaniesToApplicant",
    isEditing: 'isEditing',
    typeOfService: 'typeOfService',
    contractSum: 'contractSum',
    nameOfClientCompany: 'nameOfClientCompany',
  }
};

export const PERMIT_CATEGORIES = {
  specialised: "specialized",
  general: "general",
};

export const NEW_VALUE_OF_SERVICE = {
  isEditing: true,
  typeOfService: "",
  contractSum: "",
  nameOfClientCompany: "",
};


export const initialErrorState = {
  // page 1 - corporate structure and services
  [fieldNames.applicantName]: "",
  [fieldNames.dateOfIncorporation]: "",
  [fieldNames.placeOfIncorporation]: "",
  [fieldNames.contactDetails._]: {
    [fieldNames.contactDetails.officeAddress]: "",
    [fieldNames.contactDetails.postalAddress]: "",
    [fieldNames.contactDetails.city]: "",
    [fieldNames.contactDetails.region]: "",
    [fieldNames.contactDetails.country]: "",
  },
  [fieldNames.emailAddress]: "",
  [fieldNames.website]: "",
  [fieldNames.contactPerson._]: {
    [fieldNames.contactPerson.name]: "",
    [fieldNames.contactPerson.mobileNumber]: "",
  },

  [fieldNames.nameOfSubsidiaryOrAffiliate]: "",
  [fieldNames.nationalityOfAffiliate]: "",
  [fieldNames.permitCategory]: PERMIT_CATEGORIES.general,
  [fieldNames.shareholders._]: [
    {
      [fieldNames.shareholders.name]: "",
      [fieldNames.shareholders.address]: "",
      [fieldNames.shareholders.nationality]: "",
      [fieldNames.shareholders.percentage]: "",
      [fieldNames.shareholders.isEditing]: true,
    },
  ],
  [fieldNames.beneficial._]: [
    {
      [fieldNames.beneficial.name]: "",
      [fieldNames.beneficial.address]: "",
      [fieldNames.beneficial.nationality]: "",
      [fieldNames.beneficial.percentage]: "",
      [fieldNames.beneficial.isEditing]: true,
    },
  ],
  [fieldNames.corporateStructure]: "",
  [fieldNames.description]: "",
  // PART 2
  // C. DETAILS OF EXPERIENCE
  [fieldNames.detailsOfExperience._]: [
    {
      [fieldNames.detailsOfExperience.isEditing]: true,
      [fieldNames.detailsOfExperience.descriptionOfContract]: "",
      [fieldNames.detailsOfExperience.nameOfCompanyWorkWasDoneFor]: "",
      [fieldNames.detailsOfExperience.contractDuration]: "",
      [fieldNames.detailsOfExperience.contractValue]: "",
    },
  ],

  // PART 4. LOCAL CONTENT
  [fieldNames.valueOfServiceOfferedByOtherCompaniesToApplicant._]: [
    { ...NEW_VALUE_OF_SERVICE },
  ],
  [fieldNames.valueOfServiceOfferedByApplicantToOtherCompanies._]: [
    { ...NEW_VALUE_OF_SERVICE },
  ],
};

export const initialState = {
  [fieldNames.applicantName]: "",
  [fieldNames.dateOfIncorporation]: "",
  [fieldNames.placeOfIncorporation]: "",
  [fieldNames.contactDetails._]: {
    [fieldNames.contactDetails.officeAddress]: "",
    [fieldNames.contactDetails.postalAddress]: "",
    [fieldNames.contactDetails.city]: "",
    [fieldNames.contactDetails.region]: "",
    [fieldNames.contactDetails.country]: "",
  },
  [fieldNames.emailAddress]: "",
  [fieldNames.website]: "",
  [fieldNames.contactPerson._]: {
    [fieldNames.contactPerson.name]: "",
    [fieldNames.contactPerson.mobileNumber]: "",
  },

  [fieldNames.nameOfSubsidiaryOrAffiliate]: "",
  [fieldNames.nationalityOfAffiliate]: "",
  [fieldNames.permitCategory]: PERMIT_CATEGORIES.general,
  [fieldNames.shareholders._]: [
    {
      [fieldNames.shareholders.name]: "",
      [fieldNames.shareholders.address]: "",
      [fieldNames.shareholders.nationality]: "",
      [fieldNames.shareholders.percentage]: "",
      [fieldNames.shareholders.isEditing]: true,
    },
  ],
  [fieldNames.beneficial._]: [
    {
      [fieldNames.beneficial.name]: "",
      [fieldNames.beneficial.address]: "",
      [fieldNames.beneficial.nationality]: "",
      [fieldNames.beneficial.percentage]: "",
      [fieldNames.beneficial.isEditing]: true,
    },
  ],
  [fieldNames.corporateStructure]: "",
  [fieldNames.description]: "",
  // PART 2
  // C. DETAILS OF EXPERIENCE
  [fieldNames.detailsOfExperience._]: [
    {
      [fieldNames.detailsOfExperience.isEditing]: true,
      [fieldNames.detailsOfExperience.descriptionOfContract]: "",
      [fieldNames.detailsOfExperience.nameOfCompanyWorkWasDoneFor]: "",
      [fieldNames.detailsOfExperience.contractDuration]: "",
      [fieldNames.detailsOfExperience.contractValue]: "",
    },
  ],


  // PART 4. LOCAL CONTENT
  [fieldNames.valueOfServiceOfferedByOtherCompaniesToApplicant]: [
    { ...NEW_VALUE_OF_SERVICE },
  ],
  [fieldNames.valueOfServiceOfferedByApplicantToOtherCompanies]: [
    { ...NEW_VALUE_OF_SERVICE },
  ],
};

