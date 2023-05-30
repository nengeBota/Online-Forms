import { Form, FormGroup, FormLabel } from "react-bootstrap";
import Heading from "../components/Heading";
import FileInput from "../components/FileInput";
import { fieldNames } from "../constants.mjs";
import Errors from "../components/Errors";

const fields = fieldNames.orgDevProgramAndBudget;

const getErrors = (field, errors) => {
	return errors?.[fields._]?.[field];
};

function PlansAndProgrammes({ data, setData, errors, setErrors }) {
	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.orgDevProgramAndBudget._]: {
				...prev[fieldNames.orgDevProgramAndBudget._],
				[field]: value,
			},
		}));
	};

	return (
		<Form>
			<Heading>Part 3 - Plans and Programs</Heading>
			<hr />
			<FormLabel>
				a. Organizational Development Programme and Budget
			</FormLabel>
			<br />
			<FormGroup>
				<FormLabel>
					i. Company's strategy for organizational development /
					growth
				</FormLabel>
				<Errors errors={getErrors(fields.orgDevStrategy, errors)} />
				<FileInput
					value={data[fields._][fields.orgDevStrategy]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.orgDevStrategy]: [],
							},
						}));
						onChange(
							fieldNames.orgDevProgramAndBudget.orgDevStrategy,
							file
						);
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					ii. Company's employment plan indicating number of people to
					be employed and budget
				</FormLabel>
				<Errors errors={getErrors(fields.employmentPlan, errors)} />
				<FileInput
					value={data[fields._][fields.employmentPlan]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.employmentPlan]: [],
							},
						}));
						onChange(fields.employmentPlan, file);
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					iii. Indicate expertise to be sourced locally and internationally.
				</FormLabel>
				<Errors errors={getErrors(fields.expertise, errors)} />
				<FileInput
					value={data[fields._][fields.expertise]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.expertise]: [],
							},
						}));
						onChange(fields.expertise, file);
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					iv. GIPC Quotas obtained for expatriate work Permit.
				</FormLabel>
				<Errors errors={getErrors(fields.GIPCQuota, errors)} />
				<FileInput
					value={data[fields._][fields.GIPCQuota]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.GIPCQuota]: [],
							},
						}));
						onChange(fields.GIPCQuota, file);
					}}
				/>
			</FormGroup>
			<br />

			<FormGroup>
				<FormLabel>
					b. Technology Transfer Programme and Budget <br />
					The Technology Transfer Programme should outline
					progressively how skills, know-how and technology shall be
					transferred to the Indigenous Ghanaian Company or Ghanaian
					employees in the indigenous Ghanaian company in the
					following areas:
					<span style={{ fontWeight: "bold" }}>
						{" "}
						i. Technical know-how, ii. Hardware and software, iii.
						Organisational development{" "}
					</span>
				</FormLabel>
				<Errors
					errors={getErrors(
						fields.techTransferProgramAndBudget,
						errors
					)}
				/>
				<FileInput
					value={data[fields._][fields.techTransferProgramAndBudget]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.techTransferProgramAndBudget]: [],
							},
						}));
						onChange(
							fieldNames.orgDevProgramAndBudget
								.techTransferProgramAndBudget,
							file
						);
					}}
				/>
			</FormGroup>
			<br />
			<FormGroup>
				<p style={{ color:"red", fontWeight: "bold" }}>Note: This section should be completed by JV companies only</p>
				<FormLabel>
					c. Training Programe and Budget - (Company's training
					programme should reflect its line of business)
				</FormLabel>
				<Errors
					errors={getErrors(fields.trainingProgramAndBudget, errors)}
				/>
				<FileInput
					value={data[fields._][fields.trainingProgramAndBudget]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.trainingProgramAndBudget]: [],
							},
						}));
						onChange(
							fieldNames.orgDevProgramAndBudget
								.trainingProgramAndBudget,
							file
						);
					}}
				/>
			</FormGroup>
			<br />
			<FormGroup>
				<FormLabel>
					d. Corporate Social Responsibility & Social Development
					Programme and Budget
				</FormLabel>
				<Errors
					errors={getErrors(
						fields.csrAndSocialDevProgramAndBudget,
						errors
					)}
				/>
				<FileInput
					value={
						data[fields._][fields.csrAndSocialDevProgramAndBudget]
					}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fields._]: {
								...prev[fields._],
								[fields.csrAndSocialDevProgramAndBudget]: [],
							},
						}));
						onChange(
							fieldNames.orgDevProgramAndBudget
								.csrAndSocialDevProgramAndBudget,
							file
						);
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default PlansAndProgrammes;
