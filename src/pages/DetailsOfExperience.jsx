import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import DynamicTable from "../components/DynamicTable";

const columns = [
	{
		name: "Description of Contract",
		key: "descriptionOfContract",
	},
	{
		name: "Name of company work was done for",
		key: "nameOfCompanyWorkWasDoneFor",
	},
	{
		name: "Contract Duration (Start date - end date)",
		key: "contractDuration",
	},
	{ name: "Contract Value", key: "contractValue" },
];

const newDetailsOfExperience = {
	isEditing: true,
	descriptionOfContract: "",
	nameOfCompanyWorkWasDoneFor: "",
	contractDuration: "",
	contractValue: "",
};

function DetailsOfExperience({ data, setData }) {
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
				<textarea />
			</FormGroup>

			<FormGroup>
				6. In which countries do applicant, parent company and
				affiliates currently have Petroleum industry activities or
				contracts? List all current operations globally. * <br />
				<textarea />
			</FormGroup>

			<FormGroup>
				7. Indicate contracts executed in respect of upstream petroleum
				support services over the past year. *
				<br />
				<DynamicTable
					columns={columns}
					data={data.detailsOfExperience}
					addNewRow={() => {
						setData((prev) => ({
							...prev,
							detailsOfExperience: [
								...prev.detailsOfExperience,
								newDetailsOfExperience,
							],
						}));
					}}
					updateRow={(index, key, value) => {
						data.detailsOfExperience[index][key] = value;
						setData({ ...data });
					}}
					saveRow={(index) => {
						data.detailsOfExperience[index].isEditing = false;
						setData({ ...data });
					}}
					editRow={(index) => {
						data.detailsOfExperience[index].isEditing = true;
						setData({ ...data });
					}}
					deleteRow={(index) => {
						data.detailsOfExperience.splice(index, 1);
						setData({ ...data });
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default DetailsOfExperience;
