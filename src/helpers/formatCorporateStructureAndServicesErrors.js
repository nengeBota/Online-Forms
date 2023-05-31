import { fieldNames } from "../constants.mjs";

const corporateStructure = fieldNames.corporateStructureAndServices;

function getErrorValue(field, errors) {
	if (!errors) return [];
	return errors[field]?._errors || [];
}

export function formatSinglecontactPersonErrors(singlecontactPersonErrors) {
	const each = singlecontactPersonErrors;

	return {
		[corporateStructure.contactPerson.name]:
			each?.[corporateStructure.contactPerson.name]?._errors,
		[corporateStructure.contactPerson.email]:
			each?.[corporateStructure.contactPerson.email]?._errors,
		[corporateStructure.contactPerson.mobileNumber]:
			each?.[corporateStructure.contactPerson.mobileNumber]?._errors,
		[corporateStructure.contactPerson.isEditing]:
			each?.[corporateStructure.contactPerson.isEditing]?._errors,
	};
}

export function formatSingleShareholderErrors(singleShareholderErrors) {
	const each = singleShareholderErrors;

	return {
		[corporateStructure.shareholders.address]:
			each?.[corporateStructure.shareholders.address]?._errors,
		[corporateStructure.shareholders.name]:
			each?.[corporateStructure.shareholders.name]?._errors,
		[corporateStructure.shareholders.nationality]:
			each?.[corporateStructure.shareholders.nationality]?._errors,
		[corporateStructure.shareholders.percentage]:
			each?.[corporateStructure.shareholders.percentage]?._errors,
		[corporateStructure.shareholders.isEditing]:
			each?.[corporateStructure.shareholders.isEditing]?._errors,
	};
}

export function formatSingleBeneficiaryErrors(singleBeneficiaryErrors) {
	const errors = singleBeneficiaryErrors;

	return {
		[corporateStructure.beneficial.name]:
			errors?.[corporateStructure.beneficial.name]?._errors,
		[corporateStructure.beneficial.nationality]:
			errors?.[corporateStructure.beneficial.nationality]?._errors,
		[corporateStructure.beneficial.percentage]:
			errors?.[corporateStructure.beneficial.percentage]?._errors,
		[corporateStructure.beneficial.address]:
			errors?.[corporateStructure.beneficial.address]?._errors,
		[corporateStructure.beneficial.isEditing]:
			errors?.[corporateStructure.beneficial.isEditing]?._errors,
	};
}

export function formatSingleexecutiveDirectorsErrors(
	singleexecutiveDirectorsErrors
) {
	const errors = singleexecutiveDirectorsErrors;

	return {
		[corporateStructure.executiveDirectors.name]:
			errors?.[corporateStructure.executiveDirectors.name]?._errors,
		[corporateStructure.executiveDirectors.occupation]:
			errors?.[corporateStructure.executiveDirectors.occupation]?._errors,
		[corporateStructure.executiveDirectors.email]:
			errors?.[corporateStructure.executiveDirectors.email]?._errors,
		[corporateStructure.executiveDirectors.contact]:
			errors?.[corporateStructure.executiveDirectors.contact]?._errors,
		[corporateStructure.executiveDirectors.nationality]:
			errors?.[corporateStructure.executiveDirectors.nationality]
				?._errors,
		[corporateStructure.executiveDirectors.position]:
			errors?.[corporateStructure.executiveDirectors.position]?._errors,
		[corporateStructure.executiveDirectors.isEditing]:
			errors?.[corporateStructure.executiveDirectors.isEditing]?._errors,
	};
}

export function formatShareholdersErrors(shareholdersErrors, state) {
	const errors = shareholdersErrors;
	const shareholdersState =
		state[fieldNames.corporateStructureAndServices.shareholders._];
	if (!errors) return [];

	return shareholdersState.map((_, index) =>
		formatSingleShareholderErrors(errors[index])
	);
}

export function formatBeneficialFieldErrors(beneficialFieldErrors, state) {
	const errors = beneficialFieldErrors;
	const beneficiaries =
		state[fieldNames.corporateStructureAndServices.beneficial._];

	if (!errors) return [];

	return beneficiaries.map((_, i) =>
		formatSingleBeneficiaryErrors(errors[i])
	);
}

export default function formatCorporateStructureAndServicesErrors(
	corporateStructureAndServicesErrors,
	currentState
) {
	const errors = corporateStructureAndServicesErrors;
	const state = currentState[fieldNames.corporateStructureAndServices._];

	return {
		[fieldNames.corporateStructureAndServices.applicantName]: getErrorValue(
			corporateStructure.applicantName,
			errors
		),
		[fieldNames.corporateStructureAndServices.dateOfIncorporation]:
			getErrorValue(corporateStructure.dateOfIncorporation, errors),
		[fieldNames.corporateStructureAndServices.placeOfIncorporation]:
			getErrorValue(corporateStructure.placeOfIncorporation, errors),

		[fieldNames.corporateStructureAndServices.contactDetails._]: {
			[fieldNames.corporateStructureAndServices.contactDetails
				.officeAddress]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure?.contactDetails?.officeAddress
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactDetails
				.postalAddress]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure.contactDetails.postalAddress
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactDetails.GHpost]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure.contactDetails.GHpost
				]?._errors,
		},
		[fieldNames.corporateStructureAndServices.emailAddress]: getErrorValue(
			corporateStructure.emailAddress,
			errors
		),
		[fieldNames.corporateStructureAndServices.website]: getErrorValue(
			corporateStructure.website,
			errors
		),
		[fieldNames.corporateStructureAndServices.contactPerson._]: {
			[fieldNames.corporateStructureAndServices.contactPerson.name]:
				errors?.[corporateStructure.contactPerson._]?.[
					corporateStructure.contactPerson.name
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactPerson
				.mobileNumber]:
				errors?.[corporateStructure.contactPerson._]?.[
					corporateStructure.contactPerson.mobileNumber
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactPerson.email]:
				errors?.[corporateStructure.contactPerson._]?.[
					corporateStructure.contactPerson.email
				]?._errors,
		},

		[fieldNames.corporateStructureAndServices.nameOfSubsidiaryOrAffiliate]:
			getErrorValue(
				corporateStructure.nameOfSubsidiaryOrAffiliate,
				errors
			),
		[fieldNames.corporateStructureAndServices.nationalityOfAffiliate]:
			getErrorValue(corporateStructure.nationalityOfAffiliate, errors),
		[fieldNames.corporateStructureAndServices.permitCategory]:
			getErrorValue(corporateStructure.permitCategory, errors),
		[fieldNames.corporateStructureAndServices.shareholders._]:
			formatShareholdersErrors(
				errors?.[corporateStructure.shareholders._],
				state
			),

		[corporateStructure.beneficial._]: formatBeneficialFieldErrors(
			errors?.[corporateStructure.beneficial._],
			state
		),

		[fieldNames.corporateStructureAndServices.executiveDirectors]:
			getErrorValue(corporateStructure.executiveDirectors, errors),
		[fieldNames.corporateStructureAndServices.activities]: getErrorValue(
			corporateStructure.activities,
			errors
		),
		[fieldNames.corporateStructureAndServices.corporateStructure]:
			Object.keys(errors?.[corporateStructure.corporateStructure] || {})
				?.filter((key) => key !== "_errors")
				?.map((each) => {
					return {
						fileName: each?.fileName?._errors,
					};
				}),
		[fieldNames.corporateStructureAndServices.description]: getErrorValue(
			corporateStructure.description,
			errors
		),
	};
}
