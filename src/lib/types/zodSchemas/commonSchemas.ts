import { z } from "zod";

export const DisplayPropertiesSchema = z.object({
    "description": z.string(),
    "name": z.string(),
    "icon": z.string(),
});
export type DisplayProperties = z.infer<typeof DisplayPropertiesSchema>;