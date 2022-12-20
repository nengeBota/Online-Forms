import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { initialState } from "../constants";
import CorporateStructureAndServices from "./CorporateStructureAndServices";

function renderComponent({ setData, data, errors, setErrors }) {
	render(
		<CorporateStructureAndServices
			setData={setData}
			data={data}
			errors={errors}
			setErrors={setErrors}
		/>
	);
}

describe("CorporateStructureAndServices", () => {
	test(`given that the page is showing,
  when a valid value is typed into the applicant's name field
  then the field should be updated with the value`, () => {
		const setData = jest.fn();
		renderComponent({
			setData,
			data: initialState,
			errors: {},
			setErrors: () => {},
		});
		const input = screen.getByTestId("applicant-name");
		userEvent.type(input, "Alvin Ofori");
		expect(setData).toBeCalledWith("Alvin Ofori")
	});


	test(`given that the page is showing
  when numbers are typed into the applicant's name field
  then the field should not be updated with the numbers`, () => {
		const setData = jest.fn();
		render(
			<CorporateStructureAndServices
				setData={setData}
				data={initialState}
				errors={{}}
				setErrors={jest.fn()}
			/>
		);
		const input = screen.getByTestId("applicant-name");
		userEvent.type(input, "1234");
		expect(input.value).not.toBe("1234");
	});
});
