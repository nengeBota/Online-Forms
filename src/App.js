import { useState } from 'react';
import styled from 'styled-components';
import CorporateStructureAndServices from './pages/CorporateStructureAndServices';
import Image from 'react-bootstrap/Image';

export const PERMIT_CATEGORIES = {
  specialised:'specialized',
  general: 'general',
}

function App() {
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
    permitCategory: PERMIT_CATEGORIES.general,
		nationalityOfAffiliate: '',
		shareholders: [
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
