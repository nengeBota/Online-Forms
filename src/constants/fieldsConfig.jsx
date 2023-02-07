import { Form } from "react-bootstrap";
import styledComponents from "styled-components";
import { z } from "zod";
import Section from "../components/Section.jsx";
import { fieldNames } from "../constants.mjs";

const fieldsConfig = {
	[fieldNames.corporateStructureAndServices._]: [
		{
			label: "1. Name of Applicant (as indicated on Certificate of Incorporation)",
			placeholder: "Applicant's name",
			key: fieldNames.corporateStructureAndServices.applicantName,
			validate: (value) => {
				const { error } = z.string().min(1).safeParse(value);
				return error?.format()?._errors || "";
			},
			getValue: (data) =>
				data[fieldNames.corporateStructureAndServices._][
					fieldNames.corporateStructureAndServices.applicantName
				],
			render: ({
				label,
				placeholder,
				onChange,
				value,
				onBlur,
				errors = [],
			}) => (
				<Section>
					<Form.Label>{label}</Form.Label>
					{errors.map((each) => (
						<ErrorText key={each}>{each}</ErrorText>
					))}
				</Section>
			),
		},
	],
};

export default fieldsConfig;

const ErrorText = styledComponents.small`
  display: block;
  color: red;
`;
