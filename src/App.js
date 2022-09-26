import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CorporateStructureAndServices from './pages/CorporateStructureAndServices';
import FinancialCapabilityAndTechnicalCompetency from './pages/FinancialCapabilityAndTechnicalCompetency';
import Image from 'react-bootstrap/Image';
import { categoryfxn } from './api';


export const PERMIT_CATEGORIES = {
	specialised: 'specialized',
	general: 'general',
};

function App() {
	const [category, setcategory]=useState([])

	const [data, setData] = useState({
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
	});

	async function fetchcategories(){
		const result= await categoryfxn()
		setcategory(result.data);
	}
	
useEffect(function(){fetchcategories()},[])

	return (
		<PageWrapper>
			<div>
				<Image src="/logo.png" />
			</div>
			<CorporateStructureAndServices data={data} setData={setData} />
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
