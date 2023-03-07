import formatChecklistErrors from "../helpers/formatChecklistErrors.js";
import formatCorporateStructureAndServicesErrors from "../helpers/formatCorporateStructureAndServicesErrors.js";
import formatCoverpageErrors from "../helpers/formatCoverpageErrors.js";
import formatDeclarationErrors from "../helpers/formatDeclarationErrors.js";
import formatDetailsOfExperienceErrors from "../helpers/formatDetailsOfExperienceErrors.js";
import formatFinCapabilityErrors from "../helpers/formatFinCapabilityErrors.js";
import formatHealthSafetySecurityEnvErrors from "../helpers/formatHealthSafetySecurityEnvErrors.js";
import formatLocalContentErrors from "../helpers/formatLocalContentErrors.js";
import formatMgtAndTechnicalCompetenciesErrors from "../helpers/formatMgtAndTechnicalCompetenciesErrors.js";
import formatOrgDevProgramAndBudgetErrors from "../helpers/formatOrgDevProgramAndBudgetErrors.js";
import AnnexesAndAttachments from "../pages/AnnexesAndAttachments.jsx";
import CorporateStructureAndServices from "../pages/CorporateStructureAndServices.jsx";
import FinancialCapability from "../pages/FinancialCapability.jsx";
import LocalContent from "../pages/LocalContent.jsx";
import Miscellaneous from "../pages/Miscellaneous.jsx";
import PlansAndProgrammes from "../pages/PlansAndProgrammes.jsx";
import {
	checkListDesc,
	corporateStructureAndServicesDesc,
	coverPageDesc,
	declarationDesc,
	detailsOfExperienceDesc,
	financialCapabilityDesc,
	healthSafetySecurityEnvDesc,
	localContentDesc,
	mgtAndTechnicalCompetenciesDesc,
	miscFilesDesc,
	orgDevProgramAndBudgetDesc,
} from "../stateDescription.mjs";
import { fieldNames, initialErrorState } from "../constants.mjs";
import formatMiscellaneousErrors from "../helpers/formatMiscellaneousErrors.js";

//info: the position of the page determines its page number. so CorporateStructureAndServices is page 1 because its first in this array, etc..

const pages = [
	// PART 1
	{
		page: CorporateStructureAndServices,
		validate: (data, setErrors, showModal) => {
			// use the safeParse to validate,
			const { error } = corporateStructureAndServicesDesc.safeParse(
				data?.[fieldNames.corporateStructureAndServices._]
			);

			if (!error) {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page1: false,
					},
					[fieldNames.corporateStructureAndServices._]: {
						...initialErrorState[
							fieldNames.corporateStructureAndServices._
						],
					},
				}));

				return true;
			} else {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page1: true,
					},
					[fieldNames.corporateStructureAndServices._]:
						formatCorporateStructureAndServicesErrors(
							error?.format(),
							data
						),
				}));

				showModal(true);
				return false;
			}
		},
	},

	// PART 2
	{
		page: FinancialCapability,
		validate: (data, setErrors, showModal) => {
			// use the safeParse to validate,
			const { error: finCapabilityErrors } =
				financialCapabilityDesc.safeParse(
					data?.[fieldNames.finCapability._]
				);
			const { error: mgtAndTechnicalErrors } =
				mgtAndTechnicalCompetenciesDesc.safeParse(
					data?.[fieldNames.mgtAndTechnicalCompetencies._]
				);
			const { error: detailsOfExperienceErrors } =
				detailsOfExperienceDesc.safeParse(
					data?.[fieldNames.detailsOfExperience._]
				);

			if (
				!finCapabilityErrors &&
				!mgtAndTechnicalErrors &&
				!detailsOfExperienceErrors
			) {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page2: false,
					},
					[fieldNames.finCapability._]: {
						...initialErrorState[fieldNames.finCapability._],
					},
					[fieldNames.mgtAndTechnicalCompetencies._]: {
						...initialErrorState[
							fieldNames.mgtAndTechnicalCompetencies._
						],
					},
					[fieldNames.detailsOfExperience._]: {
						...initialErrorState[fieldNames.detailsOfExperience._],
					},
				}));

				return true;
			} else {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page2: true,
					},
					[fieldNames.finCapability._]: formatFinCapabilityErrors(
						finCapabilityErrors?.format(),
						data
					),
					[fieldNames.mgtAndTechnicalCompetencies._]:
						formatMgtAndTechnicalCompetenciesErrors(
							mgtAndTechnicalErrors?.format(),
							data
						),
					[fieldNames.detailsOfExperience._]:
						formatDetailsOfExperienceErrors(
							detailsOfExperienceErrors?.format(),
							data
						),
				}));

				showModal(true);
				return false;
			}
		},
	},

	// PART 3
	{
		page: PlansAndProgrammes,
		validate: (data, setErrors, showModal) => {
			// use the safeParse to validate,
			const { error } = orgDevProgramAndBudgetDesc.safeParse(
				data?.[fieldNames.orgDevProgramAndBudget._]
			);

			if (!error) {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page3: false,
					},
					[fieldNames.orgDevProgramAndBudget._]: {
						...initialErrorState[
							fieldNames.orgDevProgramAndBudget._
						],
					},
				}));

				return true;
			} else {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page3: true,
					},
					[fieldNames.orgDevProgramAndBudget._]:
						formatOrgDevProgramAndBudgetErrors(
							error?.format(),
							data
						),
				}));

				showModal(true);
				return false;
			}
		},
	},

	// PART 4
	{
		page: LocalContent,
		validate: (data, setErrors, showModal) => {
			// use the safeParse to validate,
			const { error } = localContentDesc.safeParse(
				data?.[fieldNames.localContent._]
			);

			if (!error) {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page4: false,
					},
					[fieldNames.localContent._]: {
						...initialErrorState[fieldNames.localContent._],
					},
				}));

				return true;
			} else {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page4: true,
					},
					[fieldNames.localContent._]: formatLocalContentErrors(
						error?.format(),
						data
					),
				}));

				showModal(true);
				return false;
			}
		},
	},

	// part 5
	{
		page: Miscellaneous,
		validate: (data, setErrors, showModal) => {
			// use the safeParse to validate,
			const { error: healthSafetySecurityEnvErrors } =
				healthSafetySecurityEnvDesc.safeParse(
					data?.[fieldNames.healthSafetySecurityEnv._]
				);
			const { error: declarationErrors } = declarationDesc.safeParse(
				data?.[fieldNames.declaration]
			);
			const { error: coverPageErrors } = coverPageDesc.safeParse(
				data?.[fieldNames.coverPage]
			);

            const { error: miscErrors } = miscFilesDesc.safeParse(
                data?.[fieldNames.miscFiles._]
            );
            
			if (
				!healthSafetySecurityEnvErrors &&
				!declarationErrors &&
				!coverPageErrors &&
				!miscErrors
			) {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page5: false,
					},
					[fieldNames.healthSafetySecurityEnv._]: {
						...initialErrorState[
							fieldNames.healthSafetySecurityEnv._
						],
					},
					[fieldNames.declaration]:
						initialErrorState[fieldNames.declaration._],

					[fieldNames.coverPage]:
						initialErrorState[fieldNames.coverPage],

					[fieldNames.miscFiles._]:
						initialErrorState[fieldNames.miscFiles._],
				}));

				return true;
			} else {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page5: true,
					},
					[fieldNames.healthSafetySecurityEnv._]:
						formatHealthSafetySecurityEnvErrors(
							healthSafetySecurityEnvErrors?.format(),
							data
						),
					[fieldNames.declaration]: formatDeclarationErrors(
						declarationErrors?.format(),
						data
					),
					[fieldNames.coverPage]: formatCoverpageErrors(
						coverPageErrors?.format(),
						data
					),
					[fieldNames.miscFiles._]: formatMiscellaneousErrors(
						miscErrors?.format(),
						data
					), 
				}));

				showModal(true);
				return false;
			}
		},
	},

	// part 6
	{
		page: AnnexesAndAttachments,
		validate: (data, setErrors, showModal) => {
			// use the safeParse to validate,
			const { error } = checkListDesc.safeParse(
				data?.[fieldNames.checkList._]
			);

			if (!error) {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page6: false,
					},
					[fieldNames.checkList._]: {
						...initialErrorState[fieldNames.checkList._],
					},
				}));

				return true;
			} else {
				setErrors((prev) => ({
					...prev,
					summary: {
						...prev.summary,
						page6: true,
					},
					[fieldNames.checkList._]: formatChecklistErrors(
						error?.format(),
						data
					),
				}));

				showModal(true);
				return false;
			}
		},
	},
];

export default pages;
