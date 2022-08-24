import { useState } from 'react';
import { Form } from 'react-bootstrap';

function CorporateStructureAndServices() {
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
	});

	const {
		applicantName,
		dateOfIncorporation,
		placeOfIncorporation,
		contactDetails,
		emailAddress,
		website,
		contactPerson,
		nameOfSubsidiaryOrAffiliate,
	} = data;

	return (
		<div>
			<Form>
				<h1>
					APPLICATION FOR REGISTRATION PERMIT TO OPERATE IN THE UPSTREAM PETROLEUM
					INDUSTRY
				</h1>
				<hr />
				<h2>PART ONE – CORPORATE STRUCTURE AND SERVICES</h2>
				<hr />
				<Form.Group>
					<Form.Label>
						1. Name of Applicant (as indicated on Certificate of Incorporation).
					</Form.Label>
					<Form.Control
						placeholder="Applicant's name"
						value={applicantName}
						onChange={(e) =>
							setData((prev) => ({ ...prev, applicantName: e.target.value }))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>2. Date of Incorporation.</Form.Label>
					<Form.Control
						type="date"
						value={dateOfIncorporation}
						onChange={(e) =>
							setData((prev) => ({ ...prev, dateOfIncorporation: e.target.value }))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Place of Incorporation.</Form.Label>
					<Form.Control
						value={placeOfIncorporation}
						onChange={(e) =>
							setData((prev) => ({ ...prev, placeOfIncorporation: e.target.value }))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>3. Contact Details</Form.Label>
					<Form.Control
						placeholder="Office Address"
						value={contactDetails.officeAddress}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactDetails: {
									...prev?.contactDetails,
									officeAddress: e.target.value,
								},
							}))
						}
					/>
					<Form.Control
						placeholder="Postal Address"
						value={contactDetails?.postalAddress}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactDetails: {
									...prev?.contactDetails,
									postalAddress: e.target.value,
								},
							}))
						}
					/>
					<Form.Control
						placeholder="City"
						value={contactDetails?.city}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactDetails: { ...prev?.contactDetails, city: e.target.value },
							}))
						}
					/>
					<Form.Control
						placeholder="Region"
						value={contactDetails?.region}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactDetails: { ...prev?.contactDetails, region: e.target.value },
							}))
						}
					/>
					<Form.Control
						placeholder="Country"
						value={contactDetails?.country}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactDetails: {
									...prev?.contactDetails,
									country: e.target.value,
								},
							}))
						}
					/>
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						placeholder="Email"
						value={emailAddress}
						onChange={(e) =>
							setData((prev) => ({ ...prev, emailAddress: e.target.value }))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Website (if any)</Form.Label>
					<Form.Control
						placeholder="www.example.com"
						value={website}
						onChange={(e) => setData((prev) => ({ ...prev, website: e.target.value }))}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Contact Person</Form.Label>
					<Form.Control
						placeholder="Contact Person"
						value={contactPerson?.name}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactPerson: { ...prev?.contactPerson, name: e.target.value },
							}))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Mobile Number of Contact Person</Form.Label>
					<Form.Control
						placeholder="23326262626"
						value={contactPerson?.mobileNumber}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactPerson: {
									...prev?.contactPerson,
									mobileNumber: e.target.value,
								},
							}))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>4. Name of Subsidiary or Affiliate (if applicable). </Form.Label>
					<Form.Control
						placeholder="NONE"
						value={nameOfSubsidiaryOrAffiliate}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								nameOfSubsidiaryOrAffiliate: e.target.value,
							}))
						}
					/>
				</Form.Group>
			</Form>
		</div>
	);
}

export default CorporateStructureAndServices;
