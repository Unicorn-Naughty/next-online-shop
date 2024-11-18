import { instance } from "../instance"

export const fetchCart = async () => {
    const { data } = await instance.get('/cart')
    return data
}