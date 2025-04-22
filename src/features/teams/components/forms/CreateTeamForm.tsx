"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTeams } from "@/features/teams/hooks/useTeams";
import { useCountries } from "@/features/countries/hooks/useCountries.ts";

type Props = {
    id?: string;
};

export const CreateTeamForm = ({ id }: Props) => {
    const { register, handleSubmit, reset, setValue } = useForm<{ name: string; country_id: number }>();
    const { create, refresh } = useTeams();
    const { countries } = useCountries();

    const onSubmit = async (data: { name: string; country_id: number }) => {
        const team = await create(data);
        await refresh();
        if (team) {
            reset();
        }
    };

    return (
        <form id={id} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" {...register("name", { required: true })} />
            </div>
            <div>
                <Label htmlFor="country_id">País</Label>
                <Select onValueChange={(value) => setValue("country_id", Number(value))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione um país" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {countries.map((country) => (
                                <SelectItem key={country.id} value={String(country.id)}>
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
