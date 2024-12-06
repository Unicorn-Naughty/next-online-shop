import React from "react";
import { Filters, } from "./use-filtres";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    React.useEffect(() => {
        const params = {
            ...filters.price,
            countriesBrand: Array.from(filters.countriesBrand),
            effects: Array.from(filters.effectsProduct),
            typeCare: Array.from(filters.typeOfCare),
            brands: Array.from(filters.selectedBrands),
        };
        const query = qs.stringify(params, {
            arrayFormat: "comma",
        });

        router.push(`?${query}`,
            {
                scroll: false,
            });
    }, [
        filters, router
    ]);
}