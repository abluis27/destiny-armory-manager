import { getDestinyWeaponsPreviewDataByName } from "@/lib/services/destinyWeaponData/destinyWeaponServices"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const weaponName = req.nextUrl.searchParams.get("name")
    if (!weaponName) {
        return NextResponse.json(
            {
                error: "Missing weapon name"
            },
            {
                status: 400
            }
        )
    }

    try {
        const results = await getDestinyWeaponsPreviewDataByName(weaponName)
        if(results.length <= 0) {
        return NextResponse.json(
            {
                error: `No results found for ${weaponName}. Please check the spelling or try a different search term.`
            },
            {
                status: 404
            }
        )
        }
        return NextResponse.json(results)
    } catch (error) {
        console.error('Failed to fetch preview data:', error);
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