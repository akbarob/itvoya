import Image from "next/image";
import React from "react";

type InputProps = {
    type: string;
    name: string;
    required: boolean;
    placeholder: string;
    isPassword: boolean;
    label?: string;
    icon?: string;
};
export default function InputField({
    type,
    name,
    required,
    label,
    placeholder,
    isPassword = false,
    icon,
}: InputProps) {
    return (
        <div className="border-secondary bg-secondary/10 flex justify-start gap-2 items-center border   py-4 px-2 rounded-[4px] h-[46px] w-[400px] ">
            <label htmlFor={name} className="text-sm mb-2 ">
                {label}

                {required && (
                    <span className="font-light text-2xl text-error absolute top pl-1">
                        *
                    </span>
                )}
            </label>
            {icon && (
                <Image
                    src={`/assets/images/${icon}.svg`}
                    width={100}
                    height={100}
                    sizes="100"
                    alt="logo"
                    className="w-[24px] h-[24px]"
                />
            )}
            <input
                type={type}
                placeholder={placeholder}
                className="bg-transparent w-full outline-none focus:outline-none border-none focus:border-none"
                id={name}
            />
        </div>
    );
}
