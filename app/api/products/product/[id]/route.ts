import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = await params
        const product = await prisma.product.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                variants: true,
                specifications: true
            },
        })
        return NextResponse.json(product)
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            return NextResponse.json({ error: 'Не удалось получить товар с сервера' }, { status: 500 })
        }

    }
}