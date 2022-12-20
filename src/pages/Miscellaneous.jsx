import { useCallback } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import Heading from "../components/Heading";
import { fieldNames } from "../constants";

//Incomplete work done for part 5 and 6

const getFields = (data) => {
	const miscFiles = data[fieldNames.miscFiles];
	return { miscFiles };

	const hssePolicyAndObj =
		data[fieldNames.healthSafetySecurityEnv._][
			fieldNames.healthSafetySecurityEnv.hssePolicyAndObj
		];

	return { hssePolicyAndObj };
};

function Miscellaneous({ data, setData }) {
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
	const { miscFiles } = getFields(data);
	const onChange = (value) => {
		setData((prev) => ({ ...prev, [fieldNames.miscFiles]: value }));
	};
	const { hssePolicyAndObj } = getFields(data);

	//Cover Page
	const coverPage = data[fieldNames.coverPage];

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
				<br />
				<Form.Control
					type="file"
					value={hssePolicyAndObj}
					onChange={(e) => {
						onStage(
							fieldNames.healthSafetySecurityEnv.hssePolicyAndObj,
							e.target.value
						);
					}}
				/>
			</FormGroup>

      <br /><br />
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
				<br />
				<Form.Control
					type="file"
					multiple
					value={miscFiles}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
			</FormGroup>

			<br />
			<h6>
				<p>
					According ot Regulation 46 (1) & (2) of the Petroleum (Local
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

      <br /><br />
			<Heading>Declaration Form</Heading>
			<hr />
			<FormGroup>
				<FormLabel>
					Click to download the Declaration form to fill:
				</FormLabel>
				<Button href="#" download>
					Download
				</Button>
			</FormGroup>
			<FormGroup>
				<FormLabel>Please upload Declaration Form *</FormLabel>
				<br />
				<Form.Control
					type="file"
					value={coverPage}
					onChange={(e) => {
						setData((prev) => ({
							...prev,
							[fieldNames.coverPage]: e.target.value,
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
				<br />
				<Form.Control
					type="file"
					value={coverPage}
					onChange={(e) => {
						setData((prev) => ({
							...prev,
							[fieldNames.coverPage]: e.target.value,
						}));
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default Miscellaneous;
