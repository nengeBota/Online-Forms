import { FormGroup } from "react-bootstrap";

function FinancialCapability() {
	return (
		<div>
			<h1>Part Two - Financial Capability and Technical Competency</h1>
      <h3>A. Financial Capability</h3>
      <hr />

			<FormGroup>
				<ol>
					<li>
						Please provide what applies to your company *
						<p>
							<input type="radio" />
							For existing companies which undertake services
							solely for the upstream petroleum industry, provide
							Audited Financial Reports for the past three years
						</p>
						<p>
							<input type="radio" />
							For existing companies which undertake services for
							the upstream petroleum industry and other sectors,
							in addition to Audited Financial Reports, provide
							leter from Auditors showing your upstream oil and
							gas revenue for the past year under audit.
						</p>
						<p>
							<input type="radio" />
							For existing companies which are new to the upstream
							petroleum industry (ie. Companies which have never
							received a contract for service in the upstream
							petroleum industry), provide AUdited Financial
							Report for the past year and a three year projected
							revenue for intended upstream oil and gas
							activities.
						</p>
						<p>
							<input type="radio" />
							For newly incorporated companies, provide a three
							year projected revenue for intended upstream oil and
							gas activities.
						</p>
						<br />
						Please upload documents as per your choice *
						<input type="file" />
					</li>

					<li>
						Indicate sources where applicant intends raising funds
						for its operations in Ghana *
						<FormGroup>
							<textarea />
						</FormGroup>
					</li>
				</ol>
			</FormGroup>
		</div>
	);
}

export default FinancialCapability;
