import { Form, FormControl, FormGroup } from "react-bootstrap";
import DynamicTable from "../components/DynamicTable";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import { fieldNames, financialCapabilityOptions } from "../constants";

const columns = [
	{
		name: "Description of Contract",
		key: fieldNames.detailsOfExperience.contractsExecuted
			.descriptionOfContract,
	},
	{
		name: "Name of company work was done for",
		key: fieldNames.detailsOfExperience.contractsExecuted
			.nameOfCompanyWorkWasDoneFor,
	},
	{
		name: "Contract Duration (Start date - end date)",
		key: fieldNames.detailsOfExperience.contractsExecuted.contractDuration,
	},
	{
		name: "Contract Value",
		key: fieldNames.detailsOfExperience.contractsExecuted.contractValue,
	},
];

const newDetailsOfExperience = {
	isEditing: true,
	descriptionOfContract: "",
	nameOfCompanyWorkWasDoneFor: "",
	contractDuration: "",
	contractValue: "",
};

function FinancialCapability({ data, setData }) {
	const { financialCapability } = data;
	const { whatApplies, uploadedDocument, sourceOfFunds } =
		financialCapability;
	const mgtAndTechnicalCompetencies =
		data[fieldNames.mgtAndTechnicalCompetencies._];
	const orgChart =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.orgChart
		];
	const detailedStaffInfo =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo
		];
	const requiredExpertise =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.requiredExpertise
		];
	const sourcesOfEquipment =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment
		];

	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.mgtAndTechnicalCompetencies._]: {
				...prev[fieldNames.mgtAndTechnicalCompetencies._],
				[field]: value,
			},
		}));
	};

	const companyExperience =
		data[fieldNames.detailsOfExperience._][
			fieldNames.detailsOfExperience.companyExperience
		];
	const countries =
		data[fieldNames.detailsOfExperience._][
			fieldNames.detailsOfExperience.countries
		];
	const contractsExecuted =
		data[fieldNames.detailsOfExperience._][
			fieldNames.detailsOfExperience.contractsExecuted._
		];

	const onstage = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.detailsOfExperience._]: {
				...prev[fieldNames.detailsOfExperience._],
				[field]: value,
			},
		}));
	};

	return (
		<div>
			<Heading>
				Part Two - Financial Capability and Technical Competency
			</Heading>
			<h4>A. Financial Capability</h4>
			<hr />

			<FormGroup>
				<ol>
					<li>
						Please provide what applies to your company *
						{financialCapabilityOptions.map((each, i) => (
							<p key={i}>
								<input
									key={i}
									type="radio"
									name="whatApplies"
									value={each.value}
									checked={whatApplies === each.value}
									style={{
										marginRight: "10px",
										marginBottom: 0,
									}}
									onChange={(e) => {
										console.log("event -> ", e);
										setData((prev) => ({
											...prev,
											[fieldNames.finCapability._]: {
												...prev[
													fieldNames.finCapability._
												],
												[fieldNames.finCapability
													.whatApplies]:
													e.target.value,
											},
										}));
									}}
								/>
								{each.text}
							</p>
						))}
						<br />
						Please upload documents as per your choice *
						<br />
						<FileInput
							onChange={(file) =>
								setData((prev) => {
									return {
										...prev,
										[fieldNames.finCapability._]: {
											...prev[fieldNames.finCapability._],
											[fieldNames.finCapability
												.whatAppliesUploadedDocument]:
												file,
										},
									};
								})
							}
						/>
					</li>

					<li>
						Indicate sources where applicant intends raising funds
						for its operations in Ghana *
						<FormGroup>
							<Form.Control
								as="textarea"
								value={sourceOfFunds}
								onChange={(e) => {
									setData((prev) => ({
										...prev,
										[fieldNames.finCapability._]: {
											...prev[fieldNames.finCapability._],
											[fieldNames.finCapability
												.sourceOfFunds]: e.target.value,
										},
									}));
								}}
							/>
						</FormGroup>
					</li>
				</ol>
			</FormGroup>

			<div>
				<h4>B. Management and Technical Competencies</h4>
				<hr />
				<FormGroup>
					<div>
						3.a. Provide Organizational Chart <br />
						<FileInput
							onChange={(file) => {
								onChange(
									fieldNames.mgtAndTechnicalCompetencies
										.orgChart,
									file
								);
							}}
						/>
					</div>

					<div>
						b. Provide detailed information on the number of staff
						and their expertise. (Include Name, Gender, Position and
						Nationality of Staff). * <br />
						<FileInput
							onChange={(file) => {
								onChange(
									fieldNames.mgtAndTechnicalCompetencies
										.detailedStaffInfo,
									file
								);
							}}
						/>
					</div>

					<div>
						c. Indicate expertise to be sourced locally and
						internationally. * <br />
						<Form.Control
							as="textarea"
							value={requiredExpertise}
							onChange={(e) => {
								onChange(
									fieldNames.mgtAndTechnicalCompetencies
										.requiredExpertise,
									e.target.value
								);
							}}
						/>
					</div>

					<div>
						4. Indicate sources from which applicant proposes to
						obtain equipment and other facilities to support
						petroleum activities. * <br />
						<Form.Control
							as="textarea"
							value={sourcesOfEquipment}
							onChange={(e) => {
								onChange(
									fieldNames.mgtAndTechnicalCompetencies
										.sourcesOfEquipment,
									e.target.value
								);
							}}
						/>
					</div>
				</FormGroup>
			</div>

			<br />
			<h4>C. Details of Experience</h4>
			<hr />
			<FormGroup>
				5. Describe company's past petroleum industry experience,
				including locations and dates of significant activities or
				contracts. (this should be the past petroleum industry
				experience of the applicant and not the Affiliate/Parent
				Company) *
				<br />
				<Form.Control
					as="textarea"
					value={companyExperience}
					onChange={(e) =>
						onstage(
							fieldNames.detailsOfExperience.companyExperience,
							e.target.value
						)
					}
				/>
			</FormGroup>

			<FormGroup>
				6. In which countries do applicant, parent company and
				affiliates currently have Petroleum industry activities or
				contracts? List all current operations globally. * <br />
				<Form.Control
					as="textarea"
					value={countries}
					onChange={(e) =>
						onstage(
							fieldNames.detailsOfExperience.countries,
							e.target.value
						)
					}
				/>
			</FormGroup>

			<FormGroup>
				7. Indicate contracts executed in respect of upstream petroleum
				support services over the past year. *
				<br />
				<DynamicTable
					columns={columns}
					data={contractsExecuted}
					addNewRow={() => {
						contractsExecuted.push(newDetailsOfExperience);
						onstage(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					updateRow={(index, key, value) => {
						contractsExecuted[index][key] = value;
						onstage(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					saveRow={(index) => {
						contractsExecuted[index].isEditing = false;
						onstage(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					editRow={(index) => {
						contractsExecuted[index].isEditing = true;
						onstage(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					deleteRow={(index) => {
						contractsExecuted.splice(index, 1);
						onstage(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
				/>
			</FormGroup>
		</div>
	);
}

export default FinancialCapability;
