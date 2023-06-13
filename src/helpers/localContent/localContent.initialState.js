import f from "./localContent.fieldNames.js";

const localContentInitialState = {
	[f.staffBreakdown.ghanaian.mgt]: 0,
	[f.staffBreakdown.ghanaian.technicalCoreStaff]: 0,
	[f.staffBreakdown.ghanaian.other]: 0,
	[f.staffBreakdown.ghanaian.fullTime]: 0,
	[f.staffBreakdown.ghanaian.partTime]: 0,
	[f.staffBreakdown.ghanaian.internsOrNationalService]: 0,

	[f.staffBreakdown.foreigners.mgt]: 0,
	[f.staffBreakdown.foreigners.technicalCoreStaff]: 0,
	[f.staffBreakdown.foreigners.other]: 0,
	[f.staffBreakdown.foreigners.fullTime]: 0,
	[f.staffBreakdown.foreigners.partTime]: 0,
	[f.staffBreakdown.foreigners.internsOrNationalService]: 0,

	[f.staffBreakdown.total.mgt]: 0,
	[f.staffBreakdown.total.technicalCoreStaff]: 0,
	[f.staffBreakdown.total.other]: 0,
	[f.staffBreakdown.total.fullTime]: 0,
	[f.staffBreakdown.total.partTime]: 0,
	[f.staffBreakdown.total.internsOrNationalService]: 0,

	[f.capitalInvestment]: "",

	[f.servicesReceived._]: [
		{
			[f.servicesReceived.serviceProvider]: "",
			[f.servicesReceived.scopeOfWork]: "",
			[f.servicesReceived.contractStartDate]: "",
			[f.servicesReceived.contractEndDate]: "",
			[f.servicesReceived.paymentsReceivedInLast12Months]: "",
			isEditing: true,
		},
	],

	[f.servicesRendered._]: [
		{
			[f.servicesRendered.serviceRecipient]: "",
			[f.servicesRendered.scopeOfWork]: "",
			[f.servicesRendered.contractStartDate]: "",
			[f.servicesRendered.contractEndDate]: "",
			[f.servicesRendered.paymentsReceivedInLast12Months]: "",
			isEditing: true,
		},
	],

	[f.professionalServicesDetails.insuranceServices.serviceProvider]: "",
	[f.professionalServicesDetails.insuranceServices.location]: "",
	[f.professionalServicesDetails.insuranceServices.expenditureInLast12Months]:
		"",

	[f.professionalServicesDetails.financialServices.serviceProvider]: "",
	[f.professionalServicesDetails.financialServices.location]: "",
	[f.professionalServicesDetails.financialServices.expenditureInLast12Months]:
		"",

	[f.professionalServicesDetails.indigenousBanks.serviceProvider]: "",
	[f.professionalServicesDetails.indigenousBanks.location]: "",
	[f.professionalServicesDetails.indigenousBanks.expenditureInLast12Months]:
		"",

	[f.professionalServicesDetails.legalServices.serviceProvider]: "",
	[f.professionalServicesDetails.legalServices.location]: "",
	[f.professionalServicesDetails.legalServices.expenditureInLast12Months]: "",
};

export default localContentInitialState;
