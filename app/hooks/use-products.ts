import React from "react";
import { api } from "../services/api-client";
import { TFetchProduct, TFetchProductsNames } from "../services/products/products";

export const useProducts = (name: TFetchProductsNames) => {
    const [products, setProducts] = React.useState<TFetchProduct[]>([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        async function fetchSome() {
            try {
                setLoading(true);
                const products = await api.products.fetchProducts(name);
                setProducts(products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchSome();
    }, []);
    return {
        products, loading
    }
}