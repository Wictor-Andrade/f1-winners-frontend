import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { login as loginRequest, logout as logoutRequest, getCsrfCookie } from '@/features/auth/services/auth.ts';
import {useNavigate} from "react-router-dom";
import {LoginRequestData} from "@/features/auth/types/auth.ts";
import {User} from "@/features/auth/types/users.ts";

type AuthContextType = {
    user: User | null;
    login: (data: LoginRequestData) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    const login = async (data: LoginRequestData) => {
        await getCsrfCookie();
        const response = await loginRequest(data);
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dashboard')
    };

    const logout = async () => {
        await logoutRequest();
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
