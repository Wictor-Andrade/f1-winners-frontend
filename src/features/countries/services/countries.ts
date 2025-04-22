import { AxiosResponse } from 'axios';
import {api} from "@/api/api.ts";
import {Country} from "@/features/countries/countries.ts";


export const getCountries = async (): Promise<AxiosResponse<Country[]>> => {
    return api.get('/countries');
};