import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CorporateStructureAndServices from './pages/CorporateStructureAndServices';
import FinancialCapabilityAndTechnicalCompetency from './pages/FinancialCapabilityAndTechnicalCompetency';
import Pagination from "./components/Pagination";
import Image from 'react-bootstrap/Image';
import { categoryfxn } from './api';


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

const pages = [CorporateStructureAndServices, FinancialCapabilityAndTechnicalCompetency,]

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

  return (
    <PageWrapper>
      <div>
        <Image src="/logo.png" />
      </div>
      <Pagination currentPage={page} setPage={setPage} />
      <CurrentPage data={data} setData={setData} />
      <Pagination currentPage={page} setPage={setPage} />
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
