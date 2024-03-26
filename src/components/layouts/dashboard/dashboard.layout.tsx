import React from "react";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";

export default function Dashboardlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col ">
            <div>
                {" "}
                <Header />
            </div>
            <div className="bg-[#F0F2F5] flex justify-between ">
                <div className=" px-5 ">
                    <Sidebar />
                </div>

                <main className="flex flex-1  p-8 overflow-auto mx-auto ">
                    {children}
                </main>
            </div>
        </div>
    );
}
