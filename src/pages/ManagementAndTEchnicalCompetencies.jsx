import { FormGroup } from "react-bootstrap";

function ManagementAndTechnicalCompetencies() {
	return (
		<div>
			<h1>B. Management and Technical Competencies</h1>

			<FormGroup>
				<div>
					3.a. Provide Organizational Chart <br />
					<input type="file" />
				</div>

				<br />

				<div>
					b. Provide detailed information on the number of staff and
					their expertise. (Include Name, Gender, Position and
					Nationality of Staff). * <br />
					<input type="file" />
				</div>

				<br />

				<div>
					c. Indicate expertise to be sourced locally and
					internationally. * <br />
					<textarea />
        </div>
        
				<br />

				<div>
					4. Indicate sources from which applicant proposes to obtain
					equipment and other facilities to support petroleum
					activities. * <br />
					<textarea />
				</div>
			</FormGroup>
		</div>
	);
}

export default ManagementAndTechnicalCompetencies;
