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

type AppModalProps = {
    isOpen: boolean;
    title: string;
    description?: string;
    children: ReactNode;
    formId?: string;
    closeModal: (open: boolean) => void;
    buttons?: AppModalButton[];
};

export const AppModal = ({
                             isOpen,
                             title,
                             description,
                             children,
                             formId,
                             closeModal,
                             buttons = [],
                         }: AppModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>

                <div>{children}</div>

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
                        variant="default"
                        type={formId ? "submit" : "button"}
                        form={formId}
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        Confirmar
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
