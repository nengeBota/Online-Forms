import { fieldNames } from "./constants.mjs";

function prepareForSubmission(data) {
	const preparedData = {
		...data,
		[fieldNames.coverPage]: data.coverPage[0],

		[fieldNames.finCapability._]: {
			...data[fieldNames.finCapability._],
			[fieldNames.finCapability.whatAppliesUploadedDocument]:
				data[fieldNames.finCapability._][
					fieldNames.finCapability.whatAppliesUploadedDocument
				][0],
		},
	};

	delete preparedData.checkList

	return JSON.stringify(preparedData);
}

export default prepareForSubmission;
