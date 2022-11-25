import { Form, FormGroup } from "react-bootstrap";
import DynamicTable from "../components/DynamicTable";
import { fieldNames } from "../constants";

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

function DetailsOfExperience({ data, setData }) {
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

	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.detailsOfExperience._]: {
				...prev[fieldNames.detailsOfExperience._],
				[field]: value,
			},
		}));
	};

	return (
		<Form>
			<h1>C. Details of Experience</h1>
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
						onChange(
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
						onChange(
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
						onChange(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					updateRow={(index, key, value) => {
						contractsExecuted[index][key] = value;
						onChange(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					saveRow={(index) => {
						contractsExecuted[index].isEditing = false;
						onChange(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					editRow={(index) => {
						contractsExecuted[index].isEditing = true;
						onChange(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
					deleteRow={(index) => {
						contractsExecuted.splice(index, 1);
						onChange(
							fieldNames.detailsOfExperience.contractsExecuted._,
							contractsExecuted
						);
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default DetailsOfExperience;
