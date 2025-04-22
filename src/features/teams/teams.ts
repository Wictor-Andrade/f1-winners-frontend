export interface Team {
    id: number;
    name: string;
    country_id: number;
    created_at: string;
    updated_at: string;
}

export interface CreateTeamRequest {
    name: string;
    country_id: number;
}

export interface UpdateTeamRequest {
    name: string;
    country_id: number;
}
