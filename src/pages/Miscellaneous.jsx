import { useCallback } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import Errors from "../components/Errors";
import FileInput from "../components/FileInput";
import Heading from "../components/Heading";
import { fieldNames } from "../constants.mjs";

//Incomplete work done for part 5 and 6

const getFields = (data) => {
	const miscFiles = data[fieldNames.miscFiles];
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
	const onChange = (value) => {
		setData((prev) => ({ ...prev, [fieldNames.miscFiles]: value }));
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

			<FormGroup>
				<FormLabel>
					You may attach multiple relevant documents
				</FormLabel>
				<Errors errors={errors[fieldNames.miscFiles]} />
				<FileInput
					multiple={true}
					onChange={(files) => {
						setErrors((prev) => ({
							...prev,
							[fieldNames.miscFiles]: [],
						}));
						onChange(files);
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
