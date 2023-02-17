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

const newPages = [
	{
		page: CorporateStructureAndServices,
		onValidate: (values) => {
			// return false if there's any errors
			const { success: result } =
				corporateStructureAndServicesDesc.safeParse(values);
			console.log(
				"validating corporate structure and services -> ",
				result
			);

			return result;
		},
	},
];

const file = z.object({ fileName: z.string(), file: z.string() });

//info: the position of the page determines its page number. so CorporateStructureAndServices is page 1 because its first in this array, etc..
const pages = [
	// PART 1
	CorporateStructureAndServices,

	// PART 2
	FinancialCapability,

	// PART 3
	PlansAndProgrammes,

	// PART 4
	LocalContent,

	// part 5
	Miscellaneous,

	// part 6
	AnnexesAndAttachments,
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
	const [page, setPage] = useState(1);

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

	const CurrentPage = pages[page - 1];

	const onClickSetPage = (value) => {
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
						onClick={() => setPage((prev) => prev + 1)}
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
				setPage={onClickSetPage}
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
	const pages = Object.keys(pagesErrorStatus);

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
