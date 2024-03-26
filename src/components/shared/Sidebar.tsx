"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const links = [
    { icon: "ChartPieSlice", route: "dashboard", label: "Dashboard" },
    { icon: "sDashboard", route: "class", label: "Class Management" },
    { icon: "class", route: "staff", label: "Staff Management" },
    { icon: "student", route: "student", label: "Student Management" },
    { icon: "parent", route: "parent", label: "Parent Management" },
    { icon: "Exam", route: "academics", label: "Academics & Results" },
    { icon: "scholl", route: "school", label: "School Management" },
    { icon: "sWallet", route: "finance", label: "Finance Management" },
    { icon: "account", route: "account", label: "Acount Managment" },
];
export default function Sidebar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className=" w-[300px] h-[700px] bg-white mt-10 rounded-[8px] flex flex-col justify-center items-center">
            <ul>
                {" "}
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={`/${link.route}`}
                        className={`${
                            pathname?.includes(link.route) &&
                            "text-primary bg-[#F3F7FF]"
                        } capitalize flex justify-start items-center px-2 gap-4 w-[252px] h-[56px] mx-auto  hover:bg-primary hover:text-white  rounded-[4px]`}>
                        <Image
                            src={`/assets/images/${link.icon}.svg`}
                            width={100}
                            height={100}
                            sizes="100"
                            className=" h-[22px] w-[26px]"
                            alt="icon"
                        />
                        {link.label}
                    </Link>
                ))}
                <div className="flex p-4 rounded-[4px] bg-secondary/10 w-[250px] mx-auto  items-center gap-3 my-2">
                    {" "}
                    <Image
                        src={`/assets/images/logo.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        alt="logo"
                        className="w-[48.16px] h-[46px]"
                    />{" "}
                    <div className="flex gap-2">
                        <div className="flex flex-col">
                            {" "}
                            <p className="font-semibold text-black">GoSchool</p>
                            <p>Admin Account</p>
                        </div>

                        <div className="flex justify-center items-center">
                            {" "}
                            <Image
                                src={`/assets/images/upDownGray.svg`}
                                width={100}
                                height={100}
                                sizes="100"
                                alt="icon"
                                className="w-[24px] h-[24px]"
                            />{" "}
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    );
}
