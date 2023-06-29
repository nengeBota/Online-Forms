function prepareForSubmission(data) {
	const preparedData = { ...data };
	delete preparedData.checkList;

	return JSON.stringify(preparedData);
}

export default prepareForSubmission;
