import { fieldNames } from "./constants.mjs";

function prepareForSubmission(data) {
	return JSON.stringify({
		...data,
		[fieldNames.coverPage]: data.coverPage[0],

		[fieldNames.finCapability._]: {
			...data[fieldNames.finCapability._],
			[fieldNames.finCapability.whatAppliesUploadedDocument]:
				data[fieldNames.finCapability._][
					fieldNames.finCapability.whatAppliesUploadedDocument
				][0],
		},
	});
}

export default prepareForSubmission;
