import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import {useSetRecoilState} from "recoil";
import {modalCreateTeamIsOpenState} from "@/features/teams/states/atom.ts";

export type ListButton = ButtonProps & {
    onClick?: (id: number) => void;
};

export type ListProps = {
    id: number;
    url: string;
    title: string;
    badge: string;
    buttons: ListButton[];
};

export type Props = {
    lists: ListProps[];
};

export const TeamsList = (props: Props) => {
    const { lists = [] } = props
    const setCreateModalOpen = useSetRecoilState(modalCreateTeamIsOpenState);

    return (
        <section id="relume">
            <div className="pb-5 md:pb-6">
                <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
                    <div className="w-full max-w-lg">
                        <h2 className="text-2xl font-bold">Times</h2>
                        <p className="mt-2">Time de campeões</p>
                    </div>
                        <div className="flex flex-wrap items-center gap-2">
                                <Button
                                    variant='primary'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCreateModalOpen(true);
                                    }}
                                >Novo Time</Button>
                        </div>
                </div>
            </div>

            <div className="border-t border-border-primary">
                {lists.map((list, index) => (
                    <div
                        key={index}
                        className="grid max-w-full grid-cols-1 gap-6 border-b border-border-primary py-4 md:grid-cols-[1fr_max-content]"
                    >
                        <div className="w-full max-w-lg">
                            <h3 className="font-semibold">{list.title}</h3>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <h4 className="flex items-center justify-center bg-background-secondary px-3 py-0.5 text-sm font-medium">
                                {list.badge}
                            </h4>
                            <div className="flex gap-2">
                                {list.buttons.map((btn, i) => (
                                    <Button
                                        key={i}
                                        {...btn}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            btn.onClick?.(list.id);
                                        }}
                                        className={`border border-border-alternative p-2 ${btn.className || ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};