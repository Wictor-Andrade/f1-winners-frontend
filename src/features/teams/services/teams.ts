import { AxiosResponse } from 'axios';
import {api} from "@/api/api.ts";
import {CreateTeamRequest, Team, UpdateTeamRequest} from "@/features/teams/teams.ts";

export const getTeams = async (): Promise<AxiosResponse<Team[]>> => {
    return api.get('/teams');
};

export const getTeam = async (id: number): Promise<AxiosResponse<Team>> => {
    return api.get(`/teams/${id}`);
};

export const createTeam = async (
    data: CreateTeamRequest
): Promise<AxiosResponse<Team>> => {
    return api.post('/teams', data);
};

export const updateTeam = async (
    id: number,
    data: UpdateTeamRequest
): Promise<AxiosResponse<Team>> => {
    return api.put(`/teams/${id}`, data);
};

export const deleteTeam = async (
    id: number
): Promise<AxiosResponse<void>> => {
    return api.delete(`/teams/${id}`);
};
