"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type AppModalButton = {
    children: ReactNode;
    variant?: "default" | "ghost" | "destructive";
    onClick?: () => void;
    type?: "button" | "submit";
    form?: string;
};

type AppDestroyModalProps = {
    isOpen: boolean;
    title: string;
    description?: string;
    closeModal: (open: boolean) => void;
    onDestroy: () => void;
    buttons?: AppModalButton[];
};

export const AppDestroyModal = ({
                                    isOpen,
                                    title,
                                    description,
                                    closeModal,
                                    onDestroy,
                                    buttons = [],
                                }: AppDestroyModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={() => {
                            onDestroy();
                            closeModal(false);
                        }}
                    >
                        Deletar
                    </Button>

                    {buttons?.map((button, index) => (
                        <Button
                            key={index}
                            variant={button.variant || "default"}
                            onClick={button.onClick}
                            type={button.type || "button"}
                            form={button.form}
                        >
                            {button.children}
                        </Button>
                    ))}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
