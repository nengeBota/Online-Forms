export default function formatDeclarationErrors(declarationErrors) {
	const errors = declarationErrors;

	return errors?.[0]?.fileName?._errors;
}
