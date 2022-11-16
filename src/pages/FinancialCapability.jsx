import { FormGroup } from "react-bootstrap";
import { fieldNames, financialCapabilityOptions } from "../constants";

function FinancialCapability({ data, setData }) {
	const { financialCapability } = data;
	const { whatApplies, uploadedDocument, sourceOfFunds } =
		financialCapability;

	return (
		<div>
			<h1>Part Two - Financial Capability and Technical Competency</h1>
			<h3>A. Financial Capability</h3>
			<hr />

			<FormGroup>
				<ol>
					<li>
						Please provide what applies to your company *
						{financialCapabilityOptions.map((each, i) => (
							<p key={i}>
								<input
									key={i}
									type="radio"
									name="whatApplies"
									value={each.value}
									checked={whatApplies === each.value}
									style={{
										marginRight: "10px",
										marginBottom: 0,
									}}
									onChange={(e) => {
										console.log("event -> ", e);
										setData((prev) => ({
											...prev,
											[fieldNames.finCapability._]: {
												...prev[
													fieldNames.finCapability._
												],
												[fieldNames.finCapability
													.whatApplies]:
													e.target.value,
											},
										}));
									}}
								/>
								{each.text}
							</p>
						))}
						<br />
						Please upload documents as per your choice *
						<input
							type="file"
							value={uploadedDocument}
							onChange={(e) =>
								setData((prev) => {
									console.log("value of e => ", e);

									return {
										...prev,
										[fieldNames.finCapability._]: {
											...prev[fieldNames.finCapability._],
											[fieldNames.finCapability
												.whatAppliesUploadedDocument]:
												e.target.value,
										},
									};
								})
							}
						/>
					</li>

					<li>
						Indicate sources where applicant intends raising funds
						for its operations in Ghana *
						<FormGroup>
							<textarea
								value={sourceOfFunds}
								onChange={(e) => {
									setData((prev) => ({
										...prev,
										[fieldNames.finCapability._]: {
											...prev[fieldNames.finCapability._],
											[fieldNames.finCapability
												.sourceOfFunds]: e.target.value,
										},
									}));
								}}
							/>
						</FormGroup>
					</li>
				</ol>
			</FormGroup>
		</div>
	);
}

export default FinancialCapability;
