import React from "react";
import { api } from "../services/api-client";
import { TFetchCategory } from "../services/category/category";
export const useCategory = () => {
    const [category, setCategory] = React.useState<TFetchCategory[]>([])
    React.useEffect(() => {
        async function getCategory() {
            try {
                const categories = await api.category.fetchCategory()
                setCategory(categories)
                return categories
            } catch (error) {
                console.log(error);
            }
        }
        getCategory()
    }, [])
    return { category }
}