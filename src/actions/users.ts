import { AxiosResponse } from 'axios';
import {api} from "@/config/api.ts";
import {User} from "@/types";

export const getUser = (): Promise<AxiosResponse<User, any>> => {
  return api.get('/user');
};
