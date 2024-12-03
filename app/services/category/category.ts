
import { CategoryItem, Product, ProductVariant } from "@prisma/client"
import { instance } from "../instance"
export type TProductWithVariants = Product & {
    variants: ProductVariant[]
  }
export type TFetchCategory = {
    id: number,
    name: string,
    url: string
    categoryItem: CategoryItem & {
        products?: TProductWithVariants[]
    }[]

}
export const fetchCategory = async (name: string): Promise<TFetchCategory> => {
    const { data } = await instance.get<TFetchCategory>(`/category/${name}`)
    return data
}