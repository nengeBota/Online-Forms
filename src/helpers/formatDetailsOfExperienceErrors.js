import { fieldNames } from "../constants.mjs";

const getErrors = (field, errors) => {
    if (!errors) return [];
	return errors?.[field]?._errors || [];
};

const fields = fieldNames.detailsOfExperience;

export const formatContractsExecutedErrors = (errors) => {
	const f = fields.contractsExecuted;
	return Object.keys(errors || {})
		?.filter((field) => field !== "_errors")
		?.map((key) => {
            const row = errors[key];
			return {
				[f.isEditing]: row?.[f.isEditing]?._errors || [],
				[f.descriptionOfContract]:
					row?.[f.descriptionOfContract]?._errors || [],
				[f.nameOfCompanyWorkWasDoneFor]:
					row?.[f.nameOfCompanyWorkWasDoneFor]?._errors || [],
				[f.contractDuration]: row?.[f.contractDuration]?._errors || [],
				[f.contractValue]: row?.[f.contractValue]?._errors || [],
			};
		});
};

export default function formatDetailsOfExperienceErrors(
	detailsOfExperienceErrors
) {
	const errors = detailsOfExperienceErrors;

	return {
		[fields.companyExperience]: getErrors(fields.companyExperience, errors),
		[fields.countries]: getErrors(fields.countries, errors),
		[fields.contractsExecuted._]: formatContractsExecutedErrors(
			errors?.[fields.contractsExecuted._]
		),
	};
}
