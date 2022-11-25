import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { fieldNames } from "../constants";

const getFields = (data) => {
	const miscFiles = data[fieldNames.miscFiles];
	return { miscFiles };
};

function Miscellaneous({ data, setData }) {
	const { miscFiles } = getFields(data);

  const onChange = (value) => {
		setData((prev) => ({ ...prev, [fieldNames.miscFiles]: value }));
	};

	return (
		<Form>
			<h1>Part Six - Miscellaneous</h1>
			<hr />

			<h6>
				Any other relevant information which applicant wishes to offer
				or further proposal which applicant seeks to make in relation to
				this application
			</h6>

			<hr />
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
            onChange(e.target.value)
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
		</Form>
	);
}

export default Miscellaneous;
