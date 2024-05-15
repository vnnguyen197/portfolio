"use client";
import { ReactNode, Suspense } from "react";

interface ILayoutProvidesProps {
    children: ReactNode;
}

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    );
}
