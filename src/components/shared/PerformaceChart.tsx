"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    // indexAxis: "y" as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    // responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
        },
        // title: {
        //     display: true,
        //     text: "Chart.js Horizontal Bar Chart",
        // },
    },
};
const PerformanceChart = () => {
    return (
        <div className="">
            <Bar
                width={1000}
                height={1000}
                options={options}
                data={{
                    labels: [
                        "WK1",
                        "WK2",
                        "WK3",
                        "WK4",
                        "WK5",
                        "WK6",
                        "WK7",
                        "WK8",
                        "WK9",
                        "WK10",
                        "WK11",
                        "WK12",
                        "WK13",
                    ],
                    datasets: [
                        {
                            label: "Data",
                            data: [
                                100, 20, 15, 95, 68, 32, 100, 20, 75, 95, 68,
                                32, 10,
                            ],
                            backgroundColor: "gray",
                            barThickness: 10,
                        },
                        {
                            label: "Data",
                            data: [
                                40, 20, 15, 60, 68, 32, 100, 20, 15, 95, 68, 32,
                                5,
                            ],
                            barThickness: 10,

                            backgroundColor: "green",
                        },
                        {
                            label: "Data",
                            data: [
                                30, 80, 75, 10, 68, 32, 100, 60, 45, 95, 68, 32,
                                95,
                            ],
                            barThickness: 10,

                            backgroundColor: "yellow",
                        },
                    ],
                }}
            />
        </div>
    );
};

export default PerformanceChart;
