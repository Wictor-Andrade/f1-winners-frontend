"use client";
import { AppSidebar, Topbar } from "@/components/relume/ApplicationShell10.tsx";
import TeamsView from "@/features/teams/components/ui/TeamsView.tsx";
import {AppModal} from "@/components/ui/AppModal.tsx";
import {
    currentTeamIdState,
    modalCreateTeamIsOpenState,
    modalDeleteTeamIsOpenState, modalEditTeamIsOpenState
} from "@/features/teams/states/atom.ts";
import {useRecoilState, useRecoilValue} from "recoil";
import {CreateTeamForm} from "@/features/teams/components/forms/CreateTeamForm.tsx";
import {AppDestroyModal} from "@/components/ui/AppDestroyModal.tsx";
import {useTeams} from "@/features/teams/hooks/useTeams.ts";
import {EditTeamForm} from "@/features/teams/components/forms/EditTeamForm.tsx";

const Teams = () => {
    const [modalCreateIsOpen, setModalCreateIsOpen] = useRecoilState(modalCreateTeamIsOpenState);
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useRecoilState(modalDeleteTeamIsOpenState);
    const [modalEditIsOpen, setModalEditIsOpen] = useRecoilState(modalEditTeamIsOpenState);
    const currentTeamId = useRecoilValue(currentTeamIdState);

    const { remove, refresh } = useTeams();

    const handleDelete = async () => {
        if(!currentTeamId) return;
        await remove(currentTeamId);
        setModalDeleteIsOpen(false);
        await refresh();
    }

    return (
        <AppSidebar>
            <Topbar />
            <TeamsView/>
            <AppModal
                title="Criar novo time"
                description="Preencha o formulário abaixo para criar um time."
                isOpen={modalCreateIsOpen}
                formId="create-team-form"
                closeModal={setModalCreateIsOpen}
            >
                <CreateTeamForm id="create-team-form" />
            </AppModal>
            <AppDestroyModal
                isOpen={modalDeleteIsOpen}
                title="Confirmar Exclusão"
                description="Tem certeza de que deseja excluir este item?"
                closeModal={setModalDeleteIsOpen}
                onDestroy={handleDelete}
            />
            <AppModal
                title="Editar time"
                description="Altere os dados abaixo para editar as informações do time."
                isOpen={modalEditIsOpen}
                formId="edit-team-form"
                closeModal={setModalEditIsOpen}
            >
                <EditTeamForm id="edit-team-form" />
            </AppModal>

        </AppSidebar>
    );
};

export default Teams;
