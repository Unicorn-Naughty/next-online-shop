import { instance } from "../instance"

export type TFetchProduct = {
    id: number
    name: string
    imageURL: string
    tag: string
    sale: boolean
    brand: string
    type: string
}

export const fetchProducts = async (name: string): Promise<TFetchProduct[]> => {
    const { data } = await instance.get<TFetchProduct[]>(`/products/${name}`)
    return data
}