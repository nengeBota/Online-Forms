import f from "./localContent.fieldNames.js";

const getErrors = (field, errors) => {
	if (!errors) return [];
	return errors?.[field]?._errors || [];
};

export default function formatLocalContentErrors(localContentErrors) {
	return {
		[f.staffBreakdown.ghanaian.mgt]: getErrors(
			f.staffBreakdown.ghanaian.mgt,
			localContentErrors
		),
		[f.staffBreakdown.ghanaian.technicalCoreStaff]: getErrors(
			f.staffBreakdown.ghanaian.technicalCoreStaff,
			localContentErrors
		),
		[f.staffBreakdown.ghanaian.other]: getErrors(
			f.staffBreakdown.ghanaian.other,
			localContentErrors
		),
		[f.staffBreakdown.ghanaian.fullTime]: getErrors(
			f.staffBreakdown.ghanaian.fullTime,
			localContentErrors
		),
		[f.staffBreakdown.ghanaian.partTime]: getErrors(
			f.staffBreakdown.ghanaian.partTime,
			localContentErrors
		),
		[f.staffBreakdown.ghanaian.internsOrNationalService]: getErrors(
			f.staffBreakdown.ghanaian.internsOrNationalService,
			localContentErrors
		),

		[f.staffBreakdown.foreigners.mgt]: getErrors(
			f.staffBreakdown.foreigners.mgt,
			localContentErrors
		),
		[f.staffBreakdown.foreigners.technicalCoreStaff]: getErrors(
			f.staffBreakdown.foreigners.technicalCoreStaff,
			localContentErrors
		),
		[f.staffBreakdown.foreigners.other]: getErrors(
			f.staffBreakdown.foreigners.other,
			localContentErrors
		),
		[f.staffBreakdown.foreigners.fullTime]: getErrors(
			f.staffBreakdown.foreigners.fullTime,
			localContentErrors
		),
		[f.staffBreakdown.foreigners.partTime]: getErrors(
			f.staffBreakdown.foreigners.partTime,
			localContentErrors
		),
		[f.staffBreakdown.foreigners.internsOrNationalService]: getErrors(
			f.staffBreakdown.foreigners.internsOrNationalService,
			localContentErrors
		),

		[f.staffBreakdown.total.mgt]: getErrors(
			f.staffBreakdown.total.mgt,
			localContentErrors
		),
		[f.staffBreakdown.total.technicalCoreStaff]: getErrors(
			f.staffBreakdown.total.technicalCoreStaff,
			localContentErrors
		),
		[f.staffBreakdown.total.other]: getErrors(
			f.staffBreakdown.total.other,
			localContentErrors
		),
		[f.staffBreakdown.total.fullTime]: getErrors(
			f.staffBreakdown.total.fullTime,
			localContentErrors
		),
		[f.staffBreakdown.total.partTime]: getErrors(
			f.staffBreakdown.total.partTime,
			localContentErrors
		),
		[f.staffBreakdown.total.internsOrNationalService]: getErrors(
			f.staffBreakdown.total.internsOrNationalService,
			localContentErrors
		),

		[f.capitalInvestment]: getErrors(
			f.capitalInvestment,
			localContentErrors
		),

		[f.servicesReceived._]: formatServicesReceivedErrors(
			localContentErrors[f.servicesReceived._]
		),

		[f.servicesRendered._]: formatServicesRenderedErrors(
			localContentErrors[f.servicesRendered._]
		),

		[f.professionalServicesDetails.insuranceServices.serviceProvider]:
			getErrors(
				f.professionalServicesDetails.insuranceServices.serviceProvider,
				localContentErrors
			),
		[f.professionalServicesDetails.insuranceServices.location]: getErrors(
			f.professionalServicesDetails.insuranceServices.location,
			localContentErrors
		),
		[f.professionalServicesDetails.insuranceServices
			.expenditureInLast12Months]: getErrors(
			f.professionalServicesDetails.insuranceServices
				.expenditureInLast12Months,
			localContentErrors
		),

		[f.professionalServicesDetails.financialServices.serviceProvider]:
			getErrors(
				f.professionalServicesDetails.financialServices.serviceProvider,
				localContentErrors
			),
		[f.professionalServicesDetails.financialServices.location]: getErrors(
			f.professionalServicesDetails.financialServices.location,
			localContentErrors
		),
		[f.professionalServicesDetails.financialServices
			.expenditureInLast12Months]: getErrors(
			f.professionalServicesDetails.financialServices
				.expenditureInLast12Months,
			localContentErrors
		),

		[f.professionalServicesDetails.indigenousBanks.serviceProvider]:
			getErrors(
				f.professionalServicesDetails.indigenousBanks.serviceProvider,
				localContentErrors
			),
		[f.professionalServicesDetails.indigenousBanks.location]: getErrors(
			f.professionalServicesDetails.indigenousBanks.location,
			localContentErrors
		),
		[f.professionalServicesDetails.indigenousBanks
			.expenditureInLast12Months]: getErrors(
			f.professionalServicesDetails.indigenousBanks
				.expenditureInLast12Months,
			localContentErrors
		),

		[f.professionalServicesDetails.legalServices.serviceProvider]:
			getErrors(
				f.professionalServicesDetails.legalServices.serviceProvider,
				localContentErrors
			),
		[f.professionalServicesDetails.legalServices.location]: getErrors(
			f.professionalServicesDetails.legalServices.location,
			localContentErrors
		),
		[f.professionalServicesDetails.legalServices.expenditureInLast12Months]:
			getErrors(
				f.professionalServicesDetails.legalServices
					.expenditureInLast12Months,
				localContentErrors
			),
	};
}

