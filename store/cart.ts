import { api } from "@/app/services/api-client";
import { create } from "zustand";


export type TCartState = {
    loading: boolean
    error: boolean
    fetchingLoad: boolean
    totalAmount: number,
    items: any[]

    fetchCartItems: () => Promise<void>

}
export const useCartStore = create<TCartState>((set) => ({
    items: [],
    error: false,
    fetchingLoad: false,
    loading: false,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ fetchingLoad: true, error: false, })
            const data = await api.cart.fetchCart()
            set(data)
        } catch (error) {
            console.log(error);
        }
    }
}))