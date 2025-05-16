import { z } from "zod";

export const DisplayPropertiesSchema = z.object({
    "description": z.string(),
    "name": z.string(),
    "icon": z.string().optional(),
});
export type DisplayProperties = z.infer<typeof DisplayPropertiesSchema>;