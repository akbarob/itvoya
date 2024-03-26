import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    digit: number;
    icon: any;
};

export default function FirstBox({ title, digit, icon }: Props) {
    return (
        <div className="bg-[#FAFCFF] w-full h-[120px] rounded-[6px] p-4">
            <p className="text-[#667185]">{title}</p>
            <div className="flex justify-between p-4">
                <p className="font-bold text-black">{digit}</p>
                <Image
                    src={`/assets/images/${icon}.png`}
                    width={100}
                    height={100}
                    sizes="100"
                    className="w-[46px] h-[44px]"
                    alt="icon"
                />
            </div>
        </div>
    );
}
