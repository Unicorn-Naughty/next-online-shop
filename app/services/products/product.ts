import { Product, ProductVariant, Specifications } from "@prisma/client"
import { instance } from "../instance"

export type TFetchProductWithId = Product & {
    variants: ProductVariant[],
    specifications: Specifications[]
}

export const fetchProduct = async (id: string): Promise<TFetchProductWithId> => {
    const { data } = await instance.get<TFetchProductWithId>(`/products/product/${id}`)
    return data
}