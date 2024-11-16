import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { type: string } }) {
    const {type} = params
    try {
        const products = await prisma.product.findMany({
            where: {
                type: type
            },
            include: {
                variants: true
            }
        })
        return NextResponse.json(products)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Не удалось загрузить похожие товары" }, { status: 500 })

    }
}
