import { fieldNames } from "../constants.mjs";

const fields = fieldNames.orgDevProgramAndBudget;

const getErrors = (field, errors) => {
	return Object.keys(errors?.[field] || {})
		?.filter((key) => key !== "_errors")
		?.reduce((acc, key) => {
            const recordError = errors?.[field]?.[key]?.fileName?._errors || [];
            console.log('error -> ', recordError)
			return [...acc, ...recordError];
		}, []);
};

export default function formatOrgDevProgramAndBudgetErrors(
	orgDevProgramAndBudgetErrors
) {
	const errors = orgDevProgramAndBudgetErrors;

	return {
		[fields.orgDevStrategy]: getErrors(fields.orgDevStrategy, errors),
		[fields.employmentPlan]: getErrors(fields.employmentPlan, errors),
		[fields.techTransferProgramAndBudget]: getErrors(
			fields.techTransferProgramAndBudget,
			errors
		),
		[fields.trainingProgramAndBudget]: getErrors(
			fields.trainingProgramAndBudget,
			errors
		),
		[fields.csrAndSocialDevProgramAndBudget]: getErrors(
			fields.csrAndSocialDevProgramAndBudget,
			errors
		),
	};
}
