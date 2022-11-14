import { Form, FormGroup, FormLabel } from "react-bootstrap";

function CoverPage() {
	return (
		<Form>
			<h1>Cover Page</h1>
			<hr />

			<FormGroup>
				<FormLabel>Upload Cover Page *</FormLabel>
				<br />
				<input type="file" />
			</FormGroup>
		</Form>
	);
}

export default CoverPage;
