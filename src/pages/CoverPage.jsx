import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { fieldNames } from "../constants";

function CoverPage({ data, setData }) {
	const coverPage = data[fieldNames.coverPage];

	return (
		<Form>
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
