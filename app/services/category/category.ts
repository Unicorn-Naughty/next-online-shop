import { CategoryItem } from "@prisma/client"
import { instance } from "../instance"

export type TFetchCategory = {
    id: number,
    name: string,
    url: string
    categoryItem: CategoryItem[]

}
export const fetchCategory = async (): Promise<TFetchCategory[]> => {
    const { data } = await instance.get<TFetchCategory[]>('/category')
    return data
}