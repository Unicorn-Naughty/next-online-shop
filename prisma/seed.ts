import { PromocodeName, UserRole } from "@prisma/client";
import { prisma } from "./prisma-client"
import { categories, subcategories } from "@/constants/const-prisma/categories";

async function up() {


    await prisma.product.createMany({})
    await prisma.category.createMany({
        data: categories
    })
    await prisma.categoryItem.createMany({
        data: subcategories
    })
    await prisma.user.createMany({
        data: [
            {
                number: '89639562472',
                fullName: 'Максим Максимович',
                address: 'Пупкина залупкина',
                sex: 'Мужчина',
                town: 'Красноярск',
                email: 'admin@mail.ru',
                birthday: '23.04.2003',
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
                birthday: '25.04.1999',
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
    // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
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