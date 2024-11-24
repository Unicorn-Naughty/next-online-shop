

export const LINK_NAMES = [
    {
        name: "Каталог",
        url: "/catalog",
        submenu: [
            {
                name: "Парфюмерия",
                url: "/perfume",
                submenu: [
                    {
                        name: 'Для мужчин',
                        categoryId: 1,
                        url: "/for-men",
                    },
                    {
                        name: 'Для женщин',
                        categoryId: 1,
                        url: "/for-women"
                    },
                    {
                        name: 'Для детей',
                        categoryId: 1,
                        url: "/for-kids"
                    },
                ]
            },
            {
                name: "Очищение",
                url: "/clear",
                submenu: [
                    {
                        name: 'Крафтовое мыло',
                        categoryId: 2,
                        url: "/craft-soap"
                    },
                    {
                        name: 'Шампуни',
                        categoryId: 2,
                        url: "/shampoo"
                    },
                    {
                        name: 'Гели для душа',
                        categoryId: 2,
                        url: "/gel"
                    },
                ]
            },
            {
                name: "Пилинги и скрабы",
                url: "/pilling&scrabs",
                submenu: [
                    {
                        name: 'Для тела',
                        categoryId: 3,
                        url: "/for-body"
                    },
                    {
                        name: 'Оживительные',
                        categoryId: 3,
                        url: "/healing"
                    },
                ]
            },
            {
                name: "Тоники",
                url: "/tonics",
                submenu: [
                    {
                        name: 'Молодильные',
                        categoryId: 4,
                        url: "/younger-effects",
                    },
                    {
                        name: 'Тонизирующие',
                        categoryId: 4,
                        url: "/tonics-effects"
                    },
                    {
                        name: 'Бодрящие',
                        categoryId: 4,
                        url: "/waking-up"
                    },
                ]
            },
            {
                name: "Кремы",
                url: "/crems",
                submenu: [
                    {
                        name: 'Для лица',
                        categoryId: 5,
                        url: "/for-face"
                    },
                    {
                        name: 'Для тела',
                        categoryId: 5,
                        url: "/for-body-n"
                    },
                    {
                        name: 'Для ног',
                        categoryId: 5,
                        url: "/for-legs"
                    },
                    {
                        name: 'Интимная зона',
                        categoryId: 5,
                        url: "/intim"
                    },
                ]
            },
            {
                name: "Сыворотки",
                url: "/sivorotki",
                submenu: [
                    {
                        name: 'На глицирине',
                        categoryId: 6,
                        url: "/glic"
                    },
                    {
                        name: 'На молоке',
                        categoryId: 6,
                        url: "/milk"
                    },
                    {
                        name: 'На масле',
                        categoryId: 6,
                        url: "/maslo"
                    },
                ]
            },
        ]
    },
    {
        name: "Клуб косметлогов",
        url: "/club-cosmo"
    },
    {
        name: "Сертификаты",
        url: "/sertificates"
    },
    {
        name: "Доставка и оплата",
        url: "del&payment"
    },
    {
        name: "Контакты",
        url: "/contacts"
    },
    {
        name: "Блог",
        url: "/blog"
    },
]



export type TItems = {
    name: string;
    url: string;
    submenu: {
        name: string;
        url: string;
        submenu: {
            name: string;
            categoryId: number;
            url: string;
        }[];
    }[];
} | {
    name: string;
    url: string;
    submenu?: undefined;
}
export type TSub = {
    name: string;
    url: string;
    submenu: {
        name: string;
        categoryId: number;
        url: string;
    }[];
}[]

// <NavigationMenuItem>
// <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
// <NavigationMenuContent>Item one Content</NavigationMenuContent>
// </NavigationMenuItem>
// <NavigationMenuItem>
// <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
// <NavigationMenuContent>
//   <NavigationMenuSub defaultValue="sub1">
//     <NavigationMenuList>
//       <NavigationMenuItem value="sub1">
//         <NavigationMenuTrigger>Sub item one</NavigationMenuTrigger>
//         <NavigationMenuContent>
//           Sub item one Content
//         </NavigationMenuContent>
//       </NavigationMenuItem>
//     </NavigationMenuList>
//   </NavigationMenuSub>
// </NavigationMenuContent>
// </NavigationMenuItem>

