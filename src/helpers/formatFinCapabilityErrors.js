import { fieldNames } from "../constants.mjs";

function getErrorByField(field, errors) {
	return errors?.[field]?._errors || [];
}

const fields = fieldNames.finCapability;

export default function formatFinCapabilityErrors(finCapabilityErrors) {
	const errors = finCapabilityErrors;

	return {
		[fields.whatApplies]: getErrorByField(fields.whatApplies, errors),
		[fields.whatAppliesUploadedDocument]:
			errors[fields.whatAppliesUploadedDocument]?.[0]?.fileName
				?._errors || [],
		[fields.sourceOfFunds]: getErrorByField(fields.sourceOfFunds, errors),
	};
}
