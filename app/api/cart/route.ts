import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
// req: NextRequest
export async function GET() {
    try {
        // const token = req.cookies.get('cartToken')?.value
        const token = '13234'
        if (!token) {
            return NextResponse.json({ totalAmount: 0, items: [] })
        }
        const cart = await prisma.cart.findFirst({
            where: {
                token
            },
            include: {
                items: {
                    include: {
                        productVariant: true
                    },
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return NextResponse.json(cart)
    } catch (error) {
        console.log(`[CART_500] Не удалось получить корзину`, error);
        return NextResponse.json({ error: 'Не удалось получить корзину' }, { status: 500 })
    }
}
export async function name(req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value
        if (!token) {
            token = crypto.randomUUID()
        }
        return NextResponse.json(token)
    } catch (error) {
        console.log(error);

    }
}