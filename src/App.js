import { useState } from 'react';
import styled from 'styled-components';
import CorporateStructureAndServices from './pages/CorporateStructureAndServices';
import Image from 'react-bootstrap/Image';

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
		nationalityOfAffiliate: '',
		shareholders: [
			{
				name: 'name 1',
				address: 'address 1',
				nationality: 'nationality 1',
				percentage: 'percentage 1',
				isEditing: false,
			},
			{
				name: 'name 2',
				address: 'address 2',
				nationality: 'nationality 2',
				percentage: 'percentage 2',
				isEditing: false,
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
