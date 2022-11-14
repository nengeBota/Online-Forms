import { Form, FormGroup, FormLabel } from "react-bootstrap";

function HealthSafetySecurityEnvironment() {
	return (
		<Form>
			<h1>Part Five - Health, Safety, Security And Environment</h1>
			<hr />
			<FormGroup>
				<FormLabel>
					Provide a signed copy of the Company's HSSE Policy and
					Objectives *
				</FormLabel>
				<br />
				<input type="file" />
			</FormGroup>
		</Form>
	);
}

export default HealthSafetySecurityEnvironment;
