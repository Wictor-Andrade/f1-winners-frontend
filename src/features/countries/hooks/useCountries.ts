import { useCallback, useEffect } from "react";
import { getCountries } from "@/features/countries/services/countries.ts";
import toast from "react-hot-toast";
import { Country } from "@/features/countries/countries.ts";
import { countriesState, refreshCountriesState } from "@/features/countries/states/atoms.ts";
import { useRecoilState, useSetRecoilState } from "recoil";

export const useCountries = () => {
    const [countries, setCountries] = useRecoilState(countriesState);
    const setRefresh = useSetRecoilState(refreshCountriesState);

    const refresh = useCallback(async () => {
        setRefresh((prev) => prev + 1);
    }, [setRefresh]);

    const fetchAll = useCallback(async (): Promise<Country[] | undefined> => {
        try {
            const res = await getCountries();
            setCountries(res.data);
            return res.data;
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Erro ao buscar países.");
        }
    }, [setCountries]);

    useEffect(() => {
        fetchAll();
    }, [fetchAll]);

    useEffect(() => {
        if (countries.length === 0) {
            fetchAll();
        }
    }, [countries, fetchAll]);

    const findCountryIdByName = useCallback(
        (name: string): number => {
                const country = countries.find((country) => country.name.toLowerCase() === name.toLowerCase());
                if(!country) throw new Error('not found')
                return country?.id;
        },
        [countries]
    );

    return {
        fetchAll,
        refresh,
        countries,
        findCountryIdByName
    };
};
