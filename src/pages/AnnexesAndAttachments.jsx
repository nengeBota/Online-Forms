import { Form, FormCheck, Table } from "react-bootstrap";

function AnnexesAndAttachments() {
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
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>2. Application Form</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>3. Certificate of Incorporation</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>4. Certificate to Commence Business</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>5. Company Regulations</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>6. Signed HSSE Policy and Objectives</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>
							7. Current Audited Financial Reports / Projected
							Revenue for Upstream Petroleum Activities
						</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>
							8. Valid Tax Clearance Certificate (Provide
							Original)
						</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>9. VAT Certificate</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>
							10. Valid SSNIT Clearance Certificate (Provide
							Original)
						</td>
						<td>
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td style={{ color: "red" }}>
							11. SOMETHING IMPORTANT NEEDS TO BE HERE. FIND IT
						</td>
						<td>
							<FormCheck />
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
							<FormCheck />
						</td>
					</tr>
					<tr>
						<td>13. Copy of Application Pack Receipt</td>
						<td>
							<FormCheck />
						</td>
					</tr>
				</tbody>
			</Table>
		</Form>
	);
}

export default AnnexesAndAttachments;
