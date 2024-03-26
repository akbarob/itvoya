"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    route: string;
    sroute?: string;
    broute?: string;
};

export default function Breadcrumb({ route, sroute, broute }: Props) {
    return (
        <div className="flex  text-gray text-[14px]">
            <span className="flex justify-center items-center">
                Home{" "}
                <Image
                    src={`/assets/images/right.svg`}
                    width={100}
                    height={100}
                    sizes="100"
                    className=" h-[14px] w-[14px]"
                    alt="icon"
                />
            </span>
            <p className={`${route && !sroute && "font-semibold text-black"}`}>
                {route}{" "}
            </p>
            {sroute && !broute && (
                <span
                    className={`${
                        !broute && "text-black"
                    } flex justify-center items-center capitalize font-semibold `}>
                    {" "}
                    <Image
                        src={`/assets/images/right.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[14px] w-[14px]"
                        alt="icon"
                    />
                    {`${sroute}`}
                </span>
            )}
            {sroute && broute && (
                <span
                    className={`${
                        !broute && "text-black"
                    } flex justify-center items-center `}>
                    {" "}
                    <Image
                        src={`/assets/images/right.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[14px] w-[14px]"
                        alt="icon"
                    />
                    {`${sroute}`}
                </span>
            )}
            {broute && (
                <span className="font-bold capitalize flex justify-center items-center text-black">
                    {" "}
                    <Image
                        src={`/assets/images/right.svg`}
                        width={100}
                        height={100}
                        sizes="100"
                        className=" h-[14px] w-[14px]"
                        alt="icon"
                    />
                    {`${broute}`}
                </span>
            )}
        </div>
    );
}
