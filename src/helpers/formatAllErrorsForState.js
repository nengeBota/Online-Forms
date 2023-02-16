import { fieldNames } from "../constants.mjs";
import formatCorporateStructureAndServicesErrors from "./formatCorporateStructureAndServicesErrors.js";

function formatAllErrorsForState(zodFormattedErrors) {
	const corporateStructureAndServicesErrors =
    zodFormattedErrors[fieldNames.corporateStructureAndServices._];
  
	return {
		[fieldNames.corporateStructureAndServices._]:
			formatCorporateStructureAndServicesErrors(
				corporateStructureAndServicesErrors
			),
	};
}

export default formatAllErrorsForState;
