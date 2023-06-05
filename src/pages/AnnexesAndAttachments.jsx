import { ButtonGroup, Form, FormCheck, Table, Button } from "react-bootstrap";
import Heading from "../components/Heading";
import { fieldNames } from "../constants.mjs";
import state from "../stateDescription.mjs";
import { z } from "zod";
import formatAllErrorsForState from "../helpers/formatAllErrorsForState";
import Errors from "../components/Errors";

const getValues = (data) => {
	const fields = data[fieldNames.checkList._];
	const coverPage = fields[fieldNames.checkList.coverPage];
	const applicationForm = fields[fieldNames.checkList.applicationForm];
	const certificateOfIncorporation =
		fields[fieldNames.checkList.certificateOfIncorporation];
	const certificateToCommenceBusiness =
		fields[fieldNames.checkList.certificateToCommenceBusiness];
	const companyRegulations = fields[fieldNames.checkList.companyRegulations];
	const signedHssePolicyAndObj =
		fields[fieldNames.checkList.signedHssePolicyAndObj];
	const currentAuditedFinReportsOrProjectedRevenue =
		fields[fieldNames.checkList.currentAuditedFinReportsOrProjectedRevenue];
	const validTaxClearanceCertificate =
		fields[fieldNames.checkList.validTaxClearanceCertificate];
	const vatCertificate = fields[fieldNames.checkList.vatCertificate];
	const originalSsnitClearanceCertificate =
		fields[fieldNames.checkList.originalSsnitClearanceCertificate];
	const companyProfileandBusinessPlan =
		fields[fieldNames.checkList.companyProfileAndBusinessPlan];
	const copiesOfOtherRegulatoryCerts =
		fields[fieldNames.checkList.copiesOfOtherRegulatoryCerts];
	const copyOfApplicationPackReceipt =
		fields[fieldNames.checkList.copyOfApplicationPackReceipt];

	return {
		coverPage,
		applicationForm,
		certificateOfIncorporation,
		certificateToCommenceBusiness,
		companyRegulations,
		signedHssePolicyAndObj,
		currentAuditedFinReportsOrProjectedRevenue,
		validTaxClearanceCertificate,
		vatCertificate,
		originalSsnitClearanceCertificate,
		companyProfileandBusinessPlan,
		copiesOfOtherRegulatoryCerts,
		copyOfApplicationPackReceipt,
	};
};

const getErrors = (field, errors) =>
	errors?.[fieldNames.checkList._]?.[field] || [];

function AnnexesAndAttachments({ data, setData, errors, setErrors }) {
	const {
		coverPage,
		applicationForm,
		certificateOfIncorporation,
		certificateToCommenceBusiness,
		companyRegulations,
		signedHssePolicyAndObj,
		currentAuditedFinReportsOrProjectedRevenue,
		validTaxClearanceCertificate,
		vatCertificate,
		originalSsnitClearanceCertificate,
		companyProfileandBusinessPlan,
		copiesOfOtherRegulatoryCerts,
		copyOfApplicationPackReceipt,
	} = getValues(data);

	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.checkList._]: {
				...prev[fieldNames.checkList._],
				[field]: value,
			},
		}));
	};

	return (
		<>
			<Form>
				<Heading>Annexes / Attachments</Heading>
				<hr />

				<p>
					Please note that, the checked items are the files that you have attached to your application form. 
					Please review and ensure you have attached all necessary documents. 
				</p>

				<Table>
					<thead>
						<tr>
							<th></th>
							<th>Check</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div>1. Cover Page</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList.coverPage,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={coverPage}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>2. Application Form</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList.applicationForm,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={applicationForm}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>3. Certificate of Incorporation</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.certificateOfIncorporation,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={certificateOfIncorporation}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>4. Certificate to Commence Business</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.certificateToCommenceBusiness,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={certificateToCommenceBusiness}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>5. Company Regulations and Form 3 & Form 4</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList.companyRegulations,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={companyRegulations}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>6. Signed HSE Policy and Objectives</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.signedHssePolicyAndObj,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={signedHssePolicyAndObj}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									7. Current Audited Financial Reports /
									Projected Revenue for Upstream Petroleum
									Activities
								</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.currentAuditedFinReportsOrProjectedRevenue,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={
										currentAuditedFinReportsOrProjectedRevenue
									}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									8. Valid Tax Clearance Certificate (Provide
									Original)
								</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.validTaxClearanceCertificate,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={validTaxClearanceCertificate}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>9. VAT Certificate</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList.vatCertificate,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={vatCertificate}

								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									10. Valid SSNIT Clearance Certificate
									(Provide Original)
								</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.originalSsnitClearanceCertificate,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={originalSsnitClearanceCertificate}
	
								/>
							</td>
						</tr>
						<tr>
							<td>
								<div>11. Company Profile and Business Plan</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.companyProfileAndBusinessPlan,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={companyProfileandBusinessPlan}
	
								/>
							</td>
						</tr>
						{/* <tr>
							<td>
								<div>
									12. Copies of other valid regulatory
									certificates, licenses, and permits (eg. EPA
									permit, Air Operator Certificate, Aviation
									License, FDA Hygiene Certificate, etc)
								</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.copiesOfOtherRegulatoryCerts,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={copiesOfOtherRegulatoryCerts}
									onChange={() => {
										setErrors((prev) => ({
											...prev,
											[fieldNames.checkList._]: {
												...prev[fieldNames.checkList._],
												[fieldNames.checkList
													.copiesOfOtherRegulatoryCerts]:
													[],
											},
										}));
										onChange(
											fieldNames.checkList
												.copiesOfOtherRegulatoryCerts,
											!copiesOfOtherRegulatoryCerts
										);
									}}
								/>
							</td>
						</tr> */}
						<tr>
							<td>
								<div>12. Copy of Application Pack Receipt</div>
								<Errors
									errors={getErrors(
										fieldNames.checkList
											.copyOfApplicationPackReceipt,
										errors
									)}
								/>
							</td>
							<td>
								<FormCheck
									checked={copyOfApplicationPackReceipt}
			
								/>
							</td>
						</tr>
					</tbody>
				</Table>
				<p>** Requirements 8-10 are not applicable to newly registered External companies</p>
			</Form>
			<br />
			<br />
		</>
	);
}

export default AnnexesAndAttachments;
