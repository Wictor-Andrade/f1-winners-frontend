import { atom } from "recoil";
import { Country } from "@/features/countries/countries.ts";

export const countriesState = atom<Country[]>({
    key: "countries/countriesState",
    default: [],
});

export const refreshCountriesState = atom<number>({
    key: "countries/refreshCountriesState",
    default: 0,
});
