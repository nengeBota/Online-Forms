import { z } from "zod";

const nonEmptyString = z.string().min(1, "Required");


const corporateStructureAndServicesValidations = {
  contactDetails: {
    officeAddress: nonEmptyString,
    GHpost: nonEmptyString,
    postalAddress: nonEmptyString,
  }
};

export default corporateStructureAndServicesValidations;
