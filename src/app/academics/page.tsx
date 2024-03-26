import Dashboardlayout from "@/components/layouts/dashboard/dashboard.layout";
import FirstBox from "@/components/shared/FirstBox";
import Breadcrumb from "@/components/shared/breadcrumb";
import Image from "next/image";
import Chart from "chart.js/auto";
import Link from "next/link";
import MyChart from "@/components/shared/Chart";
import PerformanceChart from "@/components/shared/PerformaceChart";
const quicklinks = [
    { icon: "subject", route: "subjects", label: "all subjects" },
    { icon: "grade", route: "grade", label: "Grade Book" },
    { icon: "teacher", route: "Assignments", label: "Assign Teachers" },
    { icon: "report", route: "Reports", label: "Reports " },
    { icon: "grading", route: "Grading system", label: "all subjects" },
];

export default function Home() {
    return (
        <Dashboardlayout>
            <div className="flex flex-col w-full">
                <div className="flex mb-5 justify-between w-full items-center ">
                    <Breadcrumb route="Academics & Results" />
                    <div className="flex gap-2 justify-center items-center text-black">
                        <label className="text-[12px]  ">Select Term</label>
                        <select className="w-[200px] h-[40px] rounded-[6px] bg-transparent border border-gray">
                            <option>2023/2024</option>
                            <option>2022/2023</option>
                            <option>2021/2022</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-3 w-full justify-between items-center gap-8 mx-auto mb-5">
                    <FirstBox title="All Subjetcs" digit={43} icon={"laptop"} />
                    <FirstBox title="Active class" digit={43} icon={"active"} />
                    <FirstBox
                        title="Inactive classes"
                        digit={8}
                        icon={"inactive"}
                    />
                </div>
                <div>
                    <p className="font-semibold my-2 text-black capitalize">
                        Quick Links
                    </p>
                    <div className="grid grid-cols-5 gap-10">
                        {" "}
                        {quicklinks.map((item, i) => (
                            <Link
                                href={`academics/subjects`}
                                key={i}
                                className="p-4 w-[full] h-[120px] bg-white rounded-[8px] flex flex-col">
                                <div
                                    className={` rounded-full w-[70px] h-[70px]  flex justify-center items-center`}>
                                    {" "}
                                    <Image
                                        src={`/assets/images/${item.icon}.png`}
                                        width={100}
                                        height={100}
                                        sizes="100"
                                        className=" h-[42px] w-[42px] flex items-center justify-center"
                                        alt="icon"
                                    />
                                </div>

                                <p className="text-[16px] c font-semibold text-black capitalize">
                                    {item.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-black w-full justify-between items-center flex mt-12 gap-4">
                    <div className="w-[48%] h-full bg-white rounded-[8px] p-5">
                        <div className="w-full flex  justify-between items-center mb-4">
                            <div className="flex flex-col justify-start items-start">
                                <p className="font-semibold capitalize text-black">
                                    Top Subjects
                                </p>
                                <p className="text-[14px]">Per class</p>
                            </div>
                            <div className="fle flex-col justify-start items-start">
                                <p className="text-[12px]">Select Class</p>

                                <div>
                                    <select className="w-[150px] h-[40px] border border-secondary rounded-[8px]">
                                        <option>Class 1A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <MyChart />
                        </div>
                    </div>
                    <div className="w-[48%] h-full bg-white rounded-[8px] p-5">
                        <div className="w-full flex  justify-between items-center">
                            <div className="flex flex-col justify-start items-start">
                                <p className="font-semibold text-black">
                                    Performance
                                </p>
                                <p className="text-[14px]">Per term</p>
                            </div>
                            <div className="fle flex-col justify-start items-start mb-4">
                                <p className="text-[12px]">Select Class</p>
                                <div className="">
                                    <select className="w-[150px] h-[40px] border border-secondary rounded-[8px]">
                                        <option>Class 1A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <PerformanceChart />
                        </div>
                    </div>
                </div>
            </div>
        </Dashboardlayout>
    );
}