function formatServicesRenderedErrors(serviceRenderedErrors) {
	const serviceRenderedErrorKeys = Object.keys(serviceRenderedErrors);

	return serviceRenderedErrorKeys
		.filter((key) => key !== "_errors")
		.map((key) => {
			const serviceRenderedErrorValue = serviceRenderedErrors[key];
			return formatSingleServiceRenderedError(serviceRenderedErrorValue);
		});
}

function formatSingleServiceRenderedError(singleServiceRenderedError) {
	return {
		[f.servicesRendered.contractEndDate]: getErrors(
			f.servicesRendered.contractEndDate,
			singleServiceRenderedError
		),
		[f.servicesRendered.serviceRecipient]: getErrors(
			f.servicesRendered.serviceRecipient,
			singleServiceRenderedError
		),
		[f.servicesRendered.contractStartDate]: getErrors(
			f.servicesRendered.contractStartDate,
			singleServiceRenderedError
		),
		[f.servicesRendered.contractEndDate]: getErrors(
			f.servicesRendered.contractEndDate,
			singleServiceRenderedError
		),
		[f.servicesRendered.scopeOfWork]: getErrors(
			f.servicesRendered.scopeOfWork,
			singleServiceRenderedError
		),
		[f.servicesRendered.paymentsReceivedInLast12Months]: getErrors(
			f.servicesRendered.paymentsReceivedInLast12Months,
			singleServiceRenderedError
		),
		[f.servicesRendered.contractValue]: getErrors(
			f.servicesRendered.contractValue,
			singleServiceRenderedError
		),
	};
}

function formatServicesReceivedErrors(serviceReceivedErrors) {
	const serviceReceivedErrorKeys = Object.keys(serviceReceivedErrors);

	return serviceReceivedErrorKeys
		.filter((key) => key !== "_errors")
		.map((key) => {
			const serviceReceivedErrorValue = serviceReceivedErrors[key];
			return formatSingleServiceReceivedError(serviceReceivedErrorValue);
		});
}

function formatSingleServiceReceivedError(singleServiceReceivedError) {
	return {
		[f.servicesReceived.serviceProvider]: getErrors(
			f.servicesReceived.serviceProvider,
			singleServiceReceivedError
		),
		[f.servicesReceived.scopeOfWork]: getErrors(
			f.servicesReceived.scopeOfWork,
			singleServiceReceivedError
		),
		[f.servicesReceived.contractStartDate]: getErrors(
			f.servicesReceived.contractStartDate,
			singleServiceReceivedError
		),
		[f.servicesReceived.contractEndDate]: getErrors(
			f.servicesReceived.contractEndDate,
			singleServiceReceivedError
		),
		[f.servicesReceived.paymentsReceivedInLast12Months]: getErrors(
			f.servicesReceived.paymentsReceivedInLast12Months,
			singleServiceReceivedError
		),
		[f.servicesReceived.contractValue]: getErrors(
			f.servicesReceived.contractValue,
			singleServiceReceivedError
		),
	};
}
