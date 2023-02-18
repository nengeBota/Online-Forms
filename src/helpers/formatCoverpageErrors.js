export default function formatCoverpageErrors(coverpageErrors) {
	const errors = coverpageErrors;

	return errors?.[0]?.fileName?._errors;
}
