import { PromocodeName, UserRole } from "@prisma/client";
import { prisma } from "./prisma-client"
import { categories, subcategories } from "../constants/const-prisma/categories";
import { products } from "../constants/const-prisma/products";
import { getRandomInt } from "../lib/get-random-int";
import { TProducts } from "@/types/prisma";
import { specifications } from "../constants/const-prisma/specification";

const generateProductVariantAdditional = (productId: number, variantVolume: number) => {
    const item = products.find((item) => item.id === productId)!
    return {
        rest: getRandomInt(1, 20),
        price: getRandomInt(150, 4500),
        variantVolume,
        productId: item.id,
        article: `${item.type.slice(0, 2)}${Math.floor(Math.random() * 1000)}${variantVolume}OS`
    }
}
const generateProductVariantMain = (products: TProducts) => {
    return products.map((item) => {
        return {
            rest: getRandomInt(1, 10),
            price: getRandomInt(150, 1500),
            variantVolume: item.volume,
            article: `${item.type.slice(0, 2)}${Math.floor(Math.random() * 1000)}OS`,
            productId: item.id
        }
    })
}



async function up() {



    await prisma.category.createMany({
        data: categories
    })
    await prisma.categoryItem.createMany({
        data: subcategories
    })
    await prisma.specifications.createMany({
        data: specifications
    })
    await prisma.product.createMany({
        data: products
    })
    await prisma.productVariant.createMany({
        data: generateProductVariantMain(products)
    })
    await prisma.productVariant.createMany({
        data: [
            generateProductVariantAdditional(1, 700),
            generateProductVariantAdditional(1, 1500),
            generateProductVariantAdditional(2, 800),
            generateProductVariantAdditional(2, 1500),
            generateProductVariantAdditional(2, 2000),
            generateProductVariantAdditional(3, 900),
            generateProductVariantAdditional(3, 1000),
            generateProductVariantAdditional(3, 750),
            generateProductVariantAdditional(5, 650),
            generateProductVariantAdditional(6, 900),
            generateProductVariantAdditional(8, 1000),
            generateProductVariantAdditional(8, 1500),
        ]
    }
    )
    await prisma.user.createMany({
        data: [
            {
                number: '89639562472',
                fullName: 'Максим Максимович',
                address: 'Пупкина залупкина',
                sex: 'Мужчина',
                town: 'Красноярск',
                email: 'admin@mail.ru',
                bonus: 125,
                role: UserRole.ADMIN
            },
            {
                number: '87777777777',
                fullName: 'Валерия Максимович',
                address: 'Пупкина ',
                sex: 'Женщина',
                town: 'Красноярск',
                email: 'val@mail.ru',
                bonus: 1255,
                role: UserRole.USER
            },
        ]
    })
    await prisma.promocode.createMany({
        data: [
            {
                sale: 10,
                promocodeName: PromocodeName.PROMO_123
            },
            {
                sale: 5,
                promocodeName: PromocodeName.PROMO_124
            },
            {
                sale: 15,
                promocodeName: PromocodeName.PROMO_125
            },
        ]
    })
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CategoryItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Promocode" RESTART IDENTITY CASCADE`
}
async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.log(error);

    }
}
main().then(async () => {
    await prisma.$disconnect();

}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
})