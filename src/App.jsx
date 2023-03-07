import { useState } from "react";
import styled from "styled-components";
import Pagination from "./components/Pagination";
import Image from "react-bootstrap/Image";
import { categoryfxn } from "./api";
import {
	Button,
	ButtonGroup,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Modal,
} from "react-bootstrap";
import { fieldNames, initialErrorState, initialState } from "./constants.mjs";
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

import pages from "./constants/pages";

async function submit(values, setShowSubmittingModal) {
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

	try {
		setShowSubmittingModal(true);
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
	} finally {
		setShowSubmittingModal(false);
	}
}

function App() {
	const [category, setcategory] = useState([]);
	const [page, setPage] = useState(1);
	const [showInitialModal, setShowInitialModal] = useState(true);

	const [data, setData] = useState(initialState);
	const [errors, setErrors] = useState(initialErrorState);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [showSubmittingModal, setShowSubmittingModal] = useState(false);

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
		if (page < value) {
			if (!validationFn()) return;

			if (value > pages.length && value < 0) {
				return;
			}
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
						size="sm"
						onClick={() => {
							setShowErrorModal(false);
						}}
						variant="danger"
					>
						OK
					</Button>
				</ModalFooter>
			</Modal>

			<Modal show={showSubmittingModal} centered>
				<ModalBody>Submitting...</ModalBody>
			</Modal>

			<InitialModal
				showModal={showInitialModal}
				setShowModal={setShowInitialModal}
			/>
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
							submit(data, setShowSubmittingModal);
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

const InitialModal = ({ showModal, setShowModal }) => {
	return (
		<Modal show={showModal} centered style={{ padding: "100px" }}>
			<ModalHeader>
				<h4>Required documentation to proceed</h4>
			</ModalHeader>
			<ModalBody style={{ padding: "50px" }}>
				<h5>
					Please ensure you have the following information available
					in soft copy, in order to successfully complete the form:
				</h5>
				<ol>
					<li>Cover page</li>
					<li>Certificate of Incorporation</li>
					<li>Certificate to commence business</li>
					<li>Company regulations document</li>
					<li>Signed HSSE Policy and Objectives</li>
					<li>Current Audited Financial Reports</li>
					<li>Valid tax clearance certificate (original)</li>
					<li>VAT certificate</li>
					<li>Valid SSNIT Clearance certificate (original)</li>
					<li>Company Profile and business plans</li>
					<li>
						Copies of other valid regulatory certificates and
						permits (eg. EPA permit, Air Operator Certificate,
						Aviation License, FDA Hygiene Certificate)
						<span style={{ color: "red", marginLeft: "10px" }}>
							confirm from Bota if these are all required
						</span>
					</li>
					<li>Copy of Application Pack Receipt</li>
				</ol>
			</ModalBody>
			<ModalFooter>
				<Button
					onClick={() => {
						setShowModal(false);
					}}
				>
					Proceed
				</Button>
			</ModalFooter>
		</Modal>
	);
};

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
		...formatAllErrorsForState(error?.format(), data),
	});
	return false;
}

function determineFirstPageWithErrors(pagesErrorStatus) {
	const pages = Object.keys(pagesErrorStatus || {});

	return pages.findIndex((each) => Boolean(pagesErrorStatus[each])) + 1;
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
