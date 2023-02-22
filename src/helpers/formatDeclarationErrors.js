export default function formatDeclarationErrors(declarationErrors) {
    const errors = declarationErrors;
    
    if (!errors) return [];

	return errors?.[0]?.fileName?._errors;
}
