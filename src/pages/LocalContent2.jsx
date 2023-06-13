import { Form, FormGroup, FormLabel, Table } from "react-bootstrap";
import Heading from "../components/Heading";
import Errors from "../components/Errors.jsx";
import DynamicTable from "../components/DynamicTable";
import {
	localContentInitialState,
	localContentSchema,
} from "../helpers/localContent";
import {
	localContentFieldNames as f,
	localContentFieldValidations as v,
} from "../helpers/localContent/index.js";
import { singleServiceRendered } from "../constants/fieldValidations";

export default function LocalContent({ data, setData, errors, setErrors }) {
	const localContentData = data.localContent;
	const localContentErrors = errors.localContent;

	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			localContent: {
				...prev.localContent,
				[field]: value,
			},
		}));
	};

	const register = (field, params) => {
		const { type = "text" } = params || {};
		return {
			type,
			name: field,
			onChange: (e) => {
				onChange(field, e.target.value);
			},
			value: localContentData[field],
			onBlur: () => {
				const value = localContentData[field];
				const { error } = v[field].safeParse(value);

				setErrors((prev) => ({
					...prev,
					localContent: {
						...prev.localContent,
						[field]: error?.format()?._errors,
					},
				}));
			},
		};
	};

	return (
		<Form>
			<Heading>Part 4 - Local Content</Heading>
			<hr />

			<FormGroup>
				<FormLabel>
					1. Employment: Please provide a breakdown of your company's
					staff
				</FormLabel>
				<Table striped>
					<thead>
						<tr>
							<th>Positions</th>
							<th>Number of Ghanaians</th>
							<th>Number of foreigners</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Management</th>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.ghanaian.mgt,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.ghanaian.mgt
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.foreigners.mgt,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.foreigners.mgt
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									value={
										localContentData[
											f.staffBreakdown.total.mgt
										]
									}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total.mgt
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Technical Core Staff</th>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.ghanaian
											.technicalCoreStaff,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.ghanaian
												.technicalCoreStaff
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.foreigners
											.technicalCoreStaff,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.foreigners
												.technicalCoreStaff
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									value={
										localContentData[
											f.staffBreakdown.total
												.technicalCoreStaff
										]
									}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total
												.technicalCoreStaff
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Other Positions</th>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.ghanaian.other,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.ghanaian.other
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.foreigners.other,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total.other
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									value={
										localContentData[
											f.staffBreakdown.total.other
										]
									}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total.other
										]
									}
								/>
							</td>
						</tr>
					</tbody>
				</Table>

				<div style={{ marginBottom: "50px" }} />

				<Table striped>
					<thead>
						<tr>
							<th>Positions</th>
							<th>Number of Ghanaians</th>
							<th>Number of foreigners</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Full time</th>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.ghanaian.fullTime,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.ghanaian.fullTime
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.foreigners.fullTime,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.foreigners.fullTime
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									value={
										localContentData[
											f.staffBreakdown.total.fullTime
										]
									}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total.fullTime
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Part Time</th>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.ghanaian.partTime,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.ghanaian.partTime
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.foreigners.partTime,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.foreigners.partTime
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									value={
										localContentData[
											f.staffBreakdown.total.partTime
										]
									}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total.partTime
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Interns / National Service Personnel</th>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.ghanaian
											.internsOrNationalService,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.ghanaian
												.internsOrNationalService
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.staffBreakdown.foreigners
											.internsOrNationalService,
										{ type: "number" }
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.foreigners
												.internsOrNationalService
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									value={
										localContentData[
											f.staffBreakdown.total
												.internsOrNationalService
										]
									}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.total
												.internsOrNationalService
										]
									}
								/>
							</td>
						</tr>
					</tbody>
				</Table>
			</FormGroup>

			<FormGroup className="mt-100">
				<FormLabel>
					2. Capital Investments -{" "}
					<i>
						(The company should outline any{" "}
						<b>
							<u>capital investments</u>
						</b>{" "}
						made towards its operations - infrastructure, equipment,
						tools, machinery, etc.. in Ghana)
					</i>
				</FormLabel>
				<Errors
					errors={[
						"we should confirm whether this is the correct input type to use",
					]}
				/>
				<textarea
					style={{ width: "100%", minHeight: "100px" }}
					{...register(f.capitalInvestment)}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>
					3. Subcontracts or POs Issued Services rendered by other
					companies to the applicant in the past twelve (12) months in
					order for applicant to operate. (ie. Catering, Logistics,
					etc)
				</FormLabel>
				<DynamicTable
					columns={[
						{
							name: "Name of company work was done for",
							key: f.servicesRendered.serviceRecepient,
						},
						{
							name: "Scope of work",
							key: f.servicesRendered.scopeOfWork,
						},
						{
							name: "Contract Start Date",
							key: f.servicesRendered.contractStartDate,
						},
						{
							name: "Contract End Date",
							key: f.servicesRendered.contractEndDate,
						},
						{
							name: "Contract Value (Sum)",
							key: f.servicesRendered.contractValue,
						},
						{
							name: "Payments Received (past 12 months)",
							key: f.servicesRendered
								.paymentsReceivedInLast12Months,
						},
					]}
					data={localContentData[f.servicesRendered._]}
					errors={localContentErrors[f.servicesRendered._]}
					addNewRow={() => {
						const newRow = {
							serviceProvider: "",
							scopeOfWork: "",
							contractStartDate: "",
							contractEndDate: "",
							contractValue: "",
							paymentsReceivedInLast12Months: "",
							isEditing: true,
						};
						const field = f.servicesRendered._;
						const value = localContentData[f.servicesRendered._];
						onChange(field, [...value, newRow]);
					}}
					saveRow={(index) => {
						const field = f.servicesRendered._;

						const value = localContentData[f.servicesRendered._];
						value[index].isEditing = false;
						onChange(field, [...value]);
					}}
					editRow={(index) => {
						const field = f.servicesRendered._;
						const value = localContentData[f.servicesRendered._];
						value[index].isEditing = true;
						onChange(field, [...value]);
					}}
					deleteRow={(index) => {
						const field = f.servicesRendered._;
						const value = localContentData[f.servicesRendered._];
						value.splice(index, 1);
						onChange(field, [...value]);
					}}
					updateRow={(index, col, newValue) => {
						const field = f.servicesRendered._;
						const value = localContentData[f.servicesRendered._];
						value[index][col] = newValue;
						onChange(field, [...value]);
					}}
					onBlur={(index) => {
						const value =
							localContentData[f.servicesRendered._][index];
						const { error } =
							singleServiceRendered.safeParse(value);
						const field = f.servicesRendered._;
						setErrors((prev) => ({
							...prev,
							localContent: {
								...prev.localContent,
								[field]: error?.format()?._errors,
							},
						}));
					}}
				/>
			</FormGroup>

			<FormGroup className="mt-100">
				<FormLabel>
					4. Contracts executed or POs obtained Services rendered by
					the applicant in the past twelve (12) months to other
					companies
				</FormLabel>
				<DynamicTable
					columns={[
						{
							name: "Name of company work was done for",
							key: "serviceRecipient",
						},
						{
							name: "Scope of work",
							key: "scopeOfWork",
						},
						{
							name: "Contract Start Date",
							key: "contractStartDate",
						},
						{
							name: "Contract End Date",
							key: "contractEndDate",
						},
						{
							name: "Contract Value (Sum)",
							key: "contractValue",
						},
						{
							name: "Payments Received (past 12 months)",
							key: "paymentsReceivedInLast12Months",
						},
					]}
					data={localContentData[f.servicesReceived._]}
					errors={localContentErrors[f.servicesReceived._]}
					addNewRow={() => {
						const newRow = {
							serviceRecepient: "",
							scopeOfWork: "",
							contractStartDate: "",
							contractEndDate: "",
							contractValue: "",
							paymentsReceivedInLast12Months: "",
							isEditing: true,
						};
						const field = f.servicesReceived._;
						const value = localContentData[f.servicesReceived._];
						onChange(field, [...value, newRow]);
					}}
					saveRow={(index) => {
						const field = f.servicesReceived._;
						const value = localContentData[f.servicesReceived._];
						value[index].isEditing = false;
						onChange(field, [...value]);
					}}
					editRow={(index) => {
						const field = f.servicesReceived._;
						const value = localContentData[f.servicesReceived._];
						value[index].isEditing = true;
						onChange(field, [...value]);
					}}
					deleteRow={(index) => {
						const field = f.servicesReceived._;
						const value = localContentData[f.servicesReceived._];
						value.splice(index, 1);
						onChange(field, [...value]);
					}}
					updateRow={(index, col, newValue) => {
						const field = f.servicesReceived._;
						const value = localContentData[f.servicesReceived._];
						value[index][col] = newValue;
						onChange(field, [...value]);
					}}
				/>
			</FormGroup>

			<FormGroup className="mt-100">
				<FormLabel>5. Professional Services</FormLabel>
				<Table striped>
					<thead>
						<tr>
							<th></th>
							<th>Name of Service Provider(s)</th>
							<th>Location</th>
							<th>Expenditure in the past 12 months</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Insurance services</th>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.insuranceServices.serviceProvider
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.insuranceServices
												.serviceProvider
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.insuranceServices.location
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.insuranceServices.location
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.insuranceServices
											.expenditureInLast12Months
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.insuranceServices
												.expenditureInLast12Months
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Financial Services</th>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.financialServices.serviceProvider
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.financialServices
												.serviceProvider
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.financialServices.location
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.financialServices.location
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.financialServices
											.expenditureInLast12Months
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.financialServices
												.expenditureInLast12Months
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Indigenous banks</th>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.indigenousBanks.serviceProvider
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.indigenousBanks.serviceProvider
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.indigenousBanks.location
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.indigenousBanks.location
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.indigenousBanks
											.expenditureInLast12Months
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.indigenousBanks
												.expenditureInLast12Months
										]
									}
								/>
							</td>
						</tr>
						<tr>
							<th>Legal Services</th>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.legalServices.serviceProvider
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.legalServices.serviceProvider
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.legalServices.location
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.legalServices.location
										]
									}
								/>
							</td>
							<td>
								<Form.Control
									{...register(
										f.professionalServicesDetails
											.legalServices
											.expenditureInLast12Months
									)}
								/>
								<Errors
									errors={
										localContentErrors[
											f.professionalServicesDetails
												.legalServices
												.expenditureInLast12Months
										]
									}
								/>
							</td>
						</tr>
					</tbody>
				</Table>
				<b style={{ color: "red" }}>
					NOTE: an indigenous bank is a bank that has 100% Ghanaian or
					majority Ghanaian shareholding.
				</b>
			</FormGroup>
		</Form>
	);
}

const initialState = localContentInitialState;

export const localContentValidationSchema = localContentSchema;
