import { fieldNames } from "../constants.mjs";
import formatCorporateStructureAndServicesErrors from "./formatCorporateStructureAndServicesErrors.js";
import formatDetailsOfExperienceErrors from "./formatDetailsOfExperienceErrors.js";
import formatFinCapabilityErrors from "./formatFinCapabilityErrors.js";
import formatMgtAndTechnicalCompetenciesErrors from "./formatMgtAndTechnicalCompetenciesErrors.js";

function formatAllErrorsForState(zodFormattedErrors) {
	const corporateStructureAndServicesErrors =
		zodFormattedErrors[fieldNames.corporateStructureAndServices._];

	const finCapabilityErrors = zodFormattedErrors[fieldNames.finCapability._];
	const mgtAndTechnicalCompetenciesErrors =
		zodFormattedErrors[fieldNames.mgtAndTechnicalCompetencies._];
	const detailsOfExperienceErrors =
		zodFormattedErrors[fieldNames.detailsOfExperience._];

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
		[fieldNames.orgDevProgramAndBudget._]: {},

		// page 4
		[fieldNames.localContent._]: {},

		// page 5
		[fieldNames.healthSafetySecurityEnv._]: {},
		[fieldNames.miscFiles]: {},
		[fieldNames.declaration]: {},
		[fieldNames.coverPage]: {},

		// page 6
		[fieldNames.checkList._]: {},
	};
}

export default formatAllErrorsForState;
