import { FormGroup } from "react-bootstrap";
import styled from "styled-components";

function Section({ children, isError, errorText }) {
	return (
		<Wrapper isError={isError}>
			{children}
			<ErrorText>{errorText}</ErrorText>
		</Wrapper>
	);
}

export default Section;

const Wrapper = styled(FormGroup)`
	background: ${({ isError }) => (isError ? "red" : "none")};
	padding: 0px 10px 10px 10px;
	border-radius: 5px;
	color: ${({ isError }) => (isError ? "white" : "initial")};
`;

const ErrorText = styled.div`
	color: white;
	background: red;
	font-size: 14px;
`;
