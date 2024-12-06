import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

export interface QueryFilters extends PriceProps {
    countriesBrand: string;
    effects: string;
    typeCare: string;
    brands: string;
}
export interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}
export interface Filters {
    countriesBrand: Set<string>
    effectsProduct: Set<string>
    typeOfCare: Set<string>
    selectedBrands: Set<string>
    price: PriceProps
}
export interface ReturnProps extends Filters {
    toggleSelectedBrands: (value: string) => void
    toggleCountriesBrand: (value: string) => void
    toggleEffectsProduct: (value: string) => void
    toggletypeOfCare: (value: string) => void
    updatePrice: (name: keyof PriceProps, value: number) => void
    setPrice: React.Dispatch<React.SetStateAction<PriceProps>>
}
export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >;

    const [selectedBrands, { toggle: toggleSelectedBrands }] = useSet(
        new Set<string>(
            searchParams.get("brands") ? searchParams.get("brands")?.split(",") : []
        )
    );
    const [countriesBrand, { toggle: toggleCountriesBrand }] = useSet(
        new Set<string>(
            searchParams.get("countriesBrand")
                ? searchParams.get("countriesBrand")?.split(",")
                : []
        )
    );
    const [effectsProduct, { toggle: toggleEffectsProduct }] = useSet(
        new Set<string>(
            searchParams.get("effects") ? searchParams.get("effects")?.split(",") : []
        )
    );
    const [typeOfCare, { toggle: toggletypeOfCare }] = useSet(
        new Set<string>(
            searchParams.get("typeCare")
                ? searchParams.get("typeCare")?.split(",")
                : []
        )
    );

    const [price, setPrice] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });
    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...price,
            [name]: value,
        });
    };

    return {
        updatePrice,
        price,
        typeOfCare,
        effectsProduct,
        countriesBrand,
        selectedBrands,
        toggleSelectedBrands,
        toggleCountriesBrand,
        toggleEffectsProduct,
        toggletypeOfCare,
        setPrice


    }
}