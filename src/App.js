import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CorporateStructureAndServices from './pages/CorporateStructureAndServices';
import Pagination from "./components/Pagination";
import Image from 'react-bootstrap/Image';
import { categoryfxn } from './api';
import FinancialCapability from "./pages/FinancialCapability";
import { Button, ButtonGroup } from "react-bootstrap";
import ManagementAndTechnicalCompetencies from "./pages/ManagementAndTEchnicalCompetencies";


export const PERMIT_CATEGORIES = {
  specialised: 'specialized',
  general: 'general',
};

const initialState = {
  applicantName: '',
  dateOfIncorporation: '',
  placeOfIncorporation: '',
  contactDetails: {
    officeAddress: '',
    postalAddress: '',
    city: '',
    region: '',
    country: '',
  },
  emailAddress: '',
  website: '',
  contactPerson: {
    name: '',
    mobileNumber: '',
  },

  nameOfSubsidiaryOrAffiliate: '',
  nationalityOfAffiliate: '',
  permitCategory: PERMIT_CATEGORIES.general,
  shareholders: [
    {
      name: '',
      address: '',
      nationality: '',
      percentage: '',
      isEditing: true,
    },
  ],
  beneficial: [
    {
      name: '',
      address: '',
      nationality: '',
      percentage: '',
      isEditing: true,
    },
  ],
  corporateStructure: '',
  description: '',
}

const pages = [
  CorporateStructureAndServices,
  FinancialCapability,
  ManagementAndTechnicalCompetencies,
]

function App() {
  const [category, setcategory] = useState([])
  const [page, setPage] = useState(1);

  const [data, setData] = useState(initialState);

  async function fetchcategories() {
    const result = await categoryfxn()
    setcategory(result.data);
  }

  useEffect(function () { fetchcategories() }, [])

  const CurrentPage = pages[page - 1];

  const onClickSetPage = (value) => {
    if (value > pages.length) return;
    setPage(value)
  }

  return (
    <PageWrapper>
      <div>
        <Image src="/logo.png" />
      </div>

      <CurrentPage data={data} setData={setData} />

      <div style={{ display: 'flex', alignItems: 'space-between', }}>
        <Button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>Back</Button>

        <ButtonGroup >
          <Button>Save</Button>
          <Button disabled={page === pages.length} onClick={() => setPage(prev => prev + 1)}>Next</Button>
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
