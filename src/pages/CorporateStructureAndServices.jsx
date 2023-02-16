import { Form } from "react-bootstrap";
import { z } from "zod";
import DynamicTable from "../components/DynamicTable";
import Errors from "../components/Errors";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import Section from "../components/Section";
import {
	fieldNames,
	permitCategoryOptions,
	PERMIT_CATEGORIES,
} from "../constants.mjs";
import fieldsConfig from "../constants/fieldsConfig";
import {
	corporateStructureAndServicesDesc,
	dateBeforeToday,
	nonEmptyString,
} from "../stateDescription.mjs";

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

const getError = (field, errors) =>
	errors[fieldNames.corporateStructureAndServices._][field];

function formatError(error) {
	return error?.format()?._errors;
}

const CORP = fieldNames.corporateStructureAndServices;

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
			if (activities.length >= 2) return;
			activities.push(name);
			onChange(CORP.activities, activities);

			if (activities.length !== 2) {
				updateErrors(CORP.activities, [
					"Please select exactly 2 of the options available",
				]);
			} else {
				updateErrors(CORP.activities, []);
			}
		} else {
			const updatedActivities = activities.filter(
				(each) => each !== name
			);
			onChange(CORP.activities, updatedActivities);

			if (updatedActivities.length !== 2) {
				updateErrors(CORP.activities, [
					"Please select exactly 2 of the options available",
				]);
			} else {
				updateErrors(CORP.activities, []);
			}
		}
	};

	const updateErrors = (field, value) => {
		setErrors((prev) => ({
			...prev,
			[fieldNames.corporateStructureAndServices._]: {
				...prev[fieldNames.corporateStructureAndServices._],
				[field]: value,
			},
		}));
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
					<Errors
						errors={getError(
							fieldNames.corporateStructureAndServices
								.applicantName,
							errors
						)}
						testId={
							fieldNames.corporateStructureAndServices
								.applicantName
						}
					/>

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
							const { error } = nonEmptyString.safeParse(
								e.target.value
							);

							const errors = error?.format();

							updateErrors(
								fieldNames.corporateStructureAndServices
									.applicantName,
								errors?._errors
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>2. Date of Incorporation.</Form.Label>
					<Errors
						errors={getError(
							fieldNames.corporateStructureAndServices
								.dateOfIncorporation,
							errors
						)}
						tesId={
							fieldNames.corporateStructureAndServices
								.dateOfIncorporation
						}
					/>
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
						onBlur={(e) => {
							const { error } = dateBeforeToday.safeParse(
								new Date(e.target.value)
							);

							const errors = error?.format();

							updateErrors(
								fieldNames.corporateStructureAndServices
									.dateOfIncorporation,
								errors?._errors
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>Place of Incorporation.</Form.Label>
					<Errors
						errors={getError(
							fieldNames.corporateStructureAndServices
								.placeOfIncorporation,
							errors
						)}
						testId={
							fieldNames.corporateStructureAndServices
								.placeOfIncorporation
						}
					/>
					<Form.Control
						value={placeOfIncorporation}
						onChange={(e) => {
							onChange(
								fieldNames.corporateStructureAndServices
									.placeOfIncorporation,
								e.target.value
							);
						}}
						onBlur={(e) => {
							const { error } = nonEmptyString.safeParse(
								e.target.value
							);

							updateErrors(
								fieldNames.corporateStructureAndServices
									.placeOfIncorporation,
								formatError(error)
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>3. Contact Details</Form.Label>
					<Errors
						testId={
							fieldNames.corporateStructureAndServices
								.contactDetails.officeAddress
						}
						errors={getError(
							fieldNames.corporateStructureAndServices
								.contactDetails.officeAddress,
							errors
						)}
					/>
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
						onBlur={(e) => {
							const { error } = nonEmptyString.safeParse(
								contactDetails.officeAddress
							);

							updateErrors(
								fieldNames.corporateStructureAndServices
									.contactDetails.officeAddress,
								formatError(error)
							);
						}}
					/>

					<Errors
						testId={CORP.contactDetails.postalAddress}
						errors={getError(
							CORP.contactDetails.postalAddress,
							errors
						)}
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
						onBlur={(e) => {
							const { error } = nonEmptyString.safeParse(
								contactDetails?.postalAddress
							);
							updateErrors(
								CORP.contactDetails.postalAddress,
								formatError(error)
							);
						}}
					/>

					<Errors
						testId={CORP.contactDetails?.city}
						errors={getError(CORP.contactDetails.city, errors)}
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
						onBlur={() => {
							const { error } = nonEmptyString.safeParse(
								contactDetails?.city
							);
							updateErrors(
								CORP.contactDetails.city,
								formatError(error)
							);
						}}
					/>

					<Errors
						testId={CORP.contactDetails?.region}
						errors={getError(CORP.contactDetails?.region, errors)}
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
						onBlur={() => {
							const { error } = nonEmptyString.safeParse(
								contactDetails?.region
							);
							updateErrors(
								CORP.contactDetails.region,
								formatError(error)
							);
						}}
					/>

					<Errors
						testId={CORP.contactDetails?.country}
						errors={getError(CORP.contactDetails?.country, errors)}
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
						onBlur={() => {
							const { error } = nonEmptyString.safeParse(
								contactDetails?.country
							);
							updateErrors(
								CORP.contactDetails.country,
								formatError(error)
							);
						}}
					/>
				</Section>
				<br />
				<Section>
					<Form.Label>Email address</Form.Label>

					<Errors
						testId={CORP.emailAddress}
						errors={getError(CORP.emailAddress, errors)}
					/>
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
						onBlur={() => {
							const { error } = z
								.string()
								.email()
								.safeParse(emailAddress);

							updateErrors(CORP.emailAddress, formatError(error));
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
					<Errors
						testId={CORP.contactPerson?.name}
						errors={getError(CORP.contactPerson.name, errors)}
					/>
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
						onBlur={() => {
							const { error } = nonEmptyString.safeParse(
								contactPerson?.name
							);
							updateErrors(
								CORP.contactPerson.name,
								formatError(error)
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>Mobile Number of Contact Person</Form.Label>
					<Errors
						testId={CORP.contactPerson.mobileNumber}
						errors={getError(
							CORP.contactPerson.mobileNumber,
							errors
						)}
					/>
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
						onBlur={() => {
							const { error } = z
								.string()
								.min(1, { message: "Phone number is required" })
								.safeParse(contactPerson?.mobileNumber);

							updateErrors(
								CORP.contactPerson.mobileNumber,
								formatError(error)
							);
						}}
					/>
				</Section>
				<Section>
					<Form.Label>
						4. Name of Subsidiary or Affiliate (if applicable).{" "}
					</Form.Label>
					<Form.Control
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
							{
								name: "Shareholders",
								key: "name",
								validate: (row, col, val) => {
									const { error } =
										nonEmptyString.safeParse(val);
									errors[CORP.shareholders._][row][col] =
										formatError(error);
									setErrors({ ...errors });
								},
							},
							{ name: "Address", key: "address" },
							{ name: "Nationality", key: "nationality" },
							{ name: "Percentage", key: "percentage" },
						]}
						data={shareholders}
						onBlur={() => {}}
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
						errors={
							errors?.[
								fieldNames.corporateStructureAndServices._
							]?.[
								fieldNames.corporateStructureAndServices
									.shareholders._
							]
						}
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
						errors={
							errors?.[
								fieldNames.corporateStructureAndServices._
							]?.[
								fieldNames.corporateStructureAndServices
									.beneficial._
							]
						}
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
					<Errors
						testId={CORP.executiveDirectors}
						errors={getError(CORP.executiveDirectors, errors)}
					/>
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
						onBlur={() => {
							const { error } =
								nonEmptyString.safeParse(executiveDirectors);
							updateErrors(
								CORP.executiveDirectors,
								formatError(error)
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
					<Errors
						textId={CORP.activities}
						errors={getError(CORP.activities, errors)}
					/>
					{selectedPermitCategories.map((each) => (
						<Form.Check
							key={each.name}
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
					<Errors
						testId={CORP.description}
						errors={getError(CORP.description, errors)}
					/>
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
						onBlur={() => {
							const { error } =
								nonEmptyString.safeParse(description);
							updateErrors(CORP.description, formatError(error));
						}}
					/>
				</Section>
			</Form>
		</div>
	);
}

export default CorporateStructureAndServices;
