import { useCallback } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { fieldNames } from "../constants";

const getFields = (data) => {
	const hssePolicyAndObj =
		data[fieldNames.healthSafetySecurityEnv._][
			fieldNames.healthSafetySecurityEnv.hssePolicyAndObj
		];

	return { hssePolicyAndObj };
};

function HealthSafetySecurityEnvironment({ data, setData }) {
	const { hssePolicyAndObj } = getFields(data);

	const onChange = useCallback((fieldName, value) => {
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
				<Form.Control
					type="file"
					value={hssePolicyAndObj}
					onChange={(e) => {
						onChange(
							fieldNames.healthSafetySecurityEnv.hssePolicyAndObj,
							e.target.value
						);
					}}
				/>
			</FormGroup>
		</Form>
	);
}

export default HealthSafetySecurityEnvironment;
