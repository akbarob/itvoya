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
    indexAxis: "y" as const,
    length: 100,
    elements: {
        bar: {
            borderWidth: 0,
        },
    },
    responsive: true,
    plugins: {
        // legend: {
        //     position: "right" as const,
        // },
        // title: {
        //     display: true,
        //     text: "Chart.js Horizontal Bar Chart",
        // },
    },
};
const MyChart = () => {
    return (
        <div className="">
            <Bar
                width={900}
                height={900}
                options={options}
                data={{
                    labels: [
                        "Mathematics",
                        "English",
                        "Yoruba",
                        "Physics",
                        "Commerce",
                        "Computer",
                        "Agric",
                        "Economics",
                        "Arts",
                        "Biology",
                    ],
                    datasets: [
                        {
                            label: "Data",
                            data: [100, 90, 80, 60, 52, 49, 46, 38, 35, 20],
                            backgroundColor: "blue",
                            barThickness: 20,
                        },
                    ],
                }}
            />
        </div>
    );
};

export default MyChart;
