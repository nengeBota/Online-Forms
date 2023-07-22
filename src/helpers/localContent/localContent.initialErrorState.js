import f from "./localContent.fieldNames.js";

const localContentInitialErrorState = {
	[f.staffBreakdown.ghanaian.mgt]: [],
	[f.staffBreakdown.ghanaian.technicalCoreStaff]: [],
	[f.staffBreakdown.ghanaian.other]: [],
	[f.staffBreakdown.ghanaian.fullTime]: [],
	[f.staffBreakdown.ghanaian.partTime]: [],
	[f.staffBreakdown.ghanaian.internsOrNationalService]: [],

	[f.staffBreakdown.foreigners.mgt]: [],
	[f.staffBreakdown.foreigners.technicalCoreStaff]: [],
	[f.staffBreakdown.foreigners.other]: [],
	[f.staffBreakdown.foreigners.fullTime]: [],
	[f.staffBreakdown.foreigners.partTime]: [],
	[f.staffBreakdown.foreigners.internsOrNationalService]: [],

	[f.staffBreakdown.total.mgt]: [],
	[f.staffBreakdown.total.technicalCoreStaff]: [],
	[f.staffBreakdown.total.other]: [],
	[f.staffBreakdown.total.fullTime]: [],
	[f.staffBreakdown.total.partTime]: [],
	[f.staffBreakdown.total.internsOrNationalService]: [],

	[f.capitalInvestment]: [
		{
			descriptionOfInvestment: [],
			location: [],
			totalCurrentExpenditureUSD: [],
			totalCumulativeExpenditureUSD: [],
		},
	],

	[f.servicesReceived._]: [
		{
			[f.servicesReceived.serviceProvider]: [],
			[f.servicesReceived.scopeOfWork]: [],
			[f.servicesReceived.contractStartDate]: [],
			[f.servicesReceived.contractEndDate]: [],
			[f.servicesReceived.paymentsReceivedInLast12Months]: [],
		},
	],

	[f.servicesRendered._]: [
		{
			[f.servicesRendered.serviceRecipient]: [],
			[f.servicesRendered.scopeOfWork]: [],
			[f.servicesRendered.contractStartDate]: [],
			[f.servicesRendered.contractEndDate]: [],
			[f.servicesRendered.paymentsReceivedInLast12Months]: [],
		},
	],

	[f.professionalServicesDetails.insuranceServices.serviceProvider]: [],
	[f.professionalServicesDetails.insuranceServices.location]: [],
	[f.professionalServicesDetails.insuranceServices.expenditureInLast12Months]:
		[],

	[f.professionalServicesDetails.financialServices.serviceProvider]: [],
	[f.professionalServicesDetails.financialServices.location]: [],
	[f.professionalServicesDetails.financialServices.expenditureInLast12Months]:
		[],

	[f.professionalServicesDetails.indigenousBanks.serviceProvider]: [],
	[f.professionalServicesDetails.indigenousBanks.location]: [],
	[f.professionalServicesDetails.indigenousBanks.expenditureInLast12Months]:
		[],

	[f.professionalServicesDetails.legalServices.serviceProvider]: [],
	[f.professionalServicesDetails.legalServices.location]: [],
	[f.professionalServicesDetails.legalServices.expenditureInLast12Months]: [],
};

export default localContentInitialErrorState;
