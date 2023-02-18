import { fieldNames } from "../constants.mjs";

const fields = fieldNames.healthSafetySecurityEnv;

export default function formatHealthSafetySecurityEnvErrors(
	healthSafetySecurityEnvErrors
) {
    const errors = healthSafetySecurityEnvErrors;
    
    debugger;

	return {
		[fields.hssePolicyAndObj]: Object.keys(
			errors?.[fields.hssePolicyAndObj] || {}
		)
			?.filter((key) => key !== "_errors")
			?.map((key) => {
				const error =
					errors?.[fields.hssePolicyAndObj]?.[key]?.fileName?._errors;

				return error;
			}),
	};
}
