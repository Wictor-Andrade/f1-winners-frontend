"use client";
import {AppSidebar, Topbar} from "@/components/relume/ApplicationShell10.tsx";

const Dashboard = () => {
    return (
        <AppSidebar>
            <Topbar />
            <div className="bg-background-secondary">
                <div className="border-b-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
                    <span>Click and paste Page Header</span>
                </div>
                <div className="container grid grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[1fr_0.5fr] md:py-10 lg:px-8 lg:py-12">
                <span className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] text-center text-black/50">
                  Click and paste Main Content
                </span>
                    <span className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] text-center text-black/50">
                  Click and paste Secondary Content
                </span>
                </div>
            </div>
    </AppSidebar>);
};

export default Dashboard;
