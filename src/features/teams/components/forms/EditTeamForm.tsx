"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTeams } from "@/features/teams/hooks/useTeams";
import { useRecoilValue } from "recoil";
import { currentTeamIdState, refreshListState } from "@/features/teams/states/atom.ts";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { useCountries } from "@/features/countries/hooks/useCountries.ts";

type Props = {
    id?: string;
};

export const EditTeamForm = ({ id }: Props) => {
    const { register, handleSubmit, reset, setValue } = useForm<{ name: string; country_id: number }>({
        defaultValues: { name: "", country_id: 0 },
    });
    const { update, refresh, fetchById } = useTeams();
    const currentTeamId = useRecoilValue(currentTeamIdState);
    const [initialData, setInitialData] = useState<{ name: string; country_id: number } | null>(null);
    const refreshCurrentTeam = useRecoilValue(refreshListState);
    const { countries, findCountryIdByName } = useCountries();
    const [currentCountryName, setCurrentCountryName] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (currentTeamId) {
            const fetchData = async () => {
                const teamData = await fetchById(currentTeamId);
                if (teamData) {
                    setInitialData(teamData);
                    const country = countries.find((country) => country.id === teamData.country_id);
                    if (country) {
                        setCurrentCountryName(country.name);
                        setValue("country_id", country.id);
                    }
                }
            };
            fetchData();
        }
    }, [currentTeamId, fetchById, refreshCurrentTeam, countries, setValue]);

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    const onSubmit = async (data: { name: string; country_id: number }) => {
        if (!currentTeamId) return;
        const team = await update(currentTeamId, data);
        if (team) {
            setInitialData(data);
            reset();
        }
        await refresh();
    };

    return (
        <form id={id} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" {...register("name", { required: true })} />
            </div>
            <div>
                <Label htmlFor="country_id">País</Label>
                <Select onValueChange={(e) => setValue("country_id", findCountryIdByName(e))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={currentCountryName || "Selecione um país"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup >
                            {countries.map((country) => (
                                <SelectItem
                                    key={country.id}
                                    value={country.name}
                                >
                                    {country.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </form>
    );
};
