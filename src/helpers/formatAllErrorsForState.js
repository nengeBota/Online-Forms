import { fieldNames } from "../constants.mjs";
import formatChecklistErrors from "./formatChecklistErrors.js";
import formatCorporateStructureAndServicesErrors from "./formatCorporateStructureAndServicesErrors.js";
import formatCoverpageErrors from "./formatCoverpageErrors.js";
import formatDeclarationErrors from "./formatDeclarationErrors.js";
import formatDetailsOfExperienceErrors from "./formatDetailsOfExperienceErrors.js";
import formatFinCapabilityErrors from "./formatFinCapabilityErrors.js";
import formatHealthSafetySecurityEnvErrors from "./formatHealthSafetySecurityEnvErrors.js";
import formatLocalContentErrors from "./formatLocalContentErrors.js";
import formatMgtAndTechnicalCompetenciesErrors from "./formatMgtAndTechnicalCompetenciesErrors.js";
import formatOrgDevProgramAndBudgetErrors from "./formatOrgDevProgramAndBudgetErrors.js";

function formatAllErrorsForState(zodFormattedErrors) {
	const corporateStructureAndServicesErrors =
		zodFormattedErrors[fieldNames.corporateStructureAndServices._];

	const finCapabilityErrors = zodFormattedErrors[fieldNames.finCapability._];
	const mgtAndTechnicalCompetenciesErrors =
		zodFormattedErrors[fieldNames.mgtAndTechnicalCompetencies._];
	const detailsOfExperienceErrors =
		zodFormattedErrors[fieldNames.detailsOfExperience._];
	const orgDevProgramAndBudgetErrors =
		zodFormattedErrors[fieldNames.orgDevProgramAndBudget._];
	const localContentErrors = zodFormattedErrors[fieldNames.localContent._];
	const healthSafetySecurityEnvErrors =
		zodFormattedErrors[fieldNames.healthSafetySecurityEnv._];
	const checklistErrors = zodFormattedErrors[fieldNames.checkList._];

	return {
		// page 1
		[fieldNames.corporateStructureAndServices._]:
			formatCorporateStructureAndServicesErrors(
				corporateStructureAndServicesErrors
			),

		// page 2
		[fieldNames.finCapability._]:
			formatFinCapabilityErrors(finCapabilityErrors),
		[fieldNames.mgtAndTechnicalCompetencies._]:
			formatMgtAndTechnicalCompetenciesErrors(
				mgtAndTechnicalCompetenciesErrors
			),
		[fieldNames.detailsOfExperience._]: formatDetailsOfExperienceErrors(
			detailsOfExperienceErrors
		),

		// page 3
		[fieldNames.orgDevProgramAndBudget._]:
			formatOrgDevProgramAndBudgetErrors(orgDevProgramAndBudgetErrors),

		// page 4
		[fieldNames.localContent._]:
			formatLocalContentErrors(localContentErrors),

		// page 5
		[fieldNames.healthSafetySecurityEnv._]:
			formatHealthSafetySecurityEnvErrors(healthSafetySecurityEnvErrors),
		[fieldNames.miscFiles]: [],
		[fieldNames.declaration]: formatDeclarationErrors(
			zodFormattedErrors?.[fieldNames.declaration]
		),
		[fieldNames.coverPage]: formatCoverpageErrors(
			zodFormattedErrors?.[fieldNames.coverPage]
		),
		// page 6
		[fieldNames.checkList._]: formatChecklistErrors(checklistErrors),
	};
}

export default formatAllErrorsForState;
