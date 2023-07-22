import { z } from "zod";
import f from "./localContent.fieldNames.js";

const positiveNumber = z.coerce.number().min(0);
const nonEmptyString = z.string().min(1, { message: "Required" });

export const singleServiceRendered = z.object({
	[f.servicesRendered.serviceRecipient]: nonEmptyString,
	[f.servicesRendered.scopeOfWork]: nonEmptyString,
	[f.servicesRendered.contractStartDate]: nonEmptyString,
	[f.servicesRendered.contractEndDate]: nonEmptyString,
	[f.servicesRendered.paymentsReceivedInLast12Months]: positiveNumber,
	[f.servicesRendered.contractValue]: positiveNumber,
});

export const singleServiceReceived = z.object({
	[f.servicesReceived.serviceProvider]: nonEmptyString,
	[f.servicesReceived.scopeOfWork]: nonEmptyString,
	[f.servicesReceived.contractStartDate]: nonEmptyString,
	[f.servicesReceived.contractEndDate]: nonEmptyString,
	[f.servicesReceived.paymentsReceivedInLast12Months]: positiveNumber,
	[f.servicesReceived.contractValue]: positiveNumber,
});

export const singleCapitalExpenditure = () =>
	z
		.object({
			descriptionOfInvestment: z.string(),
			location: z.string(),
			totalCurrentExpenditureUSD: z.coerce.number(),
			totalCumulativeExpenditureUSD: z.coerce.number(),
		})
		.required();

const localContentFieldValidations = {
	[f.staffBreakdown.ghanaian.mgt]: positiveNumber,
	[f.staffBreakdown.ghanaian.technicalCoreStaff]: positiveNumber,
	[f.staffBreakdown.ghanaian.other]: positiveNumber,
	[f.staffBreakdown.ghanaian.fullTime]: positiveNumber,
	[f.staffBreakdown.ghanaian.partTime]: positiveNumber,
	[f.staffBreakdown.ghanaian.internsOrNationalService]: positiveNumber,

	[f.staffBreakdown.foreigners.mgt]: positiveNumber,
	[f.staffBreakdown.foreigners.technicalCoreStaff]: positiveNumber,
	[f.staffBreakdown.foreigners.other]: positiveNumber,
	[f.staffBreakdown.foreigners.fullTime]: positiveNumber,
	[f.staffBreakdown.foreigners.partTime]: positiveNumber,
	[f.staffBreakdown.foreigners.internsOrNationalService]: positiveNumber,

	[f.staffBreakdown.total.mgt]: positiveNumber,
	[f.staffBreakdown.total.technicalCoreStaff]: positiveNumber,
	[f.staffBreakdown.total.other]: positiveNumber,
	[f.staffBreakdown.total.fullTime]: positiveNumber,
	[f.staffBreakdown.total.partTime]: positiveNumber,
	[f.staffBreakdown.total.internsOrNationalService]: positiveNumber,

	[f.capitalInvestment]: z.array(singleCapitalExpenditure()),

	[f.servicesReceived._]: z.array(singleServiceReceived),

	[f.servicesRendered._]: z.array(singleServiceRendered),

	[f.professionalServicesDetails.insuranceServices.serviceProvider]:
		nonEmptyString,
	[f.professionalServicesDetails.insuranceServices.location]: nonEmptyString,
	[f.professionalServicesDetails.insuranceServices.expenditureInLast12Months]:
		positiveNumber,

	[f.professionalServicesDetails.financialServices.serviceProvider]:
		nonEmptyString,
	[f.professionalServicesDetails.financialServices.location]: nonEmptyString,
	[f.professionalServicesDetails.financialServices.expenditureInLast12Months]:
		positiveNumber,

	[f.professionalServicesDetails.indigenousBanks.serviceProvider]:
		nonEmptyString,
	[f.professionalServicesDetails.indigenousBanks.location]: nonEmptyString,
	[f.professionalServicesDetails.indigenousBanks.expenditureInLast12Months]:
		positiveNumber,

	[f.professionalServicesDetails.legalServices.serviceProvider]:
		nonEmptyString,
	[f.professionalServicesDetails.legalServices.location]: nonEmptyString,
	[f.professionalServicesDetails.legalServices.expenditureInLast12Months]:
		positiveNumber,
};

export default localContentFieldValidations;
