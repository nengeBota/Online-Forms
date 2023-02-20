import { fieldNames } from "../constants.mjs";

const fields = fieldNames.localContent;

const getErrors = (field, errors) => {
	return errors?.[field]?._errors || [];
};

export const formatValueOfServiceProvidedErrors = (errors) => {
	return Object.keys(errors || {})
		?.filter((key) => key !== "_errors")
		?.map((key) => {
			const row = errors?.[key];
			return {
				[fields?.valueOfServiceProvided?.[
					fields.valueOfServiceProvided.isEditing
				]]: [],

				[fields?.valueOfServiceProvided?.[
					fields.valueOfServiceProvided.typeOfService
				]]:
					row?.[fields.valueOfServiceProvided.typeOfService]
						?._errors || [],

				[fields?.valueOfServiceProvided?.[
					fields.valueOfServiceProvided.contractSum
				]]:
					row?.[fields.valueOfServiceProvided.contractSum]?._errors ||
					[],

				[fields?.valueOfServiceProvided?.[
					fields.valueOfServiceProvided.nameOfClientCompany
				]]:
					row?.[fields.valueOfServiceProvided.nameOfClientCompany]
						?._errors || [],
			};
		});
};

export const formatValueOfServiceReceivedErrors = (errors) => {
	return Object.keys(errors|| {})
		?.filter((key) => key !== "_errors")
		?.map((key) => {
			const row = errors?.[key];
			return {
				[fields?.valueOfServiceReceived?.[
					fields.valueOfServiceProvided.isEditing
				]]: [],

				[fields?.valueOfServiceReceived?.[
					fields.valueOfServiceProvided.typeOfService
				]]:
					row?.[fields.valueOfServiceProvided.typeOfService]
						?._errors || [],

				[fields?.valueOfServiceReceived?.[
					fields.valueOfServiceProvided.contractSum
				]]:
					row?.[fields.valueOfServiceProvided.contractSum]?._errors ||
					[],

				[fields?.valueOfServiceReceived?.[
					fields.valueOfServiceProvided.nameOfClientCompany
				]]:
					row?.[fields.valueOfServiceProvided.nameOfClientCompany]
						?._errors || [],
			};
		});
};

export default function formatLocalContentErrors(localContentErrors) {
	const errors = localContentErrors;

	return {
		[fields.percentageOfGhanaianParticipation]: getErrors(
			fields.percentageOfGhanaianParticipation,
			errors
		),
		[fields.ghanaianMgtStaffBreakdown]: getErrors(
			fields.ghanaianMgtStaffBreakdown,
			errors
		),
		[fields.foreignMgtStaffBreakdown]: getErrors(
			fields.foreignMgtStaffBreakdown,
			errors
		),
		[fields.totalMgtStaffBreakdown]: getErrors(
			fields.totalMgtStaffBreakdown,
			errors
		),
		[fields.ghanaianOtherStaffBreakdown]: getErrors(
			fields.ghanaianOtherStaffBreakdown,
			errors
		),
		[fields.foreignOtherStaffBreakdown]: getErrors(
			fields.foreignOtherStaffBreakdown,
			errors
		),
		[fields.totalOtherStaffBreakdown]: getErrors(
			fields.totalOtherStaffBreakdown
		),
		[fields.infraExpenditure]: getErrors(fields.infraExpenditure, errors),
		[fields.rawMaterials]: getErrors(fields.rawMaterials, errors),
		[fields.ghanaianFinishedGoods]: getErrors(
			fields.ghanaianFinishedGoods,
			errors
		),
		[fields.valueOfServiceProvided._]: formatValueOfServiceProvidedErrors(
			errors?.[fields.valueOfServiceProvided._]
		),
		[fields.valueOfServiceReceived._]: formatValueOfServiceReceivedErrors(
			errors?.[fields.valueOfServiceReceived._]
		),
	};
}
