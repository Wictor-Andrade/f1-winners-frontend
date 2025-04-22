import { useCallback } from "react";
import {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam,
} from "@/features/teams/services/teams.ts";
import toast from "react-hot-toast";
import {CreateTeamRequest, UpdateTeamRequest} from "@/features/teams/teams.ts";
import {useSetRecoilState} from "recoil";
import {refreshListState} from "@/features/teams/states/atom.ts";

export const useTeams = () => {

    const setRefresh = useSetRecoilState(refreshListState);


    const refresh = useCallback(async () => {
        setRefresh((prev) => prev + 1);
    }, []);

    const fetchAll = useCallback(async () => {
        try {
            const res = await getTeams();
            return res.data;
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Erro ao buscar times.");
        }
    }, []);

    const fetchById = useCallback(async (id: number) => {
        try {
            const res = await getTeam(id);
            return res.data;
        } catch (error: any) {
            toast.error(error?.response?.data?.message || `Erro ao buscar time com ID ${id}.`);
        }
    }, []);

    const create = useCallback(async (data: CreateTeamRequest) => {
        try {
            const res = await createTeam(data);
            toast.success("Time criado com sucesso!");
            return res.data;
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Erro ao criar time.");
        }
    }, []);

    const update = useCallback(async (id: number, data: UpdateTeamRequest) => {
        try {
            const res = await updateTeam(id, data);
            toast.success("Time atualizado com sucesso!");
            return res.data;
        } catch (error: any) {
            toast.error(error?.response?.data?.message || `Erro ao atualizar time com ID ${id}.`);
        }
    }, []);

    const remove = useCallback(async (id: number) => {
        try {
            await deleteTeam(id);
            toast.success("Time deletado com sucesso!");
        } catch (error: any) {
            toast.error(error?.response?.data?.message || `Erro ao deletar time com ID ${id}.`);
        }
    }, []);

    return {
        fetchAll,
        fetchById,
        create,
        update,
        remove,
        refresh,
    };
};
