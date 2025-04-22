import { atom } from "recoil";

export const modalCreateTeamIsOpenState = atom<boolean>({
    key: "teams/modalCreateTeamIsOpenState",
    default: false,
});

export const modalDeleteTeamIsOpenState = atom<boolean>({
    key: "teams/modalDeleteTeamIsOpenState",
    default: false,
});

export const modalEditTeamIsOpenState = atom<boolean>({
    key: "teams/modalEditTeamIsOpenState",
    default: false,
});

export const currentTeamIdState = atom<number|null>({
    key: "teams/currentTeamIdState",
    default: null,
});

export const refreshListState = atom<number>({
    key: "teams/refreshListState",
    default: 0,
});