import { Form, FormGroup } from "react-bootstrap";
import { fieldNames } from "../constants";

function ManagementAndTechnicalCompetencies({ data, setData }) {
	const mgtAndTechnicalCompetencies =
		data[fieldNames.mgtAndTechnicalCompetencies._];
	const orgChart =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.orgChart
		];
	const detailedStaffInfo =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.detailedStaffInfo
		];
	const requiredExpertise =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.requiredExpertise
		];
	const sourcesOfEquipment =
		mgtAndTechnicalCompetencies[
			fieldNames.mgtAndTechnicalCompetencies.sourcesOfEquipment
		];

	const onChange = (field, value) => {
		setData((prev) => ({
			...prev,
			[fieldNames.mgtAndTechnicalCompetencies._]: {
				...prev[fieldNames.mgtAndTechnicalCompetencies._],
				[field]: value,
			},
		}));
	};

	return (
		<div>
			<h1>B. Management and Technical Competencies</h1>

			<FormGroup>
				<div>
					3.a. Provide Organizational Chart <br />
					<Form.Control
						type="file"
						value={orgChart}
						onChange={(e) => {
							onChange(
								fieldNames.mgtAndTechnicalCompetencies.orgChart,
								e.target.value
							);
						}}
					/>
				</div>

				<br />

				<div>
					b. Provide detailed information on the number of staff and
					their expertise. (Include Name, Gender, Position and
					Nationality of Staff). * <br />
					<Form.Control
						type="file"
						value={detailedStaffInfo}
						onChange={(e) => {
							onChange(
								fieldNames.mgtAndTechnicalCompetencies
									.detailedStaffInfo,
								e.target.value
							);
						}}
					/>
				</div>

				<br />

				<div>
					c. Indicate expertise to be sourced locally and
					internationally. * <br />
					<Form.Control
						as="textarea"
						value={requiredExpertise}
						onChange={(e) => {
							onChange(
								fieldNames.mgtAndTechnicalCompetencies
									.requiredExpertise,
								e.target.value
							);
						}}
					/>
				</div>

				<br />

				<div>
					4. Indicate sources from which applicant proposes to obtain
					equipment and other facilities to support petroleum
					activities. * <br />
					<Form.Control
						as="textarea"
						value={sourcesOfEquipment}
						onChange={(e) => {
							onChange(
								fieldNames.mgtAndTechnicalCompetencies
									.sourcesOfEquipment,
								e.target.value
							);
						}}
					/>
				</div>
			</FormGroup>
		</div>
	);
}

export default ManagementAndTechnicalCompetencies;
