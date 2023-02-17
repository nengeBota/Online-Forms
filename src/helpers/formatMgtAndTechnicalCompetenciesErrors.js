import { fieldNames } from "../constants.mjs";

const fields = fieldNames.mgtAndTechnicalCompetencies;

const getErrorsByField = (field, errors) => errors?.[field]?._errors;
const getFileErrors = (field, errors) =>
    Object.keys(errors?.[field])?.reduce((acc, key) => {
        if (key === '_errors') return acc;

        const file = errors?.[field]?.[key];
        const currentError = file?.fileName?._errors || [];
        console.log('value of current error -> ', currentError)
		return [...acc, ...currentError];
	}, []);

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
