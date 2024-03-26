"use client";
import Dashboardlayout from "@/components/layouts/dashboard/dashboard.layout";
import Breadcrumb from "@/components/shared/breadcrumb";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";

const subject = [
    {
        subject: "Calculus",
        instructor: "Akbar",
        EnroolledStudents: "7",
        status: "active",
        blank: "/calculus",
    },
    {
        subject: "English",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "Maths",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "Econs",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "computer",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "subject",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
    {
        subject: "subject",
        instructor: "instructor",
        EnroolledStudents: "10",
        status: "active",
        blank: "",
    },
];
export default function Page() {
    const [page, setPage] = React.useState(1);

    const handlePageChange = (event: any, value: any) => {
        setPage(value);
        alert(value);
    };
    return (
        <Dashboardlayout>
            <div>
                <div className="flex mb-5 justify-between w-full items-center">
                    <Breadcrumb
                        route="Academics & Results"
                        sroute={"subject"}
                    />
                    <div className="flex gap-2 justify-center items-center text-black">
                        <label className="text-[12px]  ">Select Term</label>
                        <select className="w-[200px] h-[40px] rounded-[6px] bg-transparent border border-gray">
                            <option>2023/2024</option>
                            <option>2022/2023</option>
                            <option>2021/2022</option>
                        </select>
                    </div>
                </div>
                <div className="bg-white text-black rounded-[8px] w-full p-4 mx-auto">
                    <div className="flex justify-between  mb-3 w-full flex-1 p-2">
                        <div className="flex  items-center ">
                            <p>All subjects</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-[#F7F9FC] border border-secondary rounded-[8px] px-4 py-2 flex gap-2 items-center">
                                <Image
                                    src="/assets/images/import.png"
                                    alt="edit"
                                    width={100}
                                    height={100}
                                    className="h-[20px] w-[20px]"
                                />{" "}
                                <p>import </p>
                            </button>
                            <button className="bg-[#F7F9FC] border border-secondary rounded-[8px] px-4 py-2 flex gap-2 items-center">
                                <Image
                                    src="/assets/images/plus.png"
                                    alt="edit"
                                    width={100}
                                    height={100}
                                    className="h-[20px] w-[20px]"
                                />
                                <p>Add Subject </p>
                            </button>
                        </div>
                    </div>
                    <div className="h-full ">
                        <div className="gap-2 h-[56px] bg-[#00004A] text-white w-full justify-start items-center grid grid-cols-5 px-2 place-content-center place-items-center">
                            <div className="w-[150px] capitalize">subject</div>
                            <div className="capitalize">instructor</div>
                            <div>Enrolled Students</div>
                            <div>status</div>
                            <div>Edit/ Delete </div>
                        </div>
                        {subject.map((item, i) => (
                            <Link
                                href={"/academics/subjects/calculus"}
                                key={i}
                                className="grid grid-cols-5 gap-2 h-[56px] place-content-center place-items-center odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2">
                                <div className="w-[150px] capitalize">
                                    {item.subject}
                                </div>
                                <div className="capitalize">
                                    {item.instructor}
                                </div>
                                <div>{item.EnroolledStudents}</div>
                                <div>
                                    <button className="text-[#036B26] bg-[#036B26]/10 px-3 py-2 capitalize font-semibold">
                                        {" "}
                                        {item.status}
                                    </button>
                                </div>
                                <div className="flex">
                                    {" "}
                                    <button className="text-[#0D6EFD]  px-3 py-2 capitalize font-semibold flex gap-4 items-center">
                                        <Image
                                            src="/assets/images/edit.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />
                                        <p>Edit</p>
                                    </button>
                                    <button className="text-[#0D6EFD] px-3 py-2 capitalize font-semibold flex items-center gap-4">
                                        <Image
                                            src="/assets/images/delete.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />
                                        <p>Delete</p>
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mx-auto mt-14">
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            page={page}
                            shape="rounded"
                            color="primary"
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
            </div>
        </Dashboardlayout>
    );
}
