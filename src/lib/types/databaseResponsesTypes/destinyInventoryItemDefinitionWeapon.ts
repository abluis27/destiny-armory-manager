import * as z from "zod";

export const DisplayPropertiesSchema = z.object({
    "description": z.string(),
    "name": z.string(),
    "icon": z.string(),
});
export type DisplayProperties = z.infer<typeof DisplayPropertiesSchema>;

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
export type Stats = z.infer<typeof StatsSchema>;

export const WeaponCoreInfoSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "iconWatermark": z.string(),
    "screenshot": z.string(),
    "flavorText": z.string(),
    "inventory": InventorySchema,
    "stats": StatsSchema,
    "equippingBlock": EquippingBlockSchema,
    "sockets": SocketsSchema,
    "itemCategoryHashes": z.array(z.number()),
    "defaultDamageType": z.number(),
});

export type WeaponCoreInfo = z.infer<typeof WeaponCoreInfoSchema>;
