import React from 'react';
import {useNavigate} from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/sign-in')
    }

    return <>{children}</>;
};

export default PrivateRoute;
