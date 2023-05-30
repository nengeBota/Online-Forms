import { Form, FormControl, FormGroup } from "react-bootstrap";
import DynamicTable from "../components/DynamicTable";
import Errors from "../components/Errors";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import { fieldNames, financialCapabilityOptions } from "../constants.mjs";
import validations from "../constants/fieldValidations";
import { formatContractsExecutedErrors } from "../helpers/formatDetailsOfExperienceErrors";

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

const getFinCapabilityErrors = (field, errors) =>
	errors?.[fieldNames.finCapability._]?.[field] || [];

const getMgtErrors = (field, errors) =>
	errors?.[fieldNames.mgtAndTechnicalCompetencies._]?.[field] || [];

const getDetailsOfExperienceErrors = (field, errors) =>
	errors?.[fieldNames.detailsOfExperience._]?.[field] || [];

function FinancialCapability({ data, setData, errors, setErrors }) {
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
						<div>Please provide what applies to your company *</div>
						<Errors
							errors={getFinCapabilityErrors(
								fieldNames.finCapability.whatApplies,
								errors
							)}
						/>
						{financialCapabilityOptions.map((each, i) => (
							<p key={i}>
								<input
									key={"whatapplies"}
									type="radio"
									name="whatApplies"
									value={each.value}
									checked={whatApplies === each.value}
									style={{
										marginRight: "10px",
										marginBottom: 0,
									}}
									onChange={(e) => {
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
						
						<div>Please upload documents as per your choice *</div>
						<Errors
							errors={getFinCapabilityErrors(
								fieldNames.finCapability
									.whatAppliesUploadedDocument,
								errors
							)}
						/>
						<FileInput
							value={
								data[fieldNames.finCapability._][
									fieldNames.finCapability
										.whatAppliesUploadedDocument
								]
							}
							onChange={(file) => {
								setErrors((prev) => ({
									...prev,
									[fieldNames.finCapability._]: {
										...prev[fieldNames.finCapability._],
										[fieldNames.finCapability
											.whatAppliesUploadedDocument]: [],
									},
								}));

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
								});
							}}
						/>
					</li>
							<br></br>
					<li>
						<div>
							Indicate sources where applicant intends raising
							funds for its operations in Ghana *
						</div>

						<Errors
							errors={getFinCapabilityErrors(
								fieldNames.finCapability.sourceOfFunds,
								errors
							)}
						/>
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
								onBlur={() => {
									const { error } = validations[
										fieldNames.finCapability._
									][
										fieldNames.finCapability.sourceOfFunds
									]?.safeParse(
										data[fieldNames.finCapability._][
											fieldNames.finCapability
												.sourceOfFunds
										]
									);
									setErrors((prev) => ({
										...prev,
										[fieldNames.finCapability._]: {
											...prev[fieldNames.finCapability._],
											[fieldNames.finCapability
												.sourceOfFunds]:
												error?.format()?._errors,
										},
									}));
								}}
							/>
						</FormGroup>
					</li>
				</ol>
			</FormGroup>

			<div>
				<h4>B. Key Personnel and Technical Competencies</h4>
				<hr />
				<FormGroup>
					<div>
						<div>3. Provide Organizational Chart</div>
						<Errors
							errors={getMgtErrors(
								fieldNames.mgtAndTechnicalCompetencies.orgChart,
								errors
							)}
						/>
						<FileInput
							value={
								data[fieldNames.mgtAndTechnicalCompetencies._][
									fieldNames.mgtAndTechnicalCompetencies
										.orgChart
								]
							}
							onChange={(file) => {
								setErrors((prev) => ({
									...prev,
									[fieldNames.mgtAndTechnicalCompetencies._]:
										{
											...prev[
												fieldNames
													.mgtAndTechnicalCompetencies
													._
											],
											[fieldNames
												.mgtAndTechnicalCompetencies
												.orgChart]: [],
										},
								}));

								onChange(
									fieldNames.mgtAndTechnicalCompetencies
										.orgChart,
									file
								);
							}}
						/>
					</div>

					<br />

					<div>
						<div>
							4. Provide detailed information on the number of
							staff and their expertise. (Include Name, Gender,
							Position and Nationality of Staff). *
						</div>

						<Errors
							errors={getMgtErrors(
								fieldNames.mgtAndTechnicalCompetencies
									.detailedStaffInfo,
								errors
							)}
						/>
						<FileInput
							value={
								data[fieldNames.mgtAndTechnicalCompetencies._][
									fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo
								]
							}
							onChange={(file) => {
								setErrors((prev) => ({
									...prev,
									[fieldNames.mgtAndTechnicalCompetencies._]:
										{
											...prev[
												fieldNames
													.mgtAndTechnicalCompetencies
													._
											],
											[fieldNames
												.mgtAndTechnicalCompetencies
												.detailedStaffInfo]: [],
										},
								}));

								onChange(
									fieldNames.mgtAndTechnicalCompetencies
										.detailedStaffInfo,
									file
								);
							}}
						/>
					</div>
					<br />
					<div>
						<div>
							5. (this has to be removed) Indicate expertise to be sourced locally and
							internationally. *
						</div>

						<Errors
							errors={getMgtErrors(
								fieldNames.mgtAndTechnicalCompetencies
									.requiredExpertise,
								errors
							)}
						/>
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
							onBlur={() => {
								const { error } = validations[
									fieldNames.mgtAndTechnicalCompetencies._
								][
									fieldNames.mgtAndTechnicalCompetencies
										.requiredExpertise
								]?.safeParse(
									data[
										fieldNames.mgtAndTechnicalCompetencies._
									][
										fieldNames.mgtAndTechnicalCompetencies
											.requiredExpertise
									]
								);
								setErrors((prev) => ({
									...prev,
									[fieldNames.mgtAndTechnicalCompetencies._]:
										{
											...prev[
												fieldNames
													.mgtAndTechnicalCompetencies
													._
											],
											[fieldNames
												.mgtAndTechnicalCompetencies
												.requiredExpertise]:
												error?.format()?._errors,
										},
								}));
							}}
						/>
					</div>

					<br />
					<br />
					<div>
						<div>
							5. Indicate sources from which applicant proposes to
							obtain equipment and other facilities to support
							petroleum activities. *
						</div>

						<Errors
							errors={getMgtErrors(
								fieldNames.mgtAndTechnicalCompetencies
									.sourcesOfEquipment,
								errors
							)}
						/>
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
							onBlur={() => {
								const { error } = validations[
									fieldNames.mgtAndTechnicalCompetencies._
								][
									fieldNames.mgtAndTechnicalCompetencies
										.sourcesOfEquipment
								]?.safeParse(
									data[
										fieldNames.mgtAndTechnicalCompetencies._
									][
										fieldNames.mgtAndTechnicalCompetencies
											.sourcesOfEquipment
									]
								);
								setErrors((prev) => ({
									...prev,
									[fieldNames.mgtAndTechnicalCompetencies._]:
										{
											...prev[
												fieldNames
													.mgtAndTechnicalCompetencies
													._
											],
											[fieldNames
												.mgtAndTechnicalCompetencies
												.sourcesOfEquipment]:
												error?.format()?._errors,
										},
								}));
							}}
						/>
					</div>
				</FormGroup>
			</div>

			<br />
			<h4>C. Details of Experience</h4>
			<hr />
			<FormGroup>
				<div>
					5. Describe company's past petroleum industry experience,
					including locations and dates of significant activities or
					contracts. (this should be the past petroleum industry
					experience of the applicant and not the Affiliate/Parent
					Company) *
				</div>
				<Errors
					errors={getDetailsOfExperienceErrors(
						fieldNames.detailsOfExperience.companyExperience,
						errors
					)}
				/>

				<Form.Control
					as="textarea"
					value={companyExperience}
					onChange={(e) =>
						onstage(
							fieldNames.detailsOfExperience.companyExperience,
							e.target.value
						)
					}
					onBlur={() => {
						const { error } = validations[
							fieldNames.detailsOfExperience._
						][
							fieldNames.detailsOfExperience.companyExperience
						]?.safeParse(
							data[fieldNames.detailsOfExperience._][
								fieldNames.detailsOfExperience.companyExperience
							]
						);

						setErrors((prev) => ({
							...prev,
							[fieldNames.detailsOfExperience._]: {
								...prev[fieldNames.detailsOfExperience._],
								[fieldNames.detailsOfExperience
									.companyExperience]:
									error?.format()?._errors,
							},
						}));
					}}
				/>
			</FormGroup>
			<br />
			<br />
			<FormGroup>
				<div>
					6. In which countries do applicant, parent company and
					affiliates currently have Petroleum industry activities or
					contracts? List all current operations globally. *{" "}
				</div>
				<Errors
					errors={getDetailsOfExperienceErrors(
						fieldNames.detailsOfExperience.countries,
						errors
					)}
				/>
				<Form.Control
					as="textarea"
					value={countries}
					onChange={(e) =>
						onstage(
							fieldNames.detailsOfExperience.countries,
							e.target.value
						)
					}
					onBlur={() => {
						const { error } = validations[
							fieldNames.detailsOfExperience._
						][fieldNames.detailsOfExperience.countries]?.safeParse(
							data[fieldNames.detailsOfExperience._][
								fieldNames.detailsOfExperience.countries
							]
						);

						setErrors((prev) => ({
							...prev,
							[fieldNames.detailsOfExperience._]: {
								...prev[fieldNames.detailsOfExperience._],
								[fieldNames.detailsOfExperience.countries]:
									error?.format()?._errors,
							},
						}));
					}}
				/>
			</FormGroup>
			<br />
			<br />
			<FormGroup>
				<div>
					7. Indicate contracts executed in respect of upstream
					petroleum support services over the past year. *
				</div>

				<DynamicTable
					columns={columns}
					data={contractsExecuted}
					errors={
						errors[fieldNames.detailsOfExperience._][
							fieldNames.detailsOfExperience.contractsExecuted._
						]
					}
					onBlur={() => {
						const { error } = validations[
							fieldNames.detailsOfExperience._
						][
							fieldNames.detailsOfExperience.contractsExecuted._
						]?.safeParse(
							data[fieldNames.detailsOfExperience._][
								fieldNames.detailsOfExperience.contractsExecuted
									._
							]
						);

						setErrors((prev) => ({
							...prev,
							[fieldNames.detailsOfExperience._]: {
								...prev[fieldNames.detailsOfExperience._],
								[fieldNames.detailsOfExperience
									.contractsExecuted._]:
									formatContractsExecutedErrors(
										error?.format(),
										contractsExecuted
									),
							},
						}));
					}}
					addNewRow={() => {
						contractsExecuted.push({ ...newDetailsOfExperience });
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
