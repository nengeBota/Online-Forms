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
			<br />

			<FormGroup>
				<FormLabel>
					b. Technology Transfer Programme and Budget
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

			<FormGroup>
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
                    value={data[fields._][fields.csrAndSocialDevProgramAndBudget]}
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
