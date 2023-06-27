describe("App", () => {
	test.todo(`given that the page is rendered,
  then the app should be on the first page`);

	test.todo(`given that the app is rendered
  when the user clicks on the submit button
  then the submit action should be triggered`);

	describe(`Corporate Structure and services`, () => {
		//todo: for each field, test for successful entry, error showing on blur when input is invalid, error showing on blur when input is required but not provided,
		//todo: error showing if transition is not successful,

		//todo: do same for the other pages
		//todo: we'll need special cases for the table. both generic table component, and the actual fields that require table input
		const fields = [
			{
				id: "",
				name: "Date of Incorporation",
			},
			{
				id: "",
				name: "Name of Applicant",
				errorText: "",
			},
			{
				id: "",
				name: "Place of Incorporation",
			},
			{
				id: "",
				name: "Email Address",
			},
			{
				id: "",
				name: "Website",
			},
			{
				id: "",
				name: "Contact Person",
			},
			{
				id: "",
				name: "Mobile Number of Contact Person",
			},
			{
				id: "",
				name: "Name of Subsidiary or Affiliate (if applicable)",
			},
			{
				id: "",
				name: "Nationality of Parent Company or Affiliate (if applicable)",
			},
			{
				id: "",
				name: "Name of Applicant",
			},
			{
				id: "",
				name: "Name of Applicant",
			},
		];

		test.todo(`given that the page is rendered
    when the user attempts to move to the next page with only the non-optional values unfilled
    then the page transition should be successful`);

		test.todo(`given that the page is rendered
    when the user attempts to move to the next page with some required information unfilled
    then the page transition should not be successful
      and errors should show on the relevant fields`);
	});
});

test.todo(`confirm that each of the fields is showing correctly
  and onBlur is working correctly
  and onChange is working correctly
  and the placeholder is showing correctly`);

test.todo(`confirm that each of the fields is showing correctly`);
