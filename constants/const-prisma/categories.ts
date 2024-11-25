export const categories = [
    {
        name: "Парфюмерия",
        url: "/perfume"
    },
    {
        name: "Очищение",
        url: "/clear"
    },
    {
        name: "Пилинги и скрабы",
        url: "/pilling&scrabs"
    },
    {
        name: "Тоники",
        url: "/tonics"
    },
    {
        name: "Кремы",
        url: "/crems"
    },
    {
        name: "Сыворотки",
        url: "/sivorotki"
    },

]
export const subcategories = [
    {
        name: 'Для мужчин',
        categoryId: 1,
        url: "/for-men"
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
    {
        name: 'Молодильные',
        categoryId: 4,
        url: "/younger-effects"
    },
    {
        name: 'Тонизирующие',
        categoryId: 4,
        url: "/tonizz-effects"
    },
    {
        name: 'Бодрящие',
        categoryId: 4,
        url: "/waking-up"
    },
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

const baseCategories = [
    {
        name: "Каталог",
        url: "/catalog"
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
    }
]

export const allCategories = [

    ...baseCategories, ...categories, ...subcategories
]