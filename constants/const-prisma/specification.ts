enum TypeOfCare {
    HOME = "Для домашнего ухода",
    PROF = "Для косметологов"
}
enum Effect {
    BLESK = "Блеск",
    VOSSTANOVLENIE = "Восстановление",
    FEEDING = "Питание",
}
enum Countries {
    RU = "Россия",
    BE = "Бельгия",
    CZ = "Чешская республика",
    FR = "Франция",
    IT = "Италия",
}

export const specifications = [

    {
        typeOfCare: [TypeOfCare.HOME, TypeOfCare.PROF],
        effect: [Effect.BLESK, Effect.FEEDING],
        country: Countries.FR,
    },

    {
        typeOfCare: [TypeOfCare.HOME],
        effect: [Effect.VOSSTANOVLENIE, Effect.FEEDING],
        country: Countries.BE,
    },

    {
        typeOfCare: [TypeOfCare.PROF],
        effect: [Effect.FEEDING],
        country: Countries.CZ,
    },

    {
        typeOfCare: [TypeOfCare.HOME, TypeOfCare.PROF],
        effect: [Effect.BLESK, Effect.FEEDING, Effect.VOSSTANOVLENIE],
        country: Countries.RU,
    },

    {
        typeOfCare: [TypeOfCare.HOME],
        effect: [Effect.BLESK],
        country: Countries.IT,
    },

    {
        typeOfCare: [TypeOfCare.PROF],
        effect: [Effect.BLESK, Effect.FEEDING, Effect.VOSSTANOVLENIE],
        country: Countries.FR,
    },

    {
        typeOfCare: [TypeOfCare.HOME,],
        effect: [Effect.BLESK, Effect.FEEDING, Effect.VOSSTANOVLENIE],
        country: Countries.IT,
    },

    {
        typeOfCare: [TypeOfCare.HOME, TypeOfCare.PROF],
        effect: [Effect.BLESK, Effect.FEEDING],
        country: Countries.BE,
    },
]

