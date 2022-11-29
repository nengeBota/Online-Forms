import { Form, FormCheck, Table } from "react-bootstrap";
import { fieldNames } from "../constants";

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
	const somethingImportantThatsMissing =
		fields[fieldNames.checkList.somethingImportantThatsMissing];
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
		somethingImportantThatsMissing,
		copiesOfOtherRegulatoryCerts,
		copyOfApplicationPackReceipt,
	};
};

function AnnexesAndAttachments({ data, setData }) {
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
		somethingImportantThatsMissing,
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
		<Form>
			<h1>Annexes / Attachments</h1>
			<hr />

			<p>
				Please complete the relevant checklist to ensure that you have
				attached all required documents
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
						<td>1. Cover Page</td>
						<td>
							<FormCheck
								checked={coverPage}
								onChange={() =>
									onChange(
										fieldNames.checkList.coverPage,
										!coverPage
									)
								}
							/>
						</td>
					</tr>
					<tr>
						<td>2. Application Form</td>
						<td>
							<FormCheck
								checked={applicationForm}
								onChange={() => {
									onChange(
										fieldNames.checkList.applicationForm,
										!applicationForm
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>3. Certificate of Incorporation</td>
						<td>
							<FormCheck
								checked={certificateOfIncorporation}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.certificateOfIncorporation,
										!certificateOfIncorporation
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>4. Certificate to Commence Business</td>
						<td>
							<FormCheck
								checked={certificateToCommenceBusiness}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.certificateToCommenceBusiness,
										!certificateToCommenceBusiness
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>5. Company Regulations</td>
						<td>
							<FormCheck
								checked={companyRegulations}
								onChange={() => {
									onChange(
										fieldNames.checkList.companyRegulations,
										!companyRegulations
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>6. Signed HSSE Policy and Objectives</td>
						<td>
							<FormCheck
								checked={signedHssePolicyAndObj}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.signedHssePolicyAndObj,
										!signedHssePolicyAndObj
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>
							7. Current Audited Financial Reports / Projected
							Revenue for Upstream Petroleum Activities
						</td>
						<td>
							<FormCheck
								checked={
									currentAuditedFinReportsOrProjectedRevenue
								}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.currentAuditedFinReportsOrProjectedRevenue,
										!currentAuditedFinReportsOrProjectedRevenue
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>
							8. Valid Tax Clearance Certificate (Provide
							Original)
						</td>
						<td>
							<FormCheck
								checked={validTaxClearanceCertificate}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.validTaxClearanceCertificate,
										!validTaxClearanceCertificate
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>9. VAT Certificate</td>
						<td>
							<FormCheck
								checked={vatCertificate}
								onChange={() => {
									onChange(
										fieldNames.checkList.vatCertificate,
										!vatCertificate
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>
							10. Valid SSNIT Clearance Certificate (Provide
							Original)
						</td>
						<td>
							<FormCheck
								checked={originalSsnitClearanceCertificate}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.originalSsnitClearanceCertificate,
										!originalSsnitClearanceCertificate
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td style={{ color: "red" }}>
							11. SOMETHING IMPORTANT NEEDS TO BE HERE. FIND IT
						</td>
						<td>
							<FormCheck
								checked={somethingImportantThatsMissing}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.somethingImportantThatsMissing,
										!somethingImportantThatsMissing
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>
							12. Copies of other valid regulatory certificates,
							licenses, and permits (eg. EPA permit, Air Operator
							Certificate, Aviation License, FDA Hygiene
							Certificate, etc)
						</td>
						<td>
							<FormCheck
								checked={copiesOfOtherRegulatoryCerts}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.copiesOfOtherRegulatoryCerts,
										!copiesOfOtherRegulatoryCerts
									);
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>13. Copy of Application Pack Receipt</td>
						<td>
							<FormCheck
								checked={copyOfApplicationPackReceipt}
								onChange={() => {
									onChange(
										fieldNames.checkList
											.copyOfApplicationPackReceipt,
										!copyOfApplicationPackReceipt
									);
								}}
							/>
						</td>
					</tr>
				</tbody>
			</Table>
		</Form>
	);
}

export default AnnexesAndAttachments;
