import { ListProps, TeamsList } from "@/features/teams/components/list/TeamsList.tsx";
import { useEffect, useState } from "react";
import { useTeams } from "@/features/teams/hooks/useTeams.ts";
import { Team } from "@/features/teams/teams.ts";
import { Pencil, Trash } from "lucide-react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    modalEditTeamIsOpenState,
    modalDeleteTeamIsOpenState,
    currentTeamIdState, refreshListState
} from "@/features/teams/states/atom.ts";

const TeamsView = () => {
    const [lists, setLists] = useState<ListProps[]>([]);
    const { fetchAll } = useTeams();

    const setEditModalOpen = useSetRecoilState(modalEditTeamIsOpenState);
    const setDeleteModalOpen = useSetRecoilState(modalDeleteTeamIsOpenState);
    const setCurrentTeamId = useSetRecoilState(currentTeamIdState);
    const refresh = useRecoilValue(refreshListState);

    const fetchTeams = async () => {
        const teams = await fetchAll();
        if (teams) {
            const items: ListProps[] = teams.map((team: Team) => ({
                id: team.id,
                url: `/teams/${team.id}`,
                title: team.name,
                badge: `#${team.id}`,
                buttons: [
                    {
                        variant: "ghost",
                        iconRight: <Pencil size={16} />,
                        onClick: () => {
                            setCurrentTeamId(team.id);
                            setEditModalOpen(true);
                        },
                    },
                    {
                        variant: "ghost",
                        iconRight: <Trash size={16} />,
                        onClick: () => {
                            setCurrentTeamId(team.id);
                            setDeleteModalOpen(true);
                        },
                    },
                ],
            }));
            setLists(items);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, [refresh]);

    return (
        <div className="mt-4 mx-auto max-w-4xl p-4">
            <TeamsList lists={lists} />
        </div>
    );
};

export default TeamsView;
