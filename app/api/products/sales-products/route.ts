import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const salesProducts = await prisma.product.findMany(
            {
                where: {
                    sale: true
                },
                include: {
                    variants: true
                }
            }
        )
        return NextResponse.json(salesProducts)
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            throw new Error(`Не удалось получить акционные товары с сервера`, err)
        }

    }
}