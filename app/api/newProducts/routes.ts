import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const reccomendProducts = await prisma.product.findMany(
            {
                where: {
                    tag: "new"
                },
                include: {
                    variants: true
                }
            }
        )
        return NextResponse.json(reccomendProducts)
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            throw new Error(`Не удалось получить новые товары с сервера`, err)
        }

    }
}