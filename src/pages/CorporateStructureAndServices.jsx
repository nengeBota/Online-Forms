import { Form } from "react-bootstrap";
import DynamicTable from "../components/DynamicTable";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import Section from "../components/Section";
import {
	fieldNames,
	permitCategoryOptions,
	PERMIT_CATEGORIES,
} from "../constants";

const getValue = (data) => {
	const fields = data[fieldNames.corporateStructureAndServices._];
	const applicantName =
		fields[fieldNames.corporateStructureAndServices.applicantName];
	const dateOfIncorporation =
		fields[fieldNames.corporateStructureAndServices.dateOfIncorporation];
	const placeOfIncorporation =
		fields[fieldNames.corporateStructureAndServices.placeOfIncorporation];
	const contactDetails =
		fields[fieldNames.corporateStructureAndServices.contactDetails._];
	const emailAddress =
		fields[fieldNames.corporateStructureAndServices.emailAddress];
	const website = fields[fieldNames.corporateStructureAndServices.website];
	const contactPerson =
		fields[fieldNames.corporateStructureAndServices.contactPerson._];
	const nameOfSubsidiaryOrAffiliate =
		fields[
			fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate
		];
	const nationalityOfAffiliate =
		fields[fieldNames.corporateStructureAndServices.nationality];
	const corporateStructure =
		fields[fieldNames.corporateStructureAndServices.corporateStructure];
	const description =
		fields[fieldNames.corporateStructureAndServices.description];
	const shareholders =
		fields[fieldNames.corporateStructureAndServices.shareholders._];
	const beneficial =
		fields[fieldNames.corporateStructureAndServices.beneficial._];
	const permitCategory =
		fields[fieldNames.corporateStructureAndServices.permitCategory];
	const executiveDirectors =
		fields[fieldNames.corporateStructureAndServices.executiveDirectors];
	const activities =
		fields[fieldNames.corporateStructureAndServices.activities];

	return {
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
	};
};

function CorporateStructureAndServices({ data, setData, errors, setErrors }) {
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
	} = getValue(data);

	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.corporateStructureAndServices._]: {
				...prev[fieldNames.corporateStructureAndServices._],
				[field]: value,
			},
		}));
	};

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
			onChange(
				fieldNames.corporateStructureAndServices.activities,
				activities
			);
		} else {
			const updatedActivities = activities.filter(
				(each) => each !== name
			);
			onChange(
				fieldNames.corporateStructureAndServices.activities,
				updatedActivities
			);
		}
	};

	const updateErrors = (field, value) => {
		setErrors((prev) => ({ ...prev }));
	};

	return (
		<div>
			<Form>
				<Heading>
					APPLICATION FOR REGISTRATION PERMIT TO OPERATE IN THE
					UPSTREAM PETROLEUM INDUSTRY
				</Heading>
				<hr />
				<Heading>PART ONE – CORPORATE STRUCTURE AND SERVICES</Heading>
				<hr />
				<Section>
					<Form.Label>
						1. Name of Applicant (as indicated on Certificate of
						Incorporation).
					</Form.Label>
					<Form.Control
						placeholder="Applicant's name"
						value={applicantName}
						data-testid="applicant-name"
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.applicantName,
								e.target.value
							);
						}}
						onBlur={(e) => {
							console.log("value of onblur -> ", e);
							console.log(e.target.value);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>2. Date of Incorporation.</Form.Label>
					<Form.Control
						type="date"
						value={dateOfIncorporation}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.dateOfIncorporation,
								e.target.value
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>Place of Incorporation.</Form.Label>
					<Form.Control
						value={placeOfIncorporation}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.placeOfIncorporation,
								e.target.value
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>3. Contact Details</Form.Label>
					<Form.Control
						placeholder="Office Address"
						value={contactDetails.officeAddress}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactDetails._,
								{
									...contactDetails,
									[fieldNames.corporateStructureAndServices
										.contactDetails.officeAddress]:
										e.target.value,
								}
							);
						}}
					/>
					<Form.Control
						placeholder="Postal Address"
						value={contactDetails?.postalAddress}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactDetails._,
								{
									...contactDetails,
									[fieldNames.corporateStructureAndServices
										.contactDetails.postalAddress]:
										e.target.value,
								}
							);
						}}
					/>
					<Form.Control
						placeholder="City"
						value={contactDetails?.city}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactDetails._,
								{
									...contactDetails,
									[fieldNames.corporateStructureAndServices
										.contactDetails.city]: e.target.value,
								}
							);
						}}
					/>
					<Form.Control
						placeholder="Region"
						value={contactDetails?.region}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactDetails._,
								{
									...contactDetails,
									[fieldNames.corporateStructureAndServices
										.contactDetails.region]: e.target.value,
								}
							);
						}}
					/>
					<Form.Control
						placeholder="Country"
						value={contactDetails?.country}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactDetails._,
								{
									...contactDetails,
									[fieldNames.corporateStructureAndServices
										.contactDetails.country]:
										e.target.value,
								}
							);
						}}
					/>
				</Section>
				<br />
				<Section>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						placeholder="Email"
						value={emailAddress}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.emailAddress,
								e.target.value
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>Website (if any)</Form.Label>
					<Form.Control
						placeholder="www.example.com"
						value={website}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.website,
								e.target.value
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>Contact Person</Form.Label>
					<Form.Control
						placeholder="Contact Person"
						value={contactPerson?.name}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactPerson._,
								{
									...contactPerson,
									[fieldNames.corporateStructureAndServices
										.contactPerson.name]: e.target.value,
								}
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>Mobile Number of Contact Person</Form.Label>
					<Form.Control
						placeholder="23326262626"
						value={contactPerson?.mobileNumber}
						type="number"
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.contactPerson._,
								{
									...contactPerson,
									[fieldNames.corporateStructureAndServices
										.contactPerson.mobileNumber]:
										e.target.value,
								}
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>
						4. Name of Subsidiary or Affiliate (if applicable).{" "}
					</Form.Label>
					<Form.Control
						placeholder="NONE"
						value={nameOfSubsidiaryOrAffiliate}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.nameOfSubsidiaryOrAffiliate,
								e.target.value
							);
						}}
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
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.nationalityOfAffiliate,
								e.target.value
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>
						6. Give an outline of the corporate structure, including
						an explanatory diagram, if appropriate, showing parent,
						subsidiary and affiliate companies (if applicable).
					</Form.Label>
					<FileInput
						value={corporateStructure?.fileName}
						onChange={(files) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.corporateStructure,
								files
							);
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
						addNewRow={() => {
							onChange(
								fieldNames.corporateStructureAndServices
									.shareholders._,
								[
									...shareholders,
									{
										name: "",
										address: "",
										nationality: "",
										percentage: "",
										isEditing: true,
									},
								]
							);
						}}
						updateRow={(index, key, value) => {
							shareholders[index][key] = value;
							onChange(
								fieldNames.corporateStructureAndServices
									.shareholders._,
								[...shareholders]
							);
						}}
						saveRow={(index) => {
							shareholders[index]["isEditing"] = false;
							onChange(
								fieldNames.corporateStructureAndServices
									.shareholders._,
								[...shareholders]
							);
						}}
						editRow={(index) => {
							shareholders[index]["isEditing"] = true;
							onChange(
								fieldNames.corporateStructureAndServices
									.shareholders._,
								[...shareholders]
							);
						}}
						deleteRow={(index) => {
							shareholders.splice(index, 1);
							onChange(
								fieldNames.corporateStructureAndServices
									.shareholders._,
								[...shareholders]
							);
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
						addNewRow={() => {
							onChange(
								fieldNames.corporateStructureAndServices
									.beneficial._,
								[
									...beneficial,
									{
										name: "",
										address: "",
										nationality: "",
										percentage: "",
										isEditing: true,
									},
								]
							);
						}}
						updateRow={(index, key, value) => {
							beneficial[index][key] = value;
							onChange(
								fieldNames.corporateStructureAndServices
									.beneficial._,
								[...beneficial]
							);
						}}
						saveRow={(index) => {
							beneficial[index]["isEditing"] = false;
							onChange(
								fieldNames.corporateStructureAndServices
									.beneficial._,
								[...beneficial]
							);
						}}
						editRow={(index) => {
							beneficial[index]["isEditing"] = true;
							onChange(
								fieldNames.corporateStructureAndServices
									.beneficial._,
								[...beneficial]
							);
						}}
						deleteRow={(index) => {
							beneficial.splice(index, 1);
							onChange(
								fieldNames.corporateStructureAndServices
									.beneficial._,
								[...beneficial]
							);
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
					<Form.Control
						as="textarea"
						value={executiveDirectors}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.executiveDirectors,
								e.target.value
							);
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
						onChange={() => {
							setData((prev) => ({
								...prev,
								[fieldNames.corporateStructureAndServices._]: {
									...prev[
										fieldNames.corporateStructureAndServices
											._
									],
									permitCategory:
										PERMIT_CATEGORIES.specialised,
									activities: [],
								},
							}));
						}}
					/>
					<Form.Check
						inline
						label="General"
						type={"radio"}
						checked={permitCategory === PERMIT_CATEGORIES.general}
						onChange={() => {
							setData((prev) => ({
								...prev,
								[fieldNames.corporateStructureAndServices._]: {
									...prev[
										fieldNames.corporateStructureAndServices
											._
									],
									permitCategory: PERMIT_CATEGORIES.general,
									activities: [],
								},
							}));
						}}
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
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.description,
								e.target.value
							);
						}}
					/>
				</Section>
			</Form>
		</div>
	);
}

export default CorporateStructureAndServices;
