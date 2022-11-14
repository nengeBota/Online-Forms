import { Form, FormGroup, FormLabel, Table } from "react-bootstrap";
import { NEW_RAW_MATERIALS_TO_BE_USED, NEW_VALUE_OF_SERVICE } from "../App";
import DynamicTable from "../components/DynamicTable";

const valueOfServiceColumns = [
	{ name: "Type of Service", key: "typeOfService" },
	{ name: "Contract Sum", key: "contractSum" },
	{ name: "Name of Company (Client)", key: "nameOfClientCompany" },
];

const rawMaterialsToBeUsedColumns = [
	{ name: "Name", key: "name" },
	{ name: "Occupation / Profession", key: "occupation" },
	{ name: "Nationality", key: "nationality" },
	{ name: "Position in the Company", key: "companyPosition" },
];

function LocalContent({ data, setData }) {
	return (
		<Form>
			<h1>Local Content</h1>
			<hr />

			<FormGroup>
				<FormLabel>
					1. Provide the percentage of Ghanaian participation in
					respect of ownership *
				</FormLabel>
				<input type="number" />
			</FormGroup>

			<FormGroup>
				<FormLabel>
					2. Employment: Please provide a breakdown of your company's
					staff *
				</FormLabel>
				<Table>
					<thead>
						<tr>
							<th></th>
							<th>Number of Ghanaians</th>
							<th>Number of Foreigners</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Management</td>
							<td>
								<input type="number" />
							</td>
							<td>
								<input type="number" />
							</td>
							<td>
								<input type="number" />
							</td>
						</tr>
						<tr>
							<td>Other Positions</td>
							<td>
								<input type="number" />
							</td>
							<td>
								<input type="number" />
							</td>
							<td>
								<input type="number" />
							</td>
						</tr>
					</tbody>
				</Table>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					3. The amount of money spent on infrastructure in Ghana *
				</FormLabel>{" "}
				<br />
				<input type="number" />
			</FormGroup>

			<br />
			<h6>4. Value of Service</h6>
			<FormGroup>
				<FormLabel>
					a. Services rendered by other companies to the applicant in
					th past twelve (12) months in order for applicant to
					operate. (ie. Catering, logistics, etc)
				</FormLabel>
				<DynamicTable
					data={data.valueOfServiceOfferedByOtherCompaniesToApplicant}
					columns={valueOfServiceColumns}
					addNewRow={() => {
						data.valueOfServiceOfferedByOtherCompaniesToApplicant.push(
							{ ...NEW_VALUE_OF_SERVICE }
						);
						setData({ ...data });
					}}
					editRow={(index) => {
						data.valueOfServiceOfferedByOtherCompaniesToApplicant[
							index
						].isEditing = true;
						setData({ ...data });
					}}
					deleteRow={(index) => {
						data.valueOfServiceOfferedByOtherCompaniesToApplicant.splice(
							index,
							1
						);
						setData({ ...data });
					}}
					saveRow={(index) => {
						data.valueOfServiceOfferedByOtherCompaniesToApplicant[
							index
						].isEditing = false;
						setData({ ...data });
					}}
					updateRow={(index, key, value) => {
						data.valueOfServiceOfferedByOtherCompaniesToApplicant[
							index
						][key] = value;
						setData({ ...data });
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					b. Services rendered by the applicant in the last twelve
					(12) months to other companies *
				</FormLabel>
				<DynamicTable
					columns={valueOfServiceColumns}
					data={data.valueOfServiceOfferedByApplicantToOtherCompanies}
					addNewRow={() => {
						data.valueOfServiceOfferedByApplicantToOtherCompanies.push(
							{ ...NEW_VALUE_OF_SERVICE }
						);
						setData({ ...data });
					}}
					editRow={(index) => {
						data.valueOfServiceOfferedByApplicantToOtherCompanies[
							index
						].isEditing = true;
						setData({ ...data });
					}}
					deleteRow={(index) => {
						data.valueOfServiceOfferedByApplicantToOtherCompanies.splice(
							index,
							1
						);
						setData({ ...data });
					}}
					saveRow={(index) => {
						data.valueOfServiceOfferedByApplicantToOtherCompanies[
							index
						].isEditing = false;
						setData({ ...data });
					}}
					updateRow={(index, key, value) => {
						data.valueOfServiceOfferedByApplicantToOtherCompanies[
							index
						][key] = value;
						setData({ ...data });
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					5. List raw materials to be utilized (This applies to
					companies which use raw materials in their activities) *
				</FormLabel>
				<DynamicTable
					columns={rawMaterialsToBeUsedColumns}
					data={data.rawMaterialsToBeUtilized}
					addNewRow={() => {
						data.rawMaterialsToBeUtilized.push({
							...NEW_RAW_MATERIALS_TO_BE_USED,
						});
						setData({ ...data });
					}}
					editRow={(index) => {
						data.rawMaterialsToBeUtilized[index].isEditing = true;
						setData({ ...data });
					}}
					deleteRow={(index) => {
						data.rawMaterialsToBeUtilized.splice(index, 1);
						setData({ ...data });
					}}
					saveRow={(index) => {
						data.rawMaterialsToBeUtilized[index].isEditing = false;
						setData({ ...data });
					}}
					updateRow={(index, key, value) => {
						data.rawMaterialsToBeUtilized[index][key] = value;
						setData({ ...data });
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					6. List Ghanaian finished goods to be utilised *
				</FormLabel>
				<br />
				<textarea />
			</FormGroup>
		</Form>
	);
}

export default LocalContent;
