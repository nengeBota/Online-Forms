import { fieldNames } from "../constants.mjs";
import formatCorporateStructureAndServicesErrors from "./formatCorporateStructureAndServicesErrors.js";
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
		[fieldNames.declaration]:
			zodFormattedErrors?.[fieldNames.declaration]?.[0]?.fileName
				?._errors,
		[fieldNames.coverPage]: zodFormattedErrors?.[fieldNames.coverPage]?.[0]?.fileName
        ?._errors,

		// page 6
		[fieldNames.checkList._]: {},
	};
}

export default formatAllErrorsForState;
