import { fieldNames } from "../constants.mjs";

const getErrors = (field, errors) => {
	if (!errors) return [];
	return Object.keys(errors?.[field] || {})?.reduce((acc, key) => {
		if (key === "_errors") return acc;

		const file = errors?.[field]?.[key];
		const currentError = file?.fileName?._errors || [];
		return [...acc, ...currentError];
	}, []);
};

function formatMiscellaneousErrors(miscellaneousErrors, data) {
	const errors = miscellaneousErrors;

	return {
		[fieldNames.miscFiles.certificateOfIncorporation]: getErrors(
			fieldNames.miscFiles.certificateOfIncorporation,
			errors
		),
		[fieldNames.miscFiles.certificateToCommenceBusiness]: getErrors(
			fieldNames.miscFiles.certificateToCommenceBusiness
		),
		[fieldNames.miscFiles.companyRegulationsDocument]: getErrors(
			fieldNames.miscFiles.companyRegulationsDocument
		),
		[fieldNames.miscFiles.signedHSSEPolicyAndObj]: getErrors(
			fieldNames.miscFiles.signedHSSEPolicyAndObj
		),
		[fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue]:
			getErrors(
				fieldNames.miscFiles.currentAuditedFinReportsOrProjectedRevenue,
				errors
			),
		[fieldNames.miscFiles.validTaxClearanceCertificate]: getErrors(
			fieldNames.miscFiles.validTaxClearanceCertificate,
			errors
		),
		[fieldNames.miscFiles.vatCertificate]: getErrors(
			fieldNames.miscFiles.vatCertificate,
			errors
		),
		[fieldNames.miscFiles.validSSNITClearanceCertificate]: getErrors(
			fieldNames.miscFiles.validSSNITClearanceCertificate,
			errors
		),
		[fieldNames.miscFiles.companyProfileAndBusinessPlan]: getErrors(
			fieldNames.miscFiles.companyProfileAndBusinessPlan,
			errors
		),
		[fieldNames.miscFiles.EPAPermit]: getErrors(
			fieldNames.miscFiles.EPAPermit,
			errors
		),
		[fieldNames.miscFiles.airOperatorCertificate]: getErrors(
			fieldNames.miscFiles.airOperatorCertificate,
			errors
		),
		[fieldNames.miscFiles.aviationLicense]: getErrors(
			fieldNames.miscFiles.aviationLicense,
			errors
		),
		[fieldNames.miscFiles.fdaHygieneCertificate]: getErrors(
			fieldNames.miscFiles.fdaHygieneCertificate,
			errors
		),
		[fieldNames.miscFiles.copyOfApplicationPackReceipt]: getErrors(
			fieldNames.miscFiles.copyOfApplicationPackReceipt,
			errors
		),
	};
}

export default formatMiscellaneousErrors;
