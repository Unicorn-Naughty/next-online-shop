
import { CategoryItem, Product } from "@prisma/client"
import { instance } from "../instance"

export type TFetchCategory = {
    id: number,
    name: string,
    url: string
    categoryItem: CategoryItem & {
        products?: Product[]
    }[]

}
export const fetchCategory = async (name: string): Promise<TFetchCategory> => {
    const { data } = await instance.get<TFetchCategory>(`/category/${name}`)
    return data
}