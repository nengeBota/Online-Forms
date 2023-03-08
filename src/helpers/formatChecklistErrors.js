import { fieldNames } from "../constants.mjs";

const fields = fieldNames.checkList;

const getErrors = (field, errors) => {
	if (!errors) return [];
	// seems to be the only way to set a custom error for z.literal
	return errors?.[field]?._errors?.length > 0 ? ["Must be checked"] : [];
};

export default function formatChecklistErrors(checklistErrors) {
	const errors = checklistErrors;

	const result = {
		[fields.coverPage]: getErrors(fields.coverPage, errors),
		[fields.applicationForm]: getErrors(fields.applicationForm, errors),
		[fields.certificateOfIncorporation]: getErrors(
			fields.certificateOfIncorporation,
			errors
		),
		[fields.certificateToCommenceBusiness]: getErrors(
			fields.certificateToCommenceBusiness,
			errors
		),
		[fields.companyRegulations]: getErrors(
			fields.companyRegulations,
			errors
		),
		[fields.signedHssePolicyAndObj]: getErrors(
			fields.signedHssePolicyAndObj,
			errors
		),
		[fields.currentAuditedFinReportsOrProjectedRevenue]: getErrors(
			fields.currentAuditedFinReportsOrProjectedRevenue,
			errors
		),
		[fields.validTaxClearanceCertificate]: getErrors(
			fields.validTaxClearanceCertificate,
			errors
		),
		[fields.vatCertificate]: getErrors(fields.vatCertificate, errors),
		[fields.originalSsnitClearanceCertificate]: getErrors(
			fields.originalSsnitClearanceCertificate,
			errors
		),
		[fields.companyProfileAndBusinessPlan]: getErrors(
			fields.companyProfileAndBusinessPlan,
			errors
		),
		[fields.copiesOfOtherRegulatoryCerts]: getErrors(
			fields.copiesOfOtherRegulatoryCerts,
			errors
		),
		[fields.copyOfApplicationPackReceipt]: getErrors(
			fields.copyOfApplicationPackReceipt,
			errors
		),
		[fieldNames.checkList.epaPermit]: getErrors(fields.epaPermit, errors),
		[fieldNames.checkList.airOperatorCertificate]: getErrors(
			fields.airOperatorCertificate,
			errors
		),
		[fieldNames.checkList.aviationLicense]: getErrors(
			fields.aviationLicense,
			errors
		),
		[fieldNames.checkList.fdaHygieneCertificate]: getErrors(
			fields.fdaHygieneCertificate,
			errors
		),
	};

	return result;
}
