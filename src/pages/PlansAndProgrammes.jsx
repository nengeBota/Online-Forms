import { Form, FormGroup, FormLabel } from "react-bootstrap";
import Heading from "../components/Heading";
import { fieldNames } from "../constants";

function PlansAndProgrammes({ data, setData }) {
	const orgDevStrategy =
		data[fieldNames.orgDevProgramAndBudget._][
			fieldNames.orgDevProgramAndBudget.orgDevStrategy
		];
	const employmentPlan =
		data[fieldNames.orgDevProgramAndBudget._][
			fieldNames.orgDevProgramAndBudget.employmentPlan
		];
	const techTransferProgramAndBudget =
		data[fieldNames.orgDevProgramAndBudget._][
			fieldNames.orgDevProgramAndBudget.techTransferProgramAndBudget
		];
	const trainingProgramAndBudget =
		data[fieldNames.orgDevProgramAndBudget._][
			fieldNames.orgDevProgramAndBudget.trainingProgramAndBudget
		];
	const csrAndSocialDevProgramAndBudget =
		data[fieldNames.orgDevProgramAndBudget._][
			fieldNames.orgDevProgramAndBudget.csrAndSocialDevProgramAndBudget
		];

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
				<Form.Control
					type="file"
					value={orgDevStrategy}
					onChange={(e) =>
						onChange(
							fieldNames.orgDevProgramAndBudget.orgDevStrategy,
							e.target.value
						)
					}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					ii. Company's employment plan indicating number of people to
					be employed and budget
				</FormLabel>
				<Form.Control
					type="file"
					value={employmentPlan}
					onChange={(e) =>
						onChange(
							fieldNames.orgDevProgramAndBudget.employmentPlan,
							e.target.value
						)
					}
				/>
			</FormGroup>
			<br />

			<FormGroup>
				<FormLabel>
					b. Technology Transfer Programme and Budget
				</FormLabel>
				<br />
				<Form.Control
					type="file"
					value={techTransferProgramAndBudget}
					onChange={(e) =>
						onChange(
							fieldNames.orgDevProgramAndBudget
								.techTransferProgramAndBudget,
							e.target.value
						)
					}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					c. Training Programe and Budget - (Company's training
					programme should reflect its line of business)
				</FormLabel>
				<Form.Control
					type="file"
					value={trainingProgramAndBudget}
					onChange={(e) =>
						onChange(
							fieldNames.orgDevProgramAndBudget
								.trainingProgramAndBudget,
							e.target.value
						)
					}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					d. Corporate Social Responsibility & Social Development
					Programme and Budget
				</FormLabel>
				<Form.Control
					type="file"
					value={csrAndSocialDevProgramAndBudget}
					onChange={(e) =>
						onChange(
							fieldNames.orgDevProgramAndBudget
								.csrAndSocialDevProgramAndBudget,
							e.target.value
						)
					}
				/>
			</FormGroup>
		</Form>
	);
}

export default PlansAndProgrammes;
