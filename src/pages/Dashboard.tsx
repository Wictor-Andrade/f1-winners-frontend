"use client";
import { AppSidebar, Topbar } from "@/components/relume/ApplicationShell10.tsx";

const Dashboard = () => {
    return (
        <AppSidebar>
            <Topbar />
            <div className="flex items-center justify-center w-full h-screen">
                Olá seja bem-vindo ao time dos campeões!
            </div>
        </AppSidebar>
    );
};

export default Dashboard;
