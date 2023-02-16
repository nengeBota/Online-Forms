import { fieldNames } from "../constants.mjs";
import { SUMMARY_EXPLANATIONS } from "../constants/initialErrorState.js";

function errorsReducer(state, { action, data }) {
	return errorsReducerConfig[action](state, data);
}

const CORP = fieldNames.corporateStructureAndServices;

function updateCorporateStructureAndServices({ state, field, value }) {
	const errorsExist =
		value || (Array.isArray(value) && value.length > 0)
			? true
			: state.errorsExist; //todo: replace this with a function that goes through the entire corporate structure and services, to determine if there's an error somewhere

	return {
		...state,
		summary: {
			errorsExist,
			message: errorsExist ? SUMMARY_EXPLANATIONS.fill : "",
		},

		[CORP._]: {
			...state[CORP._],
			[field]: value,
		},
	};
}

const errorsReducerConfig = {
	[`${CORP._}-${CORP.applicantName}`]: (state, value) => {
		return updateCorporateStructureAndServices({
			state,
			field: CORP.applicantName,
			value,
		});
	},

	[`${CORP._}-${CORP.dateOfIncorporation}`]: (state, value) => {
		return updateCorporateStructureAndServices({
			state,
			field: CORP.dateOfIncorporation,
			value,
		});
	},

	[`${CORP._}-${CORP.placeOfIncorporation}`]: (state, value) => {
		return updateCorporateStructureAndServices({
			state,
			field: CORP.placeOfIncorporation,
			value,
		});
	},

	[`${CORP._}-${CORP.contactDetails._}-${CORP.contactDetails.officeAddress}`]:
		(state, value) => {
			return {
				...state,
				[CORP._]: {
					...state[CORP._],
					[CORP.contactDetails]: {
						...state[CORP._][CORP.contactDetails],
						[CORP.contactDetails.officeAddress]: value,
					},
				},
			};
		},
};

export default errorsReducer;
