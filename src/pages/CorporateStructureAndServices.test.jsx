import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { initialState } from "../constants";
import { fieldNames, initialErrorState, initialState } from "../constants.mjs";
import fieldsConfig from "../constants/fieldsConfig";
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
			errors: initialErrorState,
			setErrors: () => {},
		});
		const input = screen.getByTestId("applicant-name");
		userEvent.type(input, "Alvin Ofori");
		expect(setData).toBeCalledWith("Alvin Ofori");
	});

	test(`given that the page is showing
  when numbers are typed into the applicant's name field
  then the field should not be updated with the numbers`, () => {
		const setData = jest.fn();
		render(
			<CorporateStructureAndServices
				setData={setData}
				data={initialState}
				errors={initialErrorState}
				setErrors={jest.fn()}
			/>
		);
		const input = screen.getByTestId("applicant-name");
		userEvent.type(input, "1234");
		expect(input.value).not.toBe("1234");
	});

	describe(`Errors`, () => {
		// populate the errors state object with errors for all the fields
		// pass them to the app
		// confirm that all the errors are showing up in the UI
		// bonus points if you can have all the fields in an array kind of situation

		const testCases = [
			{ field: fieldNames.corporateStructureAndServices.applicantName },
			{
				field: fieldNames.corporateStructureAndServices
					.dateOfIncorporation,
			},
			{
				field: fieldNames.corporateStructureAndServices
					.placeOfIncorporation,
			},
			{
				field: fieldNames.corporateStructureAndServices.contactDetails
					.officeAddress,
			},
		];

		testCases.forEach((each) =>
			test(`${each.field}`, () => {
				render(
					<CorporateStructureAndServices
						setData={jest.fn()}
						data={initialState}
						errors={initialErrorState}
						setErrors={jest.fn()}
					/>
				);
				expect(screen.getByTestId(each.field)).toBeInTheDocument();
			})
		);
  });
  
  test.todo('validation happens on blur, for each field');
});
