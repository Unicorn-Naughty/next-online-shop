import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await prisma.category.findMany({
            include: {
                categoryItem: true
            }
        })
        return NextResponse.json(data)
    } catch (error) {
        console.log(error);

    }
}