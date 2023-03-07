import { useCallback } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import Errors from "../components/Errors";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import { fieldNames } from "../constants.mjs";

//Incomplete work done for part 5 and 6

const getFields = (data) => {
	const miscFiles = data[fieldNames.miscFiles._];
	const coverPage = data[fieldNames.coverPage];
	const hssePolicyAndObj =
		data[fieldNames.healthSafetySecurityEnv._][
			fieldNames.healthSafetySecurityEnv.hssePolicyAndObj
		];

	return { miscFiles, hssePolicyAndObj, coverPage };
};

const getHsseErrors = (errors) => {
	return errors?.[fieldNames.healthSafetySecurityEnv._]?.[
		fieldNames.healthSafetySecurityEnv.hssePolicyAndObj
	];
};

const updateMiscFilesErrors = (field, value, setErrors) => {
	setErrors((prev) => ({
		...prev,
		[fieldNames.miscFiles._]: {
			...prev[fieldNames.miscFiles._],
			[field]: value,
		},
	}));
};

const getMiscFilesErrors = (field, errors) => {
	return errors?.[fieldNames.miscFiles._]?.[field];
};

function Miscellaneous({ data, setData, errors, setErrors }) {
	const onStage = useCallback((fieldName, value) => {
		setData(
			(prev) => ({
				...prev,
				[fieldNames.healthSafetySecurityEnv._]: {
					...prev[fieldNames.healthSafetySecurityEnv._],
					[fieldName]: value,
				},
			}),
			[]
		);
	});

	//For Part 6 miscellaneous
	const { miscFiles, hssePolicyAndObj, coverPage } = getFields(data);
	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.miscFiles._]: {
				...prev[fieldNames.miscFiles._],
				[field]: value,
			},
		}));
	};

	return (
		<Form>
			<Heading>
				Part Five - Health, Safety, Security And Environment
			</Heading>
			<hr />
			<FormGroup>
				<FormLabel>
					Provide a signed copy of the Company's HSSE Policy and
					Objectives *
				</FormLabel>
				<Errors errors={getHsseErrors(errors)} />
				<FileInput
					value={
						data[
							fieldNames.healthSafetySecurityEnv.hssePolicyAndObj
						]
					}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.healthSafetySecurityEnv._]: {
								...prev[fieldNames.healthSafetySecurityEnv._],
								[fieldNames.healthSafetySecurityEnv
									.hssePolicyAndObj]: [],
							},
						}));

						onStage(
							fieldNames.healthSafetySecurityEnv.hssePolicyAndObj,
							file
						);
					}}
				/>
			</FormGroup>

			<br />
			<br />
			<Heading>Part Six - Miscellaneous</Heading>
			<hr />

			<h6>
				Any other relevant information which applicant wishes to offer
				or further proposal which applicant seeks to make in relation to
				this application
			</h6>


			{/* certificate of incorporation */}
			<FormGroup>
				<FormLabel>Certificate of Incorporation</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.certificateOfIncorporation,
						errors
					)}
				/>
				<FileInput
					value={
						data[fieldNames.miscFiles.certificateOfIncorporation]
					}
					multiple={true}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.certificateOfIncorporation;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);

						onChange(
							fieldNames.miscFiles.certificateOfIncorporation,
							files
						);
					}}
				/>
			</FormGroup>
			{/* certificate to commence business */}
			<FormGroup>
				<FormLabel>Certificate to Commence Business</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.certificateToCommenceBusiness,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles
								.certificateToCommenceBusiness]: [],
						}));
						onChange(
							fieldNames.miscFiles.certificateToCommenceBusiness,
							files
						);
					}}
				/>
			</FormGroup>
			{/* company regulations document */}
			<FormGroup>
				<FormLabel>Company Regulations Document</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.companyRegulationsDocument,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.companyRegulationsDocument]:
								[],
						}));
						onChange(
							fieldNames.miscFiles.companyRegulationsDocument,
							files
						);
					}}
				/>
			</FormGroup>
			{/* current audited financial reports */}
			<FormGroup>
				<FormLabel>Current audited financial reports</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles
							.currentAuditedFinReportsOrProjectedRevenue,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles
								.currentAuditedFinReportsOrProjectedRevenue]:
								[],
						}));
						onChange(
							fieldNames.miscFiles
								.currentAuditedFinReportsOrProjectedRevenue,
							files
						);
					}}
				/>
			</FormGroup>
			{/* vat certificate */}
			<FormGroup>
				<FormLabel>VAT Certificate</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.vatCertificate,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.vatCertificate]: [],
						}));
						onChange(fieldNames.miscFiles.vatCertificate, files);
					}}
				/>
			</FormGroup>
			{/* valid ssnit clearance certificate */}
			<FormGroup>
				<FormLabel>Valid SSNIT clearance certificate</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.validSSNITClearanceCertificate,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles
								.validSSNITClearanceCertificate]: [],
						}));
						onChange(
							fieldNames.miscFiles.validSSNITClearanceCertificate,
							files
						);
					}}
				/>
			</FormGroup>
			{/* company profile and business plans */}
			<FormGroup>
				<FormLabel>Company profile and business plans</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.companyProfileAndBusinessPlan,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles
								.companyProfileAndBusinessPlan]: [],
						}));
						onChange(
							fieldNames.miscFiles.companyProfileAndBusinessPlan,
							files
						);
					}}
				/>
			</FormGroup>
			{/* EPA permit */}
			<FormGroup>
				<FormLabel>EPA permit</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.EPAPermit,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.EPAPermit]: [],
						}));
						onChange(fieldNames.miscFiles.EPAPermit, files);
					}}
				/>
			</FormGroup>
			{/* air operator certificate */}
			<FormGroup>
				<FormLabel>Air Operator Certificate</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.airOperatorCertificate,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.airOperatorCertificate]: [],
						}));
						onChange(
							fieldNames.miscFiles.airOperatorCertificate,
							files
						);
					}}
				/>
			</FormGroup>
			{/* aviation license */}
			<FormGroup>
				<FormLabel>Aviation License</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.aviationLicense,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.aviationLicense]: [],
						}));
						onChange(fieldNames.miscFiles.aviationLicense, files);
					}}
				/>
			</FormGroup>
			{/* FDA hygiene certificate */}
			<FormGroup>
				<FormLabel>FDA hygiene certificate</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.fdaHygieneCertificate,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.fdaHygieneCertificate]: [],
						}));
						onChange(
							fieldNames.miscFiles.fdaHygieneCertificate,
							files
						);
					}}
				/>
			</FormGroup>
			{/* copy of application pack receipt */}
			<FormGroup>
				<FormLabel>Copy of application pack receipt</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.copyOfApplicationPackReceipt,
						errors
					)}
				/>
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles.copyOfApplicationPackReceipt]:
								[],
						}));
						onChange(
							fieldNames.miscFiles.copyOfApplicationPackReceipt,
							files
						);
					}}
				/>
			</FormGroup>

			<br />
			<h6>
				<p>
					According to Regulation 46 (1) & (2) of the Petroleum (Local
					Content and Local Participation) Regulations,
				</p>
				<p>
					1. A person who submits a plan, returns, report or other
					document and knowingly makes a false statement, commits an
					offence and is liable on summary conviction to a fine of not
					less than one hundred thousand penalty units and not more
					than two hundred and fifty thousand penalty units or to a
					term of imprisonment of not less than two years and not more
					than five years or to both.
				</p>
				<p>
					<span style={{ color: "red" }}>
						there's some missing text here
					</span>
					deceive the Commission as representing an indigenous
					Ghanaian company to achieve the local content requirement
					under these Regulations, commits an offence and is liable on
					summary conviction to a fine of not less than one hundred
					thousand penalty units and not more than two hundred and
					fifty thousand penalty units or to a term of imprisonment of
					not less than one year and not more than two years or to
					both
				</p>
			</h6>

			<br />
			<br />
			<Heading>Declaration Form</Heading>
			<hr />
			<FormGroup>
				<FormLabel>
					<span style={{ color: "red" }}>
						this link doesn't trigger the file download yet
					</span>
					<a href="#" download>
						Click to download
					</a>{" "}
					the declaration form to fill <br />
					Please upload the filled and signed declaration form *
				</FormLabel>
				<Errors errors={errors?.[fieldNames.declaration]} />
				<FileInput
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.declaration]: [],
						}));
						setData((prev) => ({
							...prev,
							[fieldNames.declaration]: file,
						}));
					}}
				/>
			</FormGroup>

			<br />
			<br />
			<Heading>Cover Page</Heading>
			<hr />

			<FormGroup>
				<FormLabel>Upload Cover Page *</FormLabel>
				<Errors errors={errors?.[fieldNames.coverPage]} />
				<FileInput
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.coverPage]: [],
						}));
						setData((prev) => ({
							...prev,
							[fieldNames.coverPage]: file,
						}));
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default Miscellaneous;
