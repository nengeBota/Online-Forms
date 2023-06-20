import mongoose from 'mongoose';

const permitInfoScheme = new mongoose.Schema({
  applicantName: String,
  dateOfIncorporation: Date,
  placeOfIncorporation: String,

  officeAddress: String,
  postalAddress: String,
  city: String,
  region: String,
  country: String,

  emailAddress: String,
  website: String,

  contactPerson: String,
  mobileNumberOfcontactPerson: String,
  emailOfcontactPerson: String,

  nameOfSubsidiaryOrAffiliate: String,
  nationalityOfAffiliate: String,
  
  corporateStructure: [
    {
      fileName: String,
      file: String,
    },
  ],

  shareholders: [
    {
      name: String,
      address: String,
      nationality: String,
      percentage: Number,
    },
  ],
  beneficial: [
    {
      name: String,
      address: String,
      nationality: String,
      percentage: Number,
    },
  ],
  executiveDirectors: String,
  permitCategory: String,
  activities: [String],
  description: String,

  whatApplies: String,
  financialCapabilityDocument: [
    {
      fileName: String,
      file: String,
    },
  ],
  sourceOfFunds: String,

  orgChart: [
    {
      fileName: String,
      file: String,
    },
  ],
  detailedStaffInfo: [
    {
      fileName: String,
      file: String,
    },
  ],
  requiredExpertiseLocalNInternational: String,
  sourcesOfEquipmentForPetroleumActivities: String,

  companyPastPetroleumExperience: String,
  countriesWithPetroleumActivities: String,
  contractsExecuted: [
    {
      descriptionOfContract: String,
      nameOfCompanyWorkWasDoneFor: String,
      contractDuration: String,
      contractValue: Number,
    },
  ],

  orgDevStrategy: [
    {
      fileName: String,
      file: String,
    },
  ],
  employmentPlan: [
    {
      fileName: String,
      file: String,
    },
  ],
  techTransferProgramAndBudget: [
    {
      fileName: String,
      file: String,
    },
  ],
  trainingProgramAndBudget: [
    {
      fileName: String,
      file: String,
    },
  ],
  csrAndSocialDevProgramAndBudget: [
    {
      fileName: String,
      file: String,
    },
  ],

  localContentStatus: [
    {
  percentageOfGhanaianParticipation: Number,
  ghanaianMgtStaffBreakdown: Number,
  foreignMgtStaffBreakdown: Number,
  totalMgtStaffBreakdown: Number,
  ghanaianOtherStaffBreakdown: Number,
  foreignOtherStaffBreakdown: Number,
  totalOtherStaffBreakdown: Number,
  
}
],
  infrastructuralInvestments: Number,
  rawMaterialsUtilized: String,
  ghanaianFinishedGoodsUtilized: String,
  
  valueOfServiceRendered: [
    {
      typeOfService: String,
      contractSum: Number,
      nameOfClientCompany: String,
    },
  ],
  valueOfServiceReceived: [
    {
      typeOfService: String,
      contractSum: Number,
      nameOfClientCompany: String,
    },
  ],

  hssePolicyAndObj: [
    {
      fileName: String,
      file: String,
    },
  ],

  certificateOfIncorporation: [
    {
      fileName: String,
      file: String,
    },
  ],

  certificateToCommenceBusiness: [
    {
      fileName: String,
      file: String,
    },
  ],

  companyRegulationsDocument: [
    {
      fileName: String,
      file: String,
    },
  ],

 /**
  hssePolicyAndObj: [
    {
      fileName: String,
      file: String,
    },
  ],
 */

  currentAuditedFinReportsOrProjectedRevenue: [
    {
      fileName: String,
      file: String,
    },
  ],

  validTaxClearanceCertificate: [
    {
      fileName: String,
      file: String,
    },
  ],

  vatCertificate: [
    {
      fileName: String,
      file: String,
    },
  ],

  validSSNITClearanceCertificate: [
    {
      fileName: String,
      file: String,
    },
  ],

  companyProfileAndBusinessPlan: [
    {
      fileName: String,
      file: String,
    },
  ],

  epaPermit: [
    {
      fileName: String,
      file: String,
    },
  ],

  airOpeartorCertificate: [
    {
      fileName: String,
      file: String,
    },
  ],

  aviationLicense: [
    {
      fileName: String,
      file: String,
    },
  ],

  fdaHygieneCertificate: [
    {
      fileName: String,
      file: String,
    },
  ],

  copyOfApplicationPackReceipt: [
    {
      fileName: String,
      file: String,
    },
  ],

  declaration: [
    {
      fileName: String,
      file: String,
    },
  ],

  coverPage: [
    {
      fileName: String,
      file: String,
    },
  ],
}, {strict: false});

const permitInfo = mongoose.model(
  "permitInfo",
  permitInfoScheme
);

export default permitInfo;
