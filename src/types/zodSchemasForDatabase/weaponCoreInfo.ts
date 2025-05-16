import * as z from "zod";
import { DisplayPropertiesSchema } from "./commonSchemas";

export const EquippingBlockSchema = z.object({
    "ammoType": z.number(),
});
export type EquippingBlock = z.infer<typeof EquippingBlockSchema>;

export const InventorySchema = z.object({
    "tierType": z.number(),
});
export type Inventory = z.infer<typeof InventorySchema>;

export const SocketCategorySchema = z.object({
    "socketCategoryHash": z.number(),
    "socketIndexes": z.array(z.number()),
});
export type SocketCategory = z.infer<typeof SocketCategorySchema>;

export const SocketEntrySchema = z.object({
    "reusablePlugSetHash": z.number().optional(),
    "randomizedPlugSetHash": z.number().optional(),
});
export type SocketEntry = z.infer<typeof SocketEntrySchema>;

export const StatSchema = z.object({
    "statHash": z.number(),
    "value": z.number(),
    "minimum": z.number(),
    "maximum": z.number(),
    "displayMaximum": z.number(),
});
export type Stat = z.infer<typeof StatSchema>;

export const SocketsSchema = z.object({
    "socketEntries": z.array(SocketEntrySchema),
    "socketCategories": z.array(SocketCategorySchema),
});


export type Sockets = z.infer<typeof SocketsSchema>;

export const StatsSchema = z.object({
    "stats": z.record(z.string(), StatSchema),
});
export type WeaponStats = z.infer<typeof StatsSchema>;

export const WeaponCoreInfoWithoutIdSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "iconWatermark": z.string(),
    "screenshot": z.string(),
    "flavorText": z.string(),
    "inventory": InventorySchema,
    "stats": StatsSchema,
    "equippingBlock": EquippingBlockSchema,
    "sockets": SocketsSchema,
    "itemCategoryHashes": z.array(z.number()),
    "defaultDamageTypeHash": z.number(),
});

export type WeaponCoreInfoWithoutId = z.infer<typeof WeaponCoreInfoWithoutIdSchema>;

export const WeaponCoreInfoSchema = WeaponCoreInfoWithoutIdSchema.extend({
    hash: z.number(),
  });
  
export type WeaponCoreInfo = z.infer<typeof WeaponCoreInfoSchema>;
  
