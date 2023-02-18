import { useReducer, useState } from "react";
import styled from "styled-components";
import CorporateStructureAndServices from "./pages/CorporateStructureAndServices";
import Pagination from "./components/Pagination";
import Image from "react-bootstrap/Image";
import { categoryfxn } from "./api";
import FinancialCapability from "./pages/FinancialCapability";
import {
	Button,
	ButtonGroup,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Modal,
} from "react-bootstrap";
import PlansAndProgrammes from "./pages/PlansAndProgrammes";
import LocalContent from "./pages/LocalContent";
import Miscellaneous from "./pages/Miscellaneous";
import * as z from "zod";
import AnnexesAndAttachments from "./pages/AnnexesAndAttachments";
import {
	fieldNames,
	initialErrorState,
	initialState,
	PERMIT_CATEGORIES,
} from "./constants.mjs";
import prepareForSubmission from "./prepareForSubmission";
import state, {
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
} from "./stateDescription.mjs";
import formatAllErrorsForState from "./helpers/formatAllErrorsForState";
import formatCorporateStructureAndServicesErrors from "./helpers/formatCorporateStructureAndServicesErrors";
import formatFinCapabilityErrors from "./helpers/formatFinCapabilityErrors";
import formatMgtAndTechnicalCompetenciesErrors from "./helpers/formatMgtAndTechnicalCompetenciesErrors";
import formatDetailsOfExperienceErrors from "./helpers/formatDetailsOfExperienceErrors";
import formatOrgDevProgramAndBudgetErrors from "./helpers/formatOrgDevProgramAndBudgetErrors";
import formatLocalContentErrors from "./helpers/formatLocalContentErrors";

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
							error?.format()
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
						finCapabilityErrors?.format()
					),
					[fieldNames.mgtAndTechnicalCompetencies._]:
						formatMgtAndTechnicalCompetenciesErrors(
							mgtAndTechnicalErrors?.format()
						),
					[fieldNames.detailsOfExperience._]:
						formatDetailsOfExperienceErrors(
							detailsOfExperienceErrors?.format()
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
						formatOrgDevProgramAndBudgetErrors(error?.format()),
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
						error?.format()
					),
				}));

				showModal(true);
				return false;
			}
		},
	},

	// part 5
	{ page: Miscellaneous },

	// part 6
	{ page: AnnexesAndAttachments },
];

async function submit(values) {
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

	try {
		state.parse(values);
		const response = await fetch(`${API_ENDPOINT}/submit`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(prepareForSubmission(values)),
		});
		console.log("value of response -> ", response);
	} catch (error) {
		console.log("failed to foetch -> ", error);
	}
}

function App() {
	const [category, setcategory] = useState([]);
	const [page, setPage] = useState(4);

	const [data, setData] = useState(initialState);
	const [errors, setErrors] = useState(initialErrorState);
	const [showErrorModal, setShowErrorModal] = useState(false);

	async function fetchcategories() {
		const result = await categoryfxn();
		setcategory(result.data);
	}

	// useEffect(function () {
	// 	fetchcategories();
	// }, []);

	const CurrentPage = pages[page - 1]?.page;
	const currentValidationFn = pages[page - 1]?.validate;

	const onClickSetPage = (value, validationFn) => {
		if (!validationFn()) return;

		if (value > pages.length) {
			return;
		}
		setPage(value);
	};

	return (
		<PageWrapper>
			<div>
				<Image src="/logo.png" />
			</div>

			<CurrentPage
				data={data}
				setData={setData}
				errors={errors}
				setErrors={setErrors}
			/>

			<Modal show={showErrorModal} centered>
				<ModalHeader>
					<h4 style={{ color: "red" }}>Unresolved Errors</h4>
				</ModalHeader>
				<ModalBody>
					Some fields have errors. Please fix them and try again.
				</ModalBody>
				<ModalFooter>
					<Button
						onClick={() => {
							setShowErrorModal(false);
						}}
						variant="danger"
					>
						OK
					</Button>
				</ModalFooter>
			</Modal>

			<br />
			<br />

			<ButtonGroup>
				<Button
					disabled={page === 1}
					onClick={() => setPage((prev) => prev - 1)}
					variant="secondary"
				>
					Back
				</Button>

				{/* todo: enable once preview feature is completed */}
				{/* {page === pages.length ? (
					<Button variant="secondary">Preview</Button>
				) : null} */}

				{page < pages.length ? (
					<Button
						disabled={page === pages.length}
						onClick={() => {
							const validationFn = () =>
								currentValidationFn(
									data,
									setErrors,
									setShowErrorModal
								);
							onClickSetPage(page + 1, validationFn);
						}}
						variant="primary"
					>
						Next
					</Button>
				) : (
					<Button
						variant="success"
						onClick={() => {
							if (!validate(data, setErrors, setPage)) {
								setShowErrorModal(true);
								return;
							}
							submit(data);
						}}
					>
						{" "}
						Submit
					</Button>
				)}
			</ButtonGroup>

			<Pagination
				validationSummary={errors?.summary}
				currentPage={page}
				pages={pages}
				onClick={(pageNumber) => {
					const validationFn = () =>
						currentValidationFn(data, setErrors, setShowErrorModal);
					onClickSetPage(pageNumber, validationFn);
				}}
			/>
		</PageWrapper>
	);
}

export default App;

function validate(data, setErrors, setPage) {
	const { error } = state.safeParse(data);

	console.log("errors -> ", error?.format());

	const { error: page1Errors } = corporateStructureAndServicesDesc.safeParse(
		data[fieldNames.corporateStructureAndServices._]
	);

	const { error: page2Errors1 } = financialCapabilityDesc.safeParse(
		data[fieldNames.finCapability._]
	);

	const { error: page2Errors2 } = mgtAndTechnicalCompetenciesDesc.safeParse(
		data[fieldNames.mgtAndTechnicalCompetencies._]
	);
	const { error: page2Errors3 } = detailsOfExperienceDesc.safeParse(
		data[fieldNames.detailsOfExperience._]
	);
	const { error: page3Errors } = orgDevProgramAndBudgetDesc.safeParse(
		data[fieldNames.orgDevProgramAndBudget._]
	);
	const { error: page4Errors } = localContentDesc.safeParse(
		data[fieldNames.localContent._]
	);
	const { error: page5Errors1 } = healthSafetySecurityEnvDesc.safeParse(
		data[fieldNames.healthSafetySecurityEnv._]
	);
	const { error: page5Errors2 } = declarationDesc.safeParse(
		data[fieldNames.declaration]
	);

	const { error: page5Errors3 } = miscFilesDesc.safeParse(
		data[fieldNames.miscFiles]
	);

	const { error: page5Errors4 } = coverPageDesc.safeParse(
		data[fieldNames.coverPage]
	);
	const { error: page6Errors } = checkListDesc.safeParse(
		data[fieldNames.checkList._]
	);

	if (!error) return true;

	const summary = {
		page1: Boolean(page1Errors),
		page2:
			Boolean(page2Errors1) ||
			Boolean(page2Errors2) ||
			Boolean(page2Errors3),
		page3: Boolean(page3Errors),
		page4: Boolean(page4Errors),
		page5:
			Boolean(page5Errors1) ||
			Boolean(page5Errors2) ||
			Boolean(page5Errors3) ||
			Boolean(page5Errors4),
		page6: Boolean(page6Errors),
	};

	// transition to the correct page
	setPage(determineFirstPageWithErrors(summary));

	setErrors({
		summary,
		...formatAllErrorsForState(error?.format()),
	});
	return false;
}

function determineFirstPageWithErrors(pagesErrorStatus) {
	const pages = Object.keys(pagesErrorStatus || {});

	return pages.findIndex((each) => !!each) + 1;
}

const PageWrapper = styled.div`
	max-width: 750px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	border: 1px solid black;
	min-height: 100vh;
	padding: 30px;

	input {
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		margin-bottom: 30px;
	}
`;
