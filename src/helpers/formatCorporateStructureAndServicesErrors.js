import { getElementError } from "@testing-library/react";
import { fieldNames } from "../constants.mjs";

const corporateStructure = fieldNames.corporateStructureAndServices;

function getErrorValue(field, errors) {
	return errors[field]?._errors || [];
}

export default function formatCorporateStructureAndServicesErrors(
	corporateStructureAndServicesErrors
) {
	const errors = corporateStructureAndServicesErrors;

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
				errors[corporateStructure.contactDetails._]?.[
					corporateStructure?.contactDetails?.officeAddress
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactDetails
				.postalAddress]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure.contactDetails.postalAddress
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactDetails.city]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure.contactDetails.city
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactDetails.region]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure.contactDetails.region
				]?._errors,
			[fieldNames.corporateStructureAndServices.contactDetails.country]:
				errors?.[corporateStructure.contactDetails._]?.[
					corporateStructure.contactDetails.country
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
		[fieldNames.corporateStructureAndServices.shareholders._]: Object.keys(
			errors?.[corporateStructure.shareholders._]
		)
			?.filter((key) => key !== "_errors")
			?.map((key) => {
				const each = errors?.[corporateStructure.shareholders._][key];

				return {
					[corporateStructure.shareholders.address]:
						each?.[corporateStructure.shareholders.address]
							?._errors,
					[corporateStructure.shareholders.name]:
						each?.[corporateStructure.shareholders.name]?._errors,
					[corporateStructure.shareholders.nationality]:
						each?.[corporateStructure.shareholders.nationality]
							?._errors,
					[corporateStructure.shareholders.percentage]:
						each?.[corporateStructure.shareholders.percentage]
							?._errors,
					[corporateStructure.shareholders.isEditing]:
						each?.[corporateStructure.shareholders.isEditing]
							?._errors,
				};
			}),

		[corporateStructure.beneficial._]: Object.keys(
			errors?.[corporateStructure.beneficial._]
		)
			?.filter((key) => key !== "_errors")
			?.map((each) => {
				return {
					[corporateStructure.beneficial.name]:
						each?.[corporateStructure.beneficial.name]?._errors,
					[corporateStructure.beneficial.nationality]:
						each?.[corporateStructure.beneficial.nationality]
							?._errors,
					[corporateStructure.beneficial.percentage]:
						each?.[corporateStructure.beneficial.percentage]
							?._errors,
					[corporateStructure.beneficial.address]:
						each?.[corporateStructure.beneficial.address]?._errors,
					[corporateStructure.beneficial.isEditing]:
						each?.[corporateStructure.beneficial.isEditing]
							?._errors,
				};
			}),

		[fieldNames.corporateStructureAndServices.executiveDirectors]:
			getErrorValue(corporateStructure.executiveDirectors, errors),
		[fieldNames.corporateStructureAndServices.activities]: getErrorValue(
			corporateStructure.activities,
			errors
		),
		[fieldNames.corporateStructureAndServices.corporateStructure]:
			Object.keys(errors?.[corporateStructure.corporateStructure])
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
