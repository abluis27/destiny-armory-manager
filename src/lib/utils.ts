export const toUnsignedInt32 = (signedId: number): number => (signedId >>> 0)
export const toSignedInt32 = (unsignedId: number): number => (unsignedId | 0)