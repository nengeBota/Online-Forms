import { z } from "zod";
import f from "./localContent.fieldNames.js";
import v from "./localContent.fieldValidations.js";

const localContentSchema = z.object({
	[f.staffBreakdown.ghanaian.mgt]: v[f.staffBreakdown.ghanaian.mgt],
	[f.staffBreakdown.ghanaian.technicalCoreStaff]:
		v[f.staffBreakdown.ghanaian.technicalCoreStaff],
	[f.staffBreakdown.ghanaian.other]: v[f.staffBreakdown.ghanaian.other],
	[f.staffBreakdown.ghanaian.fullTime]: v[f.staffBreakdown.ghanaian.fullTime],
	[f.staffBreakdown.ghanaian.partTime]: v[f.staffBreakdown.ghanaian.partTime],
	[f.staffBreakdown.ghanaian.internsOrNationalService]:
		v[f.staffBreakdown.ghanaian.internsOrNationalService],

	[f.staffBreakdown.foreigners.mgt]: v[f.staffBreakdown.foreigners.mgt],
	[f.staffBreakdown.foreigners.technicalCoreStaff]:
		v[f.staffBreakdown.foreigners.technicalCoreStaff],
	[f.staffBreakdown.foreigners.other]: v[f.staffBreakdown.foreigners.other],
	[f.staffBreakdown.foreigners.fullTime]:
		v[f.staffBreakdown.foreigners.fullTime],
	[f.staffBreakdown.foreigners.partTime]:
		v[f.staffBreakdown.foreigners.partTime],
	[f.staffBreakdown.foreigners.internsOrNationalService]:
		v[f.staffBreakdown.foreigners.internsOrNationalService],

	[f.staffBreakdown.total.mgt]: v[f.staffBreakdown.total.mgt],
	[f.staffBreakdown.total.technicalCoreStaff]:
		v[f.staffBreakdown.total.technicalCoreStaff],
	[f.staffBreakdown.total.other]: v[f.staffBreakdown.total.other],
	[f.staffBreakdown.total.fullTime]: v[f.staffBreakdown.total.fullTime],
	[f.staffBreakdown.total.partTime]: v[f.staffBreakdown.total.partTime],
	[f.staffBreakdown.total.internsOrNationalService]:
		v[f.staffBreakdown.total.internsOrNationalService],

	[f.capitalInvestment]: v[f.capitalInvestment],

	[f.servicesReceived._]: v[f.servicesReceived._],

	[f.servicesRendered._]: v[f.servicesRendered._],

	[f.professionalServicesDetails.insuranceServices.serviceProvider]:
		v[f.professionalServicesDetails.insuranceServices.serviceProvider],
	[f.professionalServicesDetails.insuranceServices.location]:
		v[f.professionalServicesDetails.insuranceServices.location],
	[f.professionalServicesDetails.insuranceServices.expenditureInLast12Months]:
		v[
			f.professionalServicesDetails.insuranceServices
				.expenditureInLast12Months
		],

	[f.professionalServicesDetails.financialServices.serviceProvider]:
		v[f.professionalServicesDetails.financialServices.serviceProvider],
	[f.professionalServicesDetails.financialServices.location]:
		v[f.professionalServicesDetails.financialServices.location],
	[f.professionalServicesDetails.financialServices.expenditureInLast12Months]:
		v[
			f.professionalServicesDetails.financialServices
				.expenditureInLast12Months
		],

	[f.professionalServicesDetails.indigenousBanks.serviceProvider]:
		v[f.professionalServicesDetails.indigenousBanks.serviceProvider],
	[f.professionalServicesDetails.indigenousBanks.location]:
		v[f.professionalServicesDetails.indigenousBanks.location],
	[f.professionalServicesDetails.indigenousBanks.expenditureInLast12Months]:
		v[
			f.professionalServicesDetails.indigenousBanks
				.expenditureInLast12Months
		],

	[f.professionalServicesDetails.legalServices.serviceProvider]:
		v[f.professionalServicesDetails.legalServices.serviceProvider],
	[f.professionalServicesDetails.legalServices.location]:
		v[f.professionalServicesDetails.legalServices.location],
	[f.professionalServicesDetails.legalServices.expenditureInLast12Months]:
		v[
			f.professionalServicesDetails.legalServices
				.expenditureInLast12Months
		],
});

export default localContentSchema;
