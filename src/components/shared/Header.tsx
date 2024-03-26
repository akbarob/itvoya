import Image from "next/image";
import React from "react";
import Link from "next/link";
import InputField from "../ui/input";

const headerlinks = [
    { icon: "home", route: "Home" },
    { icon: "ChartPieSlice", route: "Dashboard" },
    { icon: "wallet", route: "Wallet" },
    { icon: "ListChecks", route: "Plan a trip" },
];

export default function Header() {
    return (
        <div className=" p-4 flex justify-between items-center text-[14px] w-full">
            <div className="flex gap-4 justify-center items-center">
                {" "}
                <Image
                    src={`/assets/images/logo.svg`}
                    width={100}
                    height={100}
                    sizes="100"
                    alt="logo"
                    className="w-[48.16px] h-[46px]"
                />
                <div className="flex justify-center items-center ">
                    <InputField
                        name="search"
                        isPassword={false}
                        type="search"
                        placeholder="Search"
                        required={false}
                        icon="search"
                    />
                </div>
            </div>

            <div className="  flex justify-end items-center">
                {" "}
                <ul className="flex gap-[24px]">
                    {headerlinks.map((link, i) => (
                        <Link
                            key={i}
                            href={`#`}
                            className="flex flex-col justify-center items-center">
                            <Image
                                src={`/assets/images/${link.icon}.svg`}
                                width={100}
                                height={100}
                                sizes="100"
                                className=" h-[24px] w-[25px]"
                                alt="icon"
                            />
                            <li>{link.route}</li>
                        </Link>
                    ))}
                </ul>
                <div className="h-[48px] bg-secondary w-[1px] mx-4" />
                <Link
                    href={`#`}
                    className="flex flex-col justify-center items-center mx-2">
                    <Image
                        src={`/assets/images/bell.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[24px] w-[25px]"
                        alt="icon"
                    />
                    <p>Notifications</p>
                </Link>
                <Link href={`#`} className="flex  justify-center items-center">
                    <Image
                        src={`/assets/images/avatar.png`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[44px] w-[45px]"
                        alt="icon"
                    />{" "}
                    <Image
                        src={`/assets/images/down.png`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[24px] w-[24px]"
                        alt="icon"
                    />
                </Link>
            </div>
        </div>
    );
}
