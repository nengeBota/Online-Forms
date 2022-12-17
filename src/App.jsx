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
import Miscellaneous from "./pages/Miscellaneous";
import Declaration from "./pages/Declaration";
import CoverPage from "./pages/CoverPage";
import AnnexesAndAttachments from "./pages/AnnexesAndAttachments";
import { initialErrorState, initialState } from "./constants";

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

	// Part 5
	//merged with part 6

	// part 6
	Miscellaneous,

	// part 7
	AnnexesAndAttachments,
];

function App() {
	const [category, setcategory] = useState([]);
	const [page, setPage] = useState(1);

	const [data, setData] = useState(initialState);

	async function fetchcategories() {
		const result = await categoryfxn();
		setcategory(result.data);
	}

	// useEffect(function () {
	// 	fetchcategories();
	// }, []);

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
					{page === pages.length ? (
						<Button variant="secondary">Preview</Button>
					) : null //<Button>Save</Button>
					}

					{page < pages.length ? (
						<Button
							disabled={page === pages.length}
							onClick={() => setPage((prev) => prev + 1)}
						>
							Next
						</Button>
					) : (
						<Button variant="success"> Submit</Button>
					)}
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
