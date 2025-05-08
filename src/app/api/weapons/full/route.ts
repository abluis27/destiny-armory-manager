import { getDestinyWeaponDataById } from "@/lib/services/destinyWeaponData/destinyWeaponServices"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const hash = req.nextUrl.searchParams.get("hash")
    if (!hash) {
        return NextResponse.json(
            {
                error: "Missing weapon hash"
            },
            {
                status: 400
            }
        )
    }

    const weaponHash = parseInt(hash)

    try {
        const results = await getDestinyWeaponDataById(weaponHash)
        return NextResponse.json(results)
    } catch (error) {
        console.error('Failed to fetch destiny weapon data:', error);
        return NextResponse.json(
            {
                error: "Internal servcer error"
            },
            {
                status: 500
            }
        )
    }
}