export enum TypeOfCare {
    HOME = "Для домашнего ухода",
    PROF = "Для косметологов"
}
export enum Effect {
    BLESK = "Блеск",
    VOSSTANOVLENIE = "Восстановление",
    FEEDING = "Питание",
} export enum Countries {
    RU = "Россия",
    BE = "Бельгия",
    CZ = "Чешская республика",
    FR = "Франция",
    IT = "Италия",
}
export const typeOfCareZ = [
    {
        text: "Для домашнего ухода",
        value: "1"
    },
    {
        text: "Для косметологов",
        value: "2"
    },
]
export const effectsProductz = [
    {
        text: "Блеск",
        value: "1"
    },
    {
        text: "Восстановление",
        value: "2"
    },
    {
        text: "Питание",
        value: "3"
    },
]


export const countriesBrandS = [
    {
        text: "Россия",
        value: "1"
    },
    {
        text: "Бельгия",
        value: "2"
    },
    {
        text: "Чешская республика",
        value: "3"
    },
    {
        text: "Франция",
        value: "4"
    },
    {
        text: "Италия",
        value: "5"
    },
]

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

