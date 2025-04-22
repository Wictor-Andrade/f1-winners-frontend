"use client";

import {
    DropdownMenuGroup,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@relume_io/relume-ui";
import { RxChevronDown } from "react-icons/rx";
import { useState } from "react";
import clsx from "clsx";
import {Bolt, House, Users} from "lucide-react";
import {useAuth} from "@/features/auth/providers/AuthProvider.tsx";

const menuItems = [
    {
        title: "Home",
        url: "/Dashboard",
        icon: House,
    },
    {
        title: "Teams",
        url: "/teams",
        icon: Users,
    },
];

const footerItems = [
    {
        title: "Settings",
        url: "#",
        icon: Bolt,
    },
];

export const Topbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
        <>
            <div className="sticky top-0 z-30 hidden h-auto min-h-16 w-full items-center border-b border-border-primary bg-white px-6 md:min-h-18 lg:flex lg:px-8">
                <div className="mx-auto grid size-full grid-cols-1 items-center justify-end justify-items-end gap-4 lg:grid-cols-[1fr_max-content] lg:justify-between lg:justify-items-stretch">
                    <div />
                    <TopbarActions
                        isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                </div>
            </div>

            <div className="fixed left-0 right-0 top-0 z-30 flex min-h-16 w-full items-center justify-between border-b border-border-primary bg-white px-6 lg:hidden">
                <div className="flex items-center gap-4">
                    <SidebarTrigger />
                    <a href="#" className="flex items-center">
                        <img src="/f1-winners.png" alt="F1-Winners Logo" className='w-28' />
                    </a>
                </div>
                <TopbarActions
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            </div>
        </>
    );
};

const TopbarActions = ({
                           isDropdownOpen,
                           setIsDropdownOpen,
                       }: {
    isDropdownOpen: boolean;
    setIsDropdownOpen: (value: boolean) => void;
}) => {
    const { user, logout } = useAuth();
    return (
        <div className="flex items-center gap-2 md:gap-4">
            <DropdownMenu onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}>
                <DropdownMenuTrigger className="flex items-center p-0 border-none">
                    <img
                        src="/f1-winners.png"
                        alt="Avatar"
                        className="size-10 rounded-full object-cover"
                    />
                    <div className="ml-3 hidden md:flex md:items-center md:gap-2">
                        <p>{user?.first_name}</p>
                        <RxChevronDown
                            className={clsx("shrink-0 text-text-primary transition-transform duration-300", {
                                "rotate-180": isDropdownOpen,
                                "rotate-0": !isDropdownOpen,
                            })}
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    sideOffset={0}
                    className="mt-1.5 min-w-32 px-0 py-2 md:min-w-48 bg-background"
                >
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <a type='button' onClick={()=>logout()}>Log Out</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export const AppSidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Sidebar className="py-6" closeButtonClassName="fixed top-4 right-4 text-white">
                <SidebarHeader className="hidden lg:block">
                    <a href="#">
                        <img src="/f1-winners.png" alt="f1-winners logo" />
                    </a>
                </SidebarHeader>
                <SidebarContent className="mt-6 bg-background">
                    <SidebarMenu>
                        {menuItems.map((item, index) => (
                            <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="flex w-full items-center">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter className="pb-6 lg:pb-0">
                    <div>
                        {footerItems.map((item, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url} className="flex w-full items-center">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </div>
                </SidebarFooter>
            </Sidebar>
            <main className="min-h-screen w-full pt-16 lg:pt-0">{children}</main>
        </SidebarProvider>
    );
};
