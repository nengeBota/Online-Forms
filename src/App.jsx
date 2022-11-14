import { useState, useEffect } from "react";
import styled from "styled-components";
import CorporateStructureAndServices from "./pages/CorporateStructureAndServices";
import Pagination from "./components/Pagination";
import Image from "react-bootstrap/Image";
import { categoryfxn } from "./api";
import FinancialCapability from "./pages/FinancialCapability";
import { Button, ButtonGroup } from "react-bootstrap";
import ManagementAndTechnicalCompetencies from "./pages/ManagementAndTEchnicalCompetencies";
import DetailsOfExperience from "./pages/DetailsOfExperience";
import PlansAndProgrammes from "./pages/PlansAndProgrammes";
import LocalContent from "./pages/LocalContent";
import HealthSafetySecurityEnvironment from "./pages/HealthSafetySecurityEnvironment";

export const PERMIT_CATEGORIES = {
	specialised: "specialized",
	general: "general",
};

export const NEW_VALUE_OF_SERVICE = {
	isEditing: true,
	typeOfService: "",
	contractSum: "",
	nameOfClientCompany: "",
};

export const NEW_RAW_MATERIALS_TO_BE_USED = {
	isEditing: true,
	name: "",
	occupation: "",
	nationality: "",
	companyPosition: "",
};

const initialState = {
	applicantName: "",
	dateOfIncorporation: "",
	placeOfIncorporation: "",
	contactDetails: {
		officeAddress: "",
		postalAddress: "",
		city: "",
		region: "",
		country: "",
	},
	emailAddress: "",
	website: "",
	contactPerson: {
		name: "",
		mobileNumber: "",
	},

	nameOfSubsidiaryOrAffiliate: "",
	nationalityOfAffiliate: "",
	permitCategory: PERMIT_CATEGORIES.general,
	shareholders: [
		{
			name: "",
			address: "",
			nationality: "",
			percentage: "",
			isEditing: true,
		},
	],
	beneficial: [
		{
			name: "",
			address: "",
			nationality: "",
			percentage: "",
			isEditing: true,
		},
	],
	corporateStructure: "",
	description: "",
	// PART 2
	// C. DETAILS OF EXPERIENCE
	detailsOfExperience: [
		{
			isEditing: true,
			descriptionOfContract: "",
			nameOfCompanyWorkWasDoneFor: "",
			contractDuration: "",
			contractValue: "",
		},
	],

	// PART 4. LOCAL CONTENT
	valueOfServiceOfferedByOtherCompaniesToApplicant: [
		{ ...NEW_VALUE_OF_SERVICE },
	],
	valueOfServiceOfferedByApplicantToOtherCompanies: [
		{ ...NEW_VALUE_OF_SERVICE },
	],
	rawMaterialsToBeUtilized: [{ ...NEW_RAW_MATERIALS_TO_BE_USED }],
};

//info: the position of the page determines its page number. so CorporateStructureAndServices is page 1 because its first in this array, etc..
const pages = [
	// PART 1
	CorporateStructureAndServices,
	FinancialCapability,

	// PART 2
	ManagementAndTechnicalCompetencies,
	DetailsOfExperience,

	// PART 3
	PlansAndProgrammes,

	// PART 4
	LocalContent,

	// Part 5
	HealthSafetySecurityEnvironment,
];

function App() {
	const [category, setcategory] = useState([]);
	const [page, setPage] = useState(7);

	const [data, setData] = useState(initialState);

	async function fetchcategories() {
		const result = await categoryfxn();
		setcategory(result.data);
	}

	useEffect(function () {
		fetchcategories();
	}, []);

	const CurrentPage = pages[page - 1];

	const onClickSetPage = (value) => {
		if (value > pages.length) return;
		setPage(value);
	};

	return (
		<PageWrapper>
			<div>
				<Image src="/logo.png" />
			</div>

			<CurrentPage data={data} setData={setData} />

			<br />
			<br />

			<div style={{ display: "flex", alignItems: "space-between" }}>
				<Button
					disabled={page === 1}
					onClick={() => setPage((prev) => prev - 1)}
				>
					Back
				</Button>

				<ButtonGroup>
					<Button>Save</Button>
					<Button
						disabled={page === pages.length}
						onClick={() => setPage((prev) => prev + 1)}
					>
						Next
					</Button>
				</ButtonGroup>
			</div>

			<Pagination currentPage={page} setPage={onClickSetPage} />
		</PageWrapper>
	);
}

export default App;

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
