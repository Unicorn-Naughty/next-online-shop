import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(reqz: NextRequest, { params }: {
    params: {
        slug: string
    }
}) {
    const { slug } = await params
    try {
        const subCategories = await prisma.category.findFirst({
            where: {
                url: `/${slug}`

            },
            include: {
                categoryItem: {
                    include: {
                        products: true
                    }
                }
            }
        })
        
        
        return NextResponse.json(subCategories)
    } catch (error) {
        console.log(error);

    }
}