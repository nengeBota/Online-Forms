import { Form } from 'react-bootstrap';
import { PERMIT_CATEGORIES } from '../App';
import DynamicTable from '../components/DynamicTable';

function CorporateStructureAndServices({ data, setData }) {
	const {
		applicantName,
		dateOfIncorporation,
		placeOfIncorporation,
		contactDetails,
		emailAddress,
		website,
		contactPerson,
		nameOfSubsidiaryOrAffiliate,
		nationalityOfAffiliate,
		corporateStructure,
		description,
		shareholders,
		beneficial,
		permitCategory,
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

				<Form.Group>
					<Form.Label>
						5. Nationality of Parent Company or Affiliate (if applicable)
					</Form.Label>
					<Form.Control
						placeholder="Nationality of Parent Company/ Affiliate"
						value={nationalityOfAffiliate}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								nationalityOfAffiliate: e.target.value,
							}))
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>
						6. Give an outline of the corporate structure, including an explanatory
						diagram, if appropriate, showing parent, subsidiary and affiliate companies
						(if applicable).
					</Form.Label>
					<Form.Control
						type="file"
						value={corporateStructure}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								corporateStructure: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>
						7a. List all Individuals/Companies with shares in the applicant company.
					</Form.Label>

					<DynamicTable
						columns={[
							{ name: 'Shareholders', key: 'name' },
							{ name: 'Address', key: 'address' },
							{ name: 'Nationality', key: 'nationality' },
							{ name: 'Percentage', key: 'percentage' },
						]}
						data={shareholders}
						addNewRow={() =>
							setData((prev) => ({
								...prev,
								shareholders: [
									...prev.shareholders,
									{
										name: '',
										address: '',
										nationality: '',
										percentage: '',
										isEditing: true,
									},
								],
							}))
						}
						updateRow={(index, key, value) => {
							data.shareholders[index][key] = value;
							setData((prev) => ({ ...prev, shareholders: [...data.shareholders] }));
						}}
						saveRow={(index) => {
							data.shareholders[index]['isEditing'] = false;
							setData((prev) => ({ ...prev, shareholders: [...data.shareholders] }));
						}}
						editRow={(index) => {
							data.shareholders[index]['isEditing'] = true;
							setData((prev) => ({ ...prev, shareholders: [...data.shareholders] }));
						}}
						deleteRow={(index) => {
							data.shareholders.splice(index, 1);
							setData((prev) => ({ ...prev, shareholders: [...data.shareholders] }));
						}}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>
						7b. Beneficial Ownership - if shareholders in 7a. are companies, please
						provide a list all individual shareholders in the company stated in 7a.
					</Form.Label>

					<DynamicTable
						columns={[
							{ name: 'Beneficial', key: 'name' },
							{ name: 'Address', key: 'address' },
							{ name: 'Nationality', key: 'nationality' },
							{ name: 'Percentage', key: 'percentage' },
						]}
						data={beneficial}
						addNewRow={() =>
							setData((prev) => ({
								...prev,
								beneficial: [
									...prev.beneficial,
									{
										name: '',
										address: '',
										nationality: '',
										percentage: '',
										isEditing: true,
									},
								],
							}))
						}
						updateRow={(index, key, value) => {
							data.beneficial[index][key] = value;
							setData((prev) => ({ ...prev, beneficial: [...data.beneficial] }));
						}}
						saveRow={(index) => {
							data.beneficial[index]['isEditing'] = false;
							setData((prev) => ({ ...prev, beneficial: [...data.beneficial] }));
						}}
						editRow={(index) => {
							data.beneficial[index]['isEditing'] = true;
							setData((prev) => ({ ...prev, beneficial: [...data.beneficial] }));
						}}
						deleteRow={(index) => {
							data.beneficial.splice(index, 1);
							setData((prev) => ({ ...prev, beneficial: [...data.beneficial] }));
						}}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>8. Directors and Management (check later)</Form.Label>
				</Form.Group>

				<Form.Group>
					<Form.Label>9. Category of Permit applied for</Form.Label>
					<br />
					<Form.Check
						inline
						label="Specialized"
						type={'radio'}
						checked={permitCategory === PERMIT_CATEGORIES.specialised}
						onChange={() =>
							setData((prev) => ({
								...prev,
								permitCategory: PERMIT_CATEGORIES.specialised,
							}))
						}
					/>
					<Form.Check
						inline
						label="General"
						type={'radio'}
						checked={permitCategory === PERMIT_CATEGORIES.general}
						onChange={() =>
							setData((prev) => ({
								...prev,
								permitCategory: PERMIT_CATEGORIES.general,
							}))
						}
					/>
				</Form.Group>

				{permitCategory === PERMIT_CATEGORIES.specialised && (
					<Form.Group>
						<Form.Label>
							10. a. i. Indicate at most two (2) activities in order of preference
							from either Category A or B from the Commission’s Classification Of
							Upstream Petroleum Industry Companies list provided [Specialized].
						</Form.Label>
						<Form.Check label="Aviation Support Services" type={'checkbox'} />
						<Form.Check label="Calibration Services" type={'checkbox'} />
						<Form.Check label="Data Measurement Services" type={'checkbox'} />
						<Form.Check label="Diving and Hyperbaric Services" type={'checkbox'} />
						<Form.Check label="Dredging Services" type={'checkbox'} />
						<Form.Check label="Drilling/Production Services" type={'checkbox'} />
						<Form.Check label="Environmental Services" type={'checkbox'} />
						<Form.Check label="Exploration Services" type={'checkbox'} />
						<Form.Check
							label="Installation Services/ Marine Contracting"
							type={'checkbox'}
						/>
						<Form.Check label="Integrated Services" type={'checkbox'} />
						<Form.Check
							label="Integrity Test and Inspection Services"
							type={'checkbox'}
						/>
						<Form.Check label="Laboratory Services" type={'checkbox'} />
						<Form.Check label="Major Construction Services" type={'checkbox'} />
						<Form.Check label="Marine Support Services" type={'checkbox'} />
						<Form.Check label="Onshore/Offshore Pipeline Services" type={'checkbox'} />
						<Form.Check label="Research and Development Services" type={'checkbox'} />
						<Form.Check label="Rope Access" type={'checkbox'} />
						<Form.Check label="Special Transportation" type={'checkbox'} />
						<Form.Check label="Surveying/Positioning Services" type={'checkbox'} />
						<Form.Check label="Technical Consultancy" type={'checkbox'} />
						<Form.Check label="Waste Management Services" type={'checkbox'} />
					</Form.Group>
				)}

				{permitCategory === PERMIT_CATEGORIES.general && (
					<Form.Group>
						<Form.Label>
							10. a. ii. Indicate at most two (2) activities in order of preference
							from either Category A or B from the Commission’s Classification Of
							Upstream Petroleum Industry Companies list provided [General].
						</Form.Label>
						<Form.Check label="Automobile Services" type={'checkbox'} />
						<Form.Check label="Banking/Financial Services" type={'checkbox'} />
						<Form.Check
							label="Construction/Rehabilitation/Fabrication Works"
							type={'checkbox'}
						/>
						<Form.Check label="Equipment/Material Supply Services" type={'checkbox'} />
						<Form.Check label="General Consultancy Services" type={'checkbox'} />
						<Form.Check
							label="Haulage/ Freight / Clearing and Forwarding (International/Domestic)"
							type={'checkbox'}
						/>
						<Form.Check label="Heavy Duty Equipment Supply" type={'checkbox'} />
						<Form.Check label="Hospital/ Medical Services" type={'checkbox'} />
						<Form.Check label="Hospitality Services" type={'checkbox'} />
						<Form.Check
							label="Information Technology/ Communication Services"
							type={'checkbox'}
						/>
						<Form.Check label="Insurance Service" type={'checkbox'} />
						<Form.Check label="Maintenance" type={'checkbox'} />
						<Form.Check label="Manpower Supply" type={'checkbox'} />
						<Form.Check label="Printing Services" type={'checkbox'} />
						<Form.Check label="Protocol and Logistics Services" type={'checkbox'} />
						<Form.Check label="Sanitation" type={'checkbox'} />
						<Form.Check label="Supply" type={'checkbox'} />
						<Form.Check label="Supply of Petroleum Products" type={'checkbox'} />
						<Form.Check label="Water Borehole Services" type={'checkbox'} />
						<Form.Check label="Works" type={'checkbox'} />
					</Form.Group>
				)}
				<Form.Group>
					<Form.Label>
						10. b. Provide a description of the range of activities applicant proposes
						to undertake in relation to 10. a.
					</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={description}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								description: e.target.value,
							}))
						}
					/>
				</Form.Group>
			</Form>
		</div>
	);
}

export default CorporateStructureAndServices;
