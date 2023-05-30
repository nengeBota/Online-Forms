import { Form, FormGroup, FormLabel } from "react-bootstrap";
import Errors from "../components/Errors";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import { fieldNames } from "../constants.mjs";

//Incomplete work done for part 5 and 6


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
	const onStage = (fieldName, value) => {
		setData(
			(prev) => ({
				...prev,
				[fieldNames.healthSafetySecurityEnv._]: {
					...prev[fieldNames.healthSafetySecurityEnv._],
					[fieldName]: value,
				},
				[fieldNames.checkList._]: {
					...prev[fieldNames.checkList._],
					[fieldName]: true,
				},
			}),
			[]
		);
	};

	//For Part 6 miscellaneous
	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.miscFiles._]: {
				...prev[fieldNames.miscFiles._],
				[field]: value,
			},
			[fieldNames.checkList._]: {
				...prev[fieldNames.checkList._],
				[field]: true,
			},
		}));
	};

	return (
		<Form>
			<Heading>
				Part Five - Health, Safety And Environment
			</Heading>
			<hr />
			<FormGroup>
				<FormLabel>
					Provide a signed copy of the Company's HSE Policy and
					Objectives * <br/>
					<span style={{fontWeight:"bold"}}>Kindly attach relevant certificates if any</span>
				</FormLabel>
				<Errors errors={getHsseErrors(errors)} />
				<FileInput
					value={
						data[fieldNames.healthSafetySecurityEnv._][
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
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.certificateOfIncorporation
						]
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.certificateToCommenceBusiness
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.certificateToCommenceBusiness;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.companyRegulationsDocument
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.companyRegulationsDocument;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles
								.currentAuditedFinReportsOrProjectedRevenue
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles
								.currentAuditedFinReportsOrProjectedRevenue;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.vatCertificate
						]
					}
					onChange={(files) => {
						const field = fieldNames.miscFiles.vatCertificate;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.validSSNITClearanceCertificate
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.validSSNITClearanceCertificate;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.companyProfileAndBusinessPlan
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.companyProfileAndBusinessPlan;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.EPAPermit
						]
					}
					onChange={(files) => {
						const field = fieldNames.miscFiles.EPAPermit;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.airOperatorCertificate
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.airOperatorCertificate;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.aviationLicense
						]
					}
					onChange={(files) => {
						const field = fieldNames.miscFiles.aviationLicense;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.fdaHygieneCertificate
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.fdaHygieneCertificate;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
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
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.copyOfApplicationPackReceipt
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.copyOfApplicationPackReceipt;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
						onChange(
							fieldNames.miscFiles.copyOfApplicationPackReceipt,
							files
						);
					}}
				/>
			</FormGroup>
			{/* valid tax clearance certificate */}
			<FormGroup>
				<FormLabel>Valid tax clearance certificate</FormLabel>
				<Errors
					errors={getMiscFilesErrors(
						fieldNames.miscFiles.validTaxClearanceCertificate,
						errors
					)}
				/>
				<FileInput
					value={
						data[fieldNames.miscFiles._][
							fieldNames.miscFiles.validTaxClearanceCertificate
						]
					}
					onChange={(files) => {
						const field =
							fieldNames.miscFiles.validTaxClearanceCertificate;
						const value = [];
						updateMiscFilesErrors(field, value, setErrors);
						onChange(
							fieldNames.miscFiles.validTaxClearanceCertificate,
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
					2. A citizen who acts as a front or connives with a foreign 
					citizen or company to deceive the Commission as representing 
					an indigenous Ghanaian company to achieve the local content 
					requirement under these Regulations, commits an offence and 
					is liable on summary conviction to a fine of not less than 
					one hundred thousand penalty units and not more than two hundred 
					and fifty thousand penalty units or to a term of imprisonment of
					not less than one year and not more than two years or to both.
				</p>
			</h6>

			<br />
			<br />
			<Heading>Declaration Form</Heading>
			<hr />
			<FormGroup>
				<FormLabel>
					<a href="/declarationPage.pdf" download>
						Click to download
					</a>{" "}
					the declaration form to fill <br />
					<br></br>
					Please upload the filled and signed declaration form *
					
				</FormLabel>
				<Errors errors={errors?.[fieldNames.declaration]} />
				<FileInput
					value={data[fieldNames.declaration]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.declaration]: [],
						}));
						setData((prev) => ({
							...prev,
							[fieldNames.declaration]: file,
							[fieldNames.checkList._]: {
								...prev[fieldNames.checkList._],
							},
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
					value={data[fieldNames.coverPage]}
					onChange={(file) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.coverPage]: [],
						}));
						setData((prev) => ({
							...prev,
							[fieldNames.coverPage]: file,
							[fieldNames.checkList._]: {
								...prev[fieldNames.checkList._],
								[fieldNames.checkList.coverPage]: true,
							},
						}));
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default Miscellaneous;
