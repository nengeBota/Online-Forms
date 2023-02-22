export default function formatCoverpageErrors(coverpageErrors) {
    const errors = coverpageErrors;
    if(!errors) return []

	return errors?.[0]?.fileName?._errors;
}
