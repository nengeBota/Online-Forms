import { Form, FormGroup, FormLabel } from "react-bootstrap";

function PlansAndProgrammes() {
	return (
		<Form>
			<h1>Part 3. Plans and Programs</h1>
			<hr />
			<h3>Organizational Development Programme and Budget</h3>
			<br />

			<FormGroup>
				<FormLabel>
					i. Company's strategy for organizational development /
					growth
				</FormLabel>
				<input type="file" />
			</FormGroup>

			<FormGroup>
				<FormLabel>
					ii. Company's employment plan indicating number of people to
					be employed and budget
				</FormLabel>
				<input type="file" />
			</FormGroup>
			<br />

			<FormGroup>
				<FormLabel>
					b. Technology Transfer Programme and Budget
				</FormLabel>
				<br />
				<input type="file" />
			</FormGroup>

			<FormGroup>
				<FormLabel>
					c. Training Programe and Budget - (Company's training
					programme should reflect its line of business)
				</FormLabel>
				<input type="file" />
			</FormGroup>

			<FormGroup>
				<FormLabel>
					d. Corporate Social Responsibility & Social Development
					Programme and Budget
				</FormLabel>
				<input type="file" />
			</FormGroup>
		</Form>
	);
}

export default PlansAndProgrammes;
