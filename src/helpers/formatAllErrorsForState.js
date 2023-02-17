import { fieldNames } from "../constants.mjs";
import formatCorporateStructureAndServicesErrors from "./formatCorporateStructureAndServicesErrors.js";
import formatFinCapabilityErrors from "./formatFinCapabilityErrors.js";

function formatAllErrorsForState(zodFormattedErrors) {
	const corporateStructureAndServicesErrors =
		zodFormattedErrors[fieldNames.corporateStructureAndServices._];

    const finCapabilityErrors = zodFormattedErrors[fieldNames.finCapability._];
    
	return {
		// page 1
		[fieldNames.corporateStructureAndServices._]:
			formatCorporateStructureAndServicesErrors(
				corporateStructureAndServicesErrors
			),

		// page 2
		[fieldNames.finCapability._]:
			formatFinCapabilityErrors(finCapabilityErrors),
		[fieldNames.mgtAndTechnicalCompetencies._]: {},
		[fieldNames.detailsOfExperience._]: {},

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
