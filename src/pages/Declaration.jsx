import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { fieldNames } from "../constants";

const getFields = (data) => {
  const fields = data[fieldNames.declaration._];
	const name = fields[fieldNames.declaration.name];
	const position = fields[fieldNames.declaration.position];
	const signature = fields[fieldNames.declaration.signature];
	const date = fields[fieldNames.declaration.date];

	return { position, signature, name, date };
};

const onChange = (field, value, setData) => {
	setData((prev) => ({
		...prev,
		[fieldNames.declaration._]: {
			...prev[fieldNames.declaration._],
			[field]: value,
		},
	}));
};

function Declaration({ data, setData }) {
	const { name, position, signature, date } = getFields(data);

	return (
		<Form>
			<h1>Declaration by the applicant</h1>
			<hr />
			<p>
				<h6>
					I/We declare that the information provided and documents
					submitted with this application are true and authentic. I/We
					am/are aware that my/our application stands disqualified if
					the contrary is the case, and that I/We may be prosecuted
					for false information
				</h6>
			</p>
			<hr />
			<FormGroup>
				<FormLabel>Name of applicant</FormLabel>
				<br />
				<Form.Control
					type="text"
					value={name}
					onChange={(e) => {
						onChange(
							fieldNames.declaration.name,
							e.target.value,
							setData
						);
					}}
				/>
				<br />
				<FormLabel>Position</FormLabel>
				<br />
				<Form.Control
					type="text"
					value={position}
					onChange={(e) => {
						onChange(
							fieldNames.declaration.position,
							e.target.value,
							setData
						);
					}}
				/>
				<br />

				<FormLabel>Signature</FormLabel>
				<br />
				<Form.Control
					type="file"
					value={signature}
					onChange={(e) => {
						onChange(
							fieldNames.declaration.signature,
							e.target.value,
							setData
						);
					}}
				/>
				<br />

				<FormLabel>Date</FormLabel>
				<br />
				<Form.Control
					type="date"
					value={date}
					onChange={(e) => {
						onChange(
							fieldNames.declaration.date,
							e.target.value,
							setData
						);
					}}
				/>
				<br />
			</FormGroup>
			<br />

			<h2>Submission of Application</h2>
			<hr />
			<br />
			<p>
				Duly filled application forms and related documents should be
				comb bound and submitted to the Commission. Appropriate fees
				will be communited to the applican t in writing and payment to
				the Commission should be made in Banker's Draft, payable to the{" "}
				<b>PETROLEUM COMMISSION, GHANA</b>
			</p>
			<br />
			<br />
			<p>
				THE CHIEF EXECUTIVE OFFICER
				<br />
				PETROLEUM COMMISSION, GHANA
				<br />
				P.O. BOX CT 228, CANTONMENTS
				<br />
				ACCRA, GHANA
				<br />
				Telephone: 0302 550938 / 0302 550933
				<br /> Email:{" "}
				<a href="mailto:info@petrocom.gov.gh">info@petrocom.gov.gh</a>
			</p>
		</Form>
	);
}

export default Declaration;
