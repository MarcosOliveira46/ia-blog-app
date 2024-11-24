import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export interface NavBarItemProps extends ButtonProps {
    active?: boolean;
}

export interface LayoutContentProps {
    children?: ReactNode;
}

export interface PageProps {
    label: string;
    route: string;
}