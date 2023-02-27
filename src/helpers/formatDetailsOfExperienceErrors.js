import { fieldNames } from "../constants.mjs";

const getErrors = (field, errors) => {
	if (!errors) return [];
	return errors?.[field]?._errors || [];
};

const fields = fieldNames.detailsOfExperience;

export const formatSingleContractExecutedErrors = (errors) => {
	const f = fields.contractsExecuted;

	return {
		[f.isEditing]: errors?.[f.isEditing]?._errors || [],
		[f.descriptionOfContract]:
			errors?.[f.descriptionOfContract]?._errors || [],
		[f.nameOfCompanyWorkWasDoneFor]:
			errors?.[f.nameOfCompanyWorkWasDoneFor]?._errors || [],
		[f.contractDuration]: errors?.[f.contractDuration]?._errors || [],
		[f.contractValue]: errors?.[f.contractValue]?._errors || [],
	};
};

export const formatContractsExecutedErrors = (
	contractsExecutedErrors,
	contractsExecutedState
) => {
	if (!contractsExecutedErrors) return [];

	return contractsExecutedState.map((_, i) =>
		formatSingleContractExecutedErrors(contractsExecutedErrors[i])
	);
};

export default function formatDetailsOfExperienceErrors(
	detailsOfExperienceErrors,
	globalState
) {
	const errors = detailsOfExperienceErrors;
	const state = globalState[fields._];

	return {
		[fields.companyExperience]: getErrors(fields.companyExperience, errors),
		[fields.countries]: getErrors(fields.countries, errors),
		[fields.contractsExecuted._]: formatContractsExecutedErrors(
			errors?.[fields.contractsExecuted._],
			state[fields.contractsExecuted._]
		),
	};
}
