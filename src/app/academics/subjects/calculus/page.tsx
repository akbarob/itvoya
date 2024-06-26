"use client";
import Dashboardlayout from "@/components/layouts/dashboard/dashboard.layout";
import FirstBox from "@/components/shared/FirstBox";
import GradeChart from "@/components/shared/GradeDistributionChart";
import PerformanceTrend from "@/components/shared/PerformanceTrend";
import Breadcrumb from "@/components/shared/breadcrumb";
import Image from "next/image";
import React, { useState } from "react";

const teacher = [
    {
        name: "Micheal Dunkwu",
        class: "Class 1B",
    },
    {
        name: "Olugbenga Festus",
        class: "Class 1A",
    },
    {
        name: "Carolina Omot",
        class: "Class 1C",
    },
];
const Classes = [
    {
        enrolledStudents: "52",
        class: "Class 1B",
    },
    {
        enrolledStudents: "31",
        class: "Class 1A",
    },
    {
        enrolledStudents: "49",
        class: "Class 1C",
    },
];
const upload = [
    {
        enrolledStudents: "What is a volcano.pdf",
        class: "Class 1B",
    },
];
const values = [
    "Subject information",
    "Grade performance",
    "Assesment",
    "Resources & Materials",
];
export default function Page() {
    const [active, setActive] = useState<number>(0);
    console.log(active);
    return (
        <Dashboardlayout>
            <div className="flex flex-col w-full">
                <div className="flex mb-5 w-full justify-between items-center">
                    <Breadcrumb
                        route="Academics & Results"
                        sroute="subject"
                        broute="calculus"
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
                <div className="mb-4">
                    <p className="text-[32px] font-semibold text-black">
                        Calculus 2
                    </p>
                    <p className="text-[14px]">CALC102</p>
                </div>

                <div className=" lg:grid  place-content-start  mx-auto w-full  border-y border-y-secondary mb-[32px] ">
                    <ul className="flex gap-12 items-center mx-auto w-full">
                        {values?.map((item, i) => (
                            <li
                                key={i}
                                onClick={() => {
                                    setActive(i);
                                }}
                                className={`${
                                    active === i
                                        ? "font-semibold border-b-4 border-b-primary border-y-secondary text-black "
                                        : ""
                                }  cursor-pointer text-[16px] py-3`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {active === 0 && (
                    <div>
                        {" "}
                        <div className="grid grid-cols-3 w-full justify-between items-center gap-8 mx-auto mb-5">
                            <FirstBox
                                title="Enrolled Students"
                                digit={132}
                                icon={"enrolled"}
                            />
                            <FirstBox
                                title="Classes"
                                digit={3}
                                icon={"laptop"}
                            />
                            <FirstBox
                                title="Teachers"
                                digit={3}
                                icon={"teachers"}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-black">
                            <div className="w-full rounded-[6px] bg-white p-4">
                                <p className="text-[18px] font-semibold text-black mb-2">
                                    Teachers
                                </p>
                                <div className="gap-2 h-[56px] bg-[#00004A] text-white w-full justify-start items-center grid grid-cols-2 px-2 place-content-center place-items-center">
                                    <div className="w-[150px] capitalize flex gap-2 items-center ">
                                        <p>Teachers Name</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                    <div className="w-[150px] capitalize flex gap-2 items-center ">
                                        <p>Class Name</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                </div>
                                {teacher.map((item, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-2 gap-2 h-[56px] place-content-center place-items-center odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2">
                                        <div className="w-[150px] capitalize">
                                            {item.name}
                                        </div>
                                        <div className="capitalize">
                                            {item.class}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full bg-white p-4">
                                <p className="text-[18px] text-black mb-2 font-semibold">
                                    Classes
                                </p>
                                <div className="gap-2 h-[56px] bg-[#00004A] text-white w-full justify-start items-center grid grid-cols-2 px-2 place-content-center place-items-center">
                                    <div className="w-[150px] capitalize flex gap-2 items-center ">
                                        <p>Class Name</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                    <div className="w-[150px] capitalize flex gap-2 items-center ">
                                        <p>Enrolled Students</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                </div>
                                {teacher.map((item, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-2 gap-2 h-[56px] place-content-center place-items-center odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2">
                                        <div className="w-[150px] capitalize">
                                            {item.name}
                                        </div>
                                        <div className="capitalize">
                                            {item.class}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {active === 1 && (
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-[6px] p-4">
                                <PerformanceTrend />
                            </div>
                            <div className="bg-white rounded-[6px] p-4">
                                <GradeChart />
                            </div>
                        </div>
                    </div>
                )}
                {active === 2 && (
                    <div>
                        <div className="flex gap-4 my-2 text-black">
                            <div className="flex flex-col">
                                <label className="text-[12px] mb-2">
                                    Select Term
                                </label>
                                <select className="w-[200px] h-[40px] bg-white rounded-[6px]">
                                    <option>First Term</option>
                                    <option>Second Term</option>
                                    <option>Thrid Term</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[12px] mb-2 text-">
                                    Select Term
                                </label>
                                <select className="w-[200px] h-[40px] bg-white rounded-[6px]">
                                    <option>Week 1</option>
                                    <option>Week 2</option>
                                    <option>Week 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="gap-2 flex justify-between w-full my-[32px]">
                            <div className="flex gap-2">
                                {" "}
                                <button className="flex gap-2 justify-center items-center bg-warning/10 text-warning  px-4 py-2 rounded-[6px]">
                                    {" "}
                                    <Image
                                        src={`/assets/images/warning.png`}
                                        width={100}
                                        height={100}
                                        sizes="100"
                                        className=" h-[20px] w-[20px]"
                                        alt="icon"
                                    />{" "}
                                    <p className="text-warning">
                                        {" "}
                                        Outstanding Assignments (2)
                                    </p>
                                </button>
                                <button className="items-center flex gap-2 justify-center bg-error/10 text-error  px-4 py-2 rounded-[6px]">
                                    {" "}
                                    <Image
                                        src={`/assets/images/error.png`}
                                        width={100}
                                        height={100}
                                        sizes="100"
                                        className=" h-[20px] w-[20px]"
                                        alt="icon"
                                    />{" "}
                                    <p className="text-error ">
                                        {" "}
                                        Grading Overdue
                                    </p>
                                </button>
                            </div>

                            <div>
                                <button className="flex gap-2 justify-center items-center bg-primary text-white px-4 py-2 rounded-[6px]">
                                    {" "}
                                    <Image
                                        src={`/assets/images/add.svg`}
                                        width={100}
                                        height={100}
                                        sizes="100"
                                        className=" h-[20px] w-[20px]"
                                        alt="icon"
                                    />{" "}
                                    <p> Create New Assessment</p>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-[6px] p-4 text-black">
                                <div className="flex  items-center mb-5">
                                    <p> Outstanding Assignments</p>
                                </div>
                                <div className="gap-2 h-[56px] bg-[#00004A] text-white w-full justify-start items-center grid grid-cols-2 px-2 place-content-center place-items-center">
                                    <div className="w-full capitalize flex gap-2 items-center ">
                                        <p>Students Name</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                    <div className="w-[150px] capitalize flex gap-2 items-center ">
                                        <p>Submission</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                </div>
                                {teacher.map((item, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-2 gap-2 h-[56px] place-content-center place-items-center odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2">
                                        <div className="w-[150px] capitalize text-black">
                                            {item.name}
                                        </div>
                                        <div className="capitalize">
                                            <button className="text-warning bg-warning/10 px-3 py-2 capitalize font-semibold">
                                                {" "}
                                                Pending
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white rounded-[6px] p-4 text-black">
                                <div className="flex  items-center  mb-5">
                                    <p>Submitted Assignments</p>
                                </div>
                                <div className="gap-2 h-[56px] bg-[#00004A] text-white w-full justify-start items-center grid grid-cols-2 px-2 place-content-center place-items-center">
                                    <div className="w-full capitalize flex gap-2 items-center ">
                                        <p>Students Name</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                    <div className="w-[150px] capitalize flex gap-2 items-center ">
                                        <p>Draging</p>{" "}
                                        <Image
                                            src="/assets/images/upDown.png"
                                            alt="edit"
                                            width={100}
                                            height={100}
                                            className="h-[20px] w-[20px]"
                                        />{" "}
                                    </div>
                                </div>
                                {teacher.map((item, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-2 gap-2 h-[56px] place-content-center place-items-center odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2">
                                        <div className="w-[150px] capitalize text-black">
                                            {item.name}
                                        </div>

                                        <div className="capitalize">
                                            <button className="text-[#0D6EFD]  px-3 py-2 capitalize font-semibold flex gap-4 items-center">
                                                <Image
                                                    src="/assets/images/edit.png"
                                                    alt="edit"
                                                    width={100}
                                                    height={100}
                                                    className="h-[20px] w-[20px]"
                                                />
                                                <p>Grading</p>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {active === 3 && (
                    <div>
                        <button className="flex gap-2 justify-center bg-primary text-white px-4 py-2 rounded-[6px]">
                            {" "}
                            <Image
                                src={`/assets/images/upload.svg`}
                                width={100}
                                height={100}
                                sizes="100"
                                className=" h-[20px] w-[20px]"
                                alt="icon"
                            />{" "}
                            <p> Upload New Material</p>
                        </button>
                        <div className="bg-white text-black p-4 mt-12">
                            <p className="mb-3">Uploaded Files</p>
                            <div className="gap-2 h-[56px] bg-[#00004A] text-white w-full justify-start items-center grid grid-cols-2 px-2 place-content-center place-items-center">
                                <div className="w-full capitalize flex gap-2 items-center justify-start ">
                                    <p>Class Name</p>{" "}
                                    <Image
                                        src="/assets/images/upDown.png"
                                        alt="edit"
                                        width={100}
                                        height={100}
                                        className="h-[20px] w-[20px]"
                                    />{" "}
                                </div>
                                <div className="w-full capitalize flex gap-2 items-center justify-start">
                                    <p>Enrolled Students</p>{" "}
                                    <Image
                                        src="/assets/images/upDown.png"
                                        alt="edit"
                                        width={100}
                                        height={100}
                                        className="h-[20px] w-[20px]"
                                    />{" "}
                                </div>
                            </div>
                            {upload.map((item, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-2 gap-2 h-[56px] place-content-center place-items-start odd:bg-white even:bg-[#F0F0F0] w-full justify-between px-2 ">
                                    <div className="w-full capitalize">
                                        {item.enrolledStudents}
                                    </div>
                                    <div className="capitalize">
                                        {item.class}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Dashboardlayout>
    );
}
