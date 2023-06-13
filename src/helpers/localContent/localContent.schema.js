import { z } from "zod";
import v from "./localContent.fieldValidations.js";

const localContentSchema = z.object({ ...v });

export default localContentSchema;
