import { Form } from "react-bootstrap";
import DynamicTable from "../components/DynamicTable";
import Section from "../components/Section";
import { permitCategoryOptions, PERMIT_CATEGORIES } from "../constants";

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
		executiveDirectors,
		activities,
	} = data;

	const selectedPermitCategories =
		permitCategory === PERMIT_CATEGORIES.specialised
			? permitCategoryOptions.specialised
			: permitCategoryOptions.general;

	const isActivityChecked = (value) => {
		if (Array.isArray(activities))
			return activities?.some((each) => each === value);

		return false;
	};

	const onToggleActivity = (e) => {
		const { name, checked } = e.target;

		if (checked) {
			activities.push(name);
			setData((prev) => ({
				...prev,
				activities,
			}));
		} else {
			const updatedActivities = activities.filter(
				(each) => each !== name
			);
			setData((prev) => ({ ...prev, activities: updatedActivities }));
		}
	};

	return (
		<div>
			<Form>
				<h1>
					APPLICATION FOR REGISTRATION PERMIT TO OPERATE IN THE
					UPSTREAM PETROLEUM INDUSTRY
				</h1>
				<hr />
				<h2>PART ONE – CORPORATE STRUCTURE AND SERVICES</h2>
				<hr />
				<Section>
					<Form.Label>
						1. Name of Applicant (as indicated on Certificate of
						Incorporation).
					</Form.Label>
					<Form.Control
						placeholder="Applicant's name"
						value={applicantName}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								applicantName: e.target.value,
							}))
						}
					/>
				</Section>
				<Section>
					<Form.Label>2. Date of Incorporation.</Form.Label>
					<Form.Control
						type="date"
						value={dateOfIncorporation}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								dateOfIncorporation: e.target.value,
							}))
						}
					/>
				</Section>
				<Section>
					<Form.Label>Place of Incorporation.</Form.Label>
					<Form.Control
						value={placeOfIncorporation}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								placeOfIncorporation: e.target.value,
							}))
						}
					/>
				</Section>
				<Section>
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
								contactDetails: {
									...prev?.contactDetails,
									city: e.target.value,
								},
							}))
						}
					/>
					<Form.Control
						placeholder="Region"
						value={contactDetails?.region}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactDetails: {
									...prev?.contactDetails,
									region: e.target.value,
								},
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
				</Section>
				<br />
				<Section>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						placeholder="Email"
						value={emailAddress}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								emailAddress: e.target.value,
							}))
						}
					/>
				</Section>
				<Section>
					<Form.Label>Website (if any)</Form.Label>
					<Form.Control
						placeholder="www.example.com"
						value={website}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								website: e.target.value,
							}))
						}
					/>
				</Section>
				<Section>
					<Form.Label>Contact Person</Form.Label>
					<Form.Control
						placeholder="Contact Person"
						value={contactPerson?.name}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								contactPerson: {
									...prev?.contactPerson,
									name: e.target.value,
								},
							}))
						}
					/>
				</Section>
				<Section>
					<Form.Label>Mobile Number of Contact Person</Form.Label>
					<Form.Control
						placeholder="23326262626"
						value={contactPerson?.mobileNumber}
						type="number"
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
				</Section>
				<Section>
					<Form.Label>
						4. Name of Subsidiary or Affiliate (if applicable).{" "}
					</Form.Label>
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
				</Section>

				<Section>
					<Form.Label>
						5. Nationality of Parent Company or Affiliate (if
						applicable)
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
				</Section>
				<Section>
					<Form.Label>
						6. Give an outline of the corporate structure, including
						an explanatory diagram, if appropriate, showing parent,
						subsidiary and affiliate companies (if applicable).
					</Form.Label>
					<Form.Control
						type="file"
						value={corporateStructure}
						onChange={(e) => {
							setData((prev) => ({
								...prev,
								corporateStructure: e.target.value,
							}));
						}}
					/>
				</Section>

				<Section>
					<Form.Label>
						7a. List all Individuals/Companies with shares in the
						applicant company.
					</Form.Label>

					<DynamicTable
						columns={[
							{ name: "Shareholders", key: "name" },
							{ name: "Address", key: "address" },
							{ name: "Nationality", key: "nationality" },
							{ name: "Percentage", key: "percentage" },
						]}
						data={shareholders}
						addNewRow={() =>
							setData((prev) => ({
								...prev,
								shareholders: [
									...prev.shareholders,
									{
										name: "",
										address: "",
										nationality: "",
										percentage: "",
										isEditing: true,
									},
								],
							}))
						}
						updateRow={(index, key, value) => {
							data.shareholders[index][key] = value;
							setData((prev) => ({
								...prev,
								shareholders: [...data.shareholders],
							}));
						}}
						saveRow={(index) => {
							data.shareholders[index]["isEditing"] = false;
							setData((prev) => ({
								...prev,
								shareholders: [...data.shareholders],
							}));
						}}
						editRow={(index) => {
							data.shareholders[index]["isEditing"] = true;
							setData((prev) => ({
								...prev,
								shareholders: [...data.shareholders],
							}));
						}}
						deleteRow={(index) => {
							data.shareholders.splice(index, 1);
							setData((prev) => ({
								...prev,
								shareholders: [...data.shareholders],
							}));
						}}
					/>
				</Section>
				<Section>
					<Form.Label>
						7b. Beneficial Ownership - if shareholders in 7a. are
						companies, please provide a list all individual
						shareholders in the company stated in 7a.
					</Form.Label>

					<DynamicTable
						columns={[
							{ name: "Beneficial", key: "name" },
							{ name: "Address", key: "address" },
							{ name: "Nationality", key: "nationality" },
							{ name: "Percentage", key: "percentage" },
						]}
						data={beneficial}
						addNewRow={() =>
							setData((prev) => ({
								...prev,
								beneficial: [
									...prev.beneficial,
									{
										name: "",
										address: "",
										nationality: "",
										percentage: "",
										isEditing: true,
									},
								],
							}))
						}
						updateRow={(index, key, value) => {
							data.beneficial[index][key] = value;
							setData((prev) => ({
								...prev,
								beneficial: [...data.beneficial],
							}));
						}}
						saveRow={(index) => {
							data.beneficial[index]["isEditing"] = false;
							setData((prev) => ({
								...prev,
								beneficial: [...data.beneficial],
							}));
						}}
						editRow={(index) => {
							data.beneficial[index]["isEditing"] = true;
							setData((prev) => ({
								...prev,
								beneficial: [...data.beneficial],
							}));
						}}
						deleteRow={(index) => {
							data.beneficial.splice(index, 1);
							setData((prev) => ({
								...prev,
								beneficial: [...data.beneficial],
							}));
						}}
					/>
				</Section>
				<Section>
					<Form.Label>
						8. List Executive Directors and Senior Management Team
						of the Company (Please do not list non-executive
						directors)
					</Form.Label>
					<br />
					<DynamicTable
						columns={[
							{ name: "Name", key: "mgtname" },
							{ name: "Occupation", key: "occupation" },
							{ name: "Nationality", key: "nationality" },
							{ name: "Company Positon", key: "position" },
						]}
						data={executiveDirectors}
						addNewRow={() =>
							setData((prev) => ({
								...prev,
								executiveDirectors: [
									...prev.executiveDirectors,
									{
										mgtname: "",
										occupation: "",
										nationality: "",
										position: "",
										isEditing: true,
									},
								],
							}))
						}
						updateRow={(index, key, value) => {
							data.executiveDirectors[index][key] = value;
							setData((prev) => ({
								...prev,
								executiveDirectors: [...data.executiveDirectors],
							}));
						}}
						saveRow={(index) => {
							data.executiveDirectors[index]["isEditing"] = false;
							setData((prev) => ({
								...prev,
								executiveDirectors: [...data.executiveDirectors],
							}));
						}}
						editRow={(index) => {
							data.executiveDirectors[index]["isEditing"] = true;
							setData((prev) => ({
								...prev,
								executiveDirectors: [...data.executiveDirectors],
							}));
						}}
						deleteRow={(index) => {
							data.executiveDirectors.splice(index, 1);
							setData((prev) => ({
								...prev,
								executiveDirectors: [...data.executiveDirectors],
							}));
						}}
					/>
				</Section>

				<Section>
					<Form.Label>9. Category of Permit applied for</Form.Label>
					<br />
					<Form.Check
						inline
						label="Specialized"
						type={"radio"}
						checked={
							permitCategory === PERMIT_CATEGORIES.specialised
						}
						onChange={() =>
							setData((prev) => ({
								...prev,
								permitCategory: PERMIT_CATEGORIES.specialised,
								activities: [],
							}))
						}
					/>
					<Form.Check
						inline
						label="General"
						type={"radio"}
						checked={permitCategory === PERMIT_CATEGORIES.general}
						onChange={() =>
							setData((prev) => ({
								...prev,
								permitCategory: PERMIT_CATEGORIES.general,
								activities: [],
							}))
						}
					/>
				</Section>

				<Section>
					<Form.Label>
						{permitCategory === PERMIT_CATEGORIES.specialised
							? `10. a. i. Indicate at most two (2) activities in
							order of preference from either Category A or B from
							the Commission’s Classification Of Upstream
							Petroleum Industry Companies list provided
							[Specialized].`
							: `10. a. ii. Indicate at most two (2) activities in
							order of preference from either Category A or B from
							the Commission’s Classification Of Upstream
							Petroleum Industry Companies list provided
							[General].`}
					</Form.Label>
					{selectedPermitCategories.map((each) => (
						<Form.Check
							label={each.label}
							name={each.name}
							onChange={onToggleActivity}
							checked={isActivityChecked(each.name)}
						/>
					))}
				</Section>

				<Section>
					<Form.Label>
						10. b. Provide a description of the range of activities
						applicant proposes to undertake in relation to 10. a.
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
				</Section>
			</Form>
		</div>
	);
}

export default CorporateStructureAndServices;
