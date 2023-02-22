import { fieldNames } from "../constants.mjs";

const fields = fieldNames.mgtAndTechnicalCompetencies;

const getErrorsByField = (field, errors) => {
    if (!errors) return [];
    return errors?.[field]?._errors
};
const getFileErrors = (field, errors) => {
	if (!errors) return [];

	return Object.keys(errors?.[field] || {})?.reduce((acc, key) => {
		if (key === "_errors") return acc;

		const file = errors?.[field]?.[key];
		const currentError = file?.fileName?._errors || [];
		return [...acc, ...currentError];
	}, []);
};

export default function formatMgtAndTechnicalCompetenciesErrors(
	mgtAndTechnicalCompetenciesErrors
) {
	const errors = mgtAndTechnicalCompetenciesErrors;

	return {
		[fields.orgChart]: getFileErrors(fields.orgChart, errors),
		[fields.detailedStaffInfo]: getFileErrors(
			fields.detailedStaffInfo,
			errors
		),
		[fields.requiredExpertise]: getErrorsByField(
			fields.requiredExpertise,
			errors
		),
		[fields.sourcesOfEquipment]: getErrorsByField(
			fields.sourcesOfEquipment,
			errors
		),
	};
}
