import styledComponents from "styled-components";

function Errors({ errors = [], testId = "" }) {
	if (errors.length === 0) return null;

	return (
		<div data-testid={testId}>
			{errors.map((each) => (
				<ErrorText key={each}>{each}</ErrorText>
			))}
		</div>
	);
}

export default Errors;

const ErrorText = styledComponents.small`
  display: block;
  color: red;
`;
