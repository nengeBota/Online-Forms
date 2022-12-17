import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { fieldNames } from "../constants";

function CoverPage({ data, setData }) {
	const coverPage = data[fieldNames.coverPage];

	return (
		<Form>
			<h1>Declaration Form</h1>
			<hr/>
			<FormGroup>
				<FormLabel>
					Click to download the Declaration form to fill:
				</FormLabel>
				<Button href="#" download >Download</Button>

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

			<h1>Cover Page</h1>
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

export default CoverPage;
