"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode, Suspense } from "react";

interface ILayoutProvidesProps {
    children: ReactNode;
}

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <div className="w-full flex justify-center items-center p-[12px]">
                {children}
            </div>
        </Suspense>
    );
}
