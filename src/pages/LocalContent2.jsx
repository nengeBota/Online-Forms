import { Form, FormGroup, FormLabel, Table } from "react-bootstrap";
import Heading from "../components/Heading";
import Errors from "../components/Errors.jsx";
import DynamicTable from "../components/DynamicTable";
import {
	localContentFieldNames as f,
	localContentFieldValidations as v,
} from "../helpers/localContent/index.js";
import {
	singleServiceReceived,
	singleServiceRendered,
} from "../helpers/localContent/localContent.fieldValidations.js";
import {
	NEW_SERVICE_RECEIVED_ITEM,
	NEW_SERVICE_RENDERED_ITEM,
} from "../helpers/localContent/localContent.initialState";
import {
	formatSingleServiceReceivedError,
	formatSingleServiceRenderedError,
} from "../helpers/localContent/localContent.formatErrors";

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
				<p>a. Staff Category</p>
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.ghanaian.mgt]:
													value,
												[f.staffBreakdown.total.mgt]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.foreigners.mgt
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.foreigners
													.mgt]: value,
												[f.staffBreakdown.total.mgt]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.ghanaian.mgt
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.ghanaian
													.technicalCoreStaff]: value,
												[f.staffBreakdown.total
													.technicalCoreStaff]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.foreigners
																.technicalCoreStaff
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.foreigners
													.technicalCoreStaff]: value,
												[f.staffBreakdown.total
													.technicalCoreStaff]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.ghanaian
																.technicalCoreStaff
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.ghanaian
													.other]: value,
												[f.staffBreakdown.total.other]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.foreigners
																.other
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.foreigners
													.other]: value,
												[f.staffBreakdown.total.other]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.ghanaian.other
														]
													) + parseInt(value),
											},
										}));
									}}
								/>
								<Errors
									errors={
										localContentErrors[
											f.staffBreakdown.foreigners.other
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
				<p>b. Employment Type</p>
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.ghanaian
													.fullTime]: value,
												[f.staffBreakdown.total
													.fullTime]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.foreigners
																.fullTime
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;

										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.foreigners
													.fullTime]: value,
												[f.staffBreakdown.total
													.fullTime]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.ghanaian
																.fullTime
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.ghanaian
													.partTime]: value,
												[f.staffBreakdown.total
													.partTime]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.foreigners
																.partTime
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.foreigners
													.partTime]: value,
												[f.staffBreakdown.total
													.partTime]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.ghanaian
																.partTime
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.ghanaian
													.internsOrNationalService]:
													value,
												[f.staffBreakdown.total
													.internsOrNationalService]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.foreigners
																.internsOrNationalService
														]
													) + parseInt(value),
											},
										}));
									}}
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
									onChange={(e) => {
										const value = e.target.value;
										setData((prev) => ({
											...prev,
											[f._]: {
												...prev[f._],
												[f.staffBreakdown.foreigners
													.internsOrNationalService]:
													value,
												[f.staffBreakdown.total
													.internsOrNationalService]:
													parseInt(
														localContentData[
															f.staffBreakdown
																.ghanaian
																.internsOrNationalService
														]
													) + parseInt(value),
											},
										}));
									}}
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
				<Errors errors={localContentErrors[f.capitalInvestment]} />
				<textarea
					style={{ width: "100%", minHeight: "100px" }}
					{...register(f.capitalInvestment)}
				/>
			</FormGroup>

			<FormGroup className="mt-100">
				<FormLabel>
					3. Subcontracts or POs Issued Services rendered by applicant
					to other companies in the past year in order
					for applicant to operate. (ie. Catering, Logistics, etc)
				</FormLabel>
				<DynamicTable
					columns={[
						{
							name: "Name of company work was done for",
							key: f.servicesRendered.serviceRecipient,
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
							name: "Payments Received year",
							key: f.servicesRendered
								.paymentsReceivedInLast12Months,
						},
					]}
					data={localContentData[f.servicesRendered._]}
					errors={localContentErrors[f.servicesRendered._]}
					addNewRow={() => {
						const newRow = NEW_SERVICE_RENDERED_ITEM;
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
            
						localContentErrors[field][index] =
							formatSingleServiceRenderedError(error?.format());

						setErrors((prev) => ({
							...prev,
							localContent: {
								...prev.localContent,
								...localContentErrors,
							},
						}));
					}}
				/>
			</FormGroup>

			<FormGroup className="mt-100">
				<FormLabel>
					4. Contracts executed or POs obtained Services received by
					the applicant in the past year to other
					companies
				</FormLabel>
				<DynamicTable
					columns={[
						{
							name: "Name of company that did the work",
							key: f.servicesReceived.serviceProvider,
						},
						{
							name: "Scope of work",
							key: f.servicesReceived.scopeOfWork,
						},
						{
							name: "Contract Start Date",
							key: f.servicesReceived.contractStartDate,
						},
						{
							name: "Contract End Date",
							key: f.servicesReceived.contractEndDate,
						},
						{
							name: "Contract Value (Sum)",
							key: f.servicesReceived.contractValue,
						},
						{
							name: "Payments Received year",
							key: f.servicesReceived
								.paymentsReceivedInLast12Months,
						},
					]}
					data={localContentData[f.servicesReceived._]}
					errors={localContentErrors[f.servicesReceived._]}
					addNewRow={() => {
						const newRow = NEW_SERVICE_RECEIVED_ITEM;
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
					onBlur={(index) => {
						const value =
							localContentData[f.servicesReceived._][index];
						const { error } =
							singleServiceReceived.safeParse(value);
						const field = f.servicesReceived._;

						localContentErrors[field][index] =
							formatSingleServiceReceivedError(error?.format());

						setErrors((prev) => ({
							...prev,
							localContent: {
								...prev.localContent,
								...localContentErrors,
							},
						}));
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
							<th>Expenditure in the past year</th>
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
