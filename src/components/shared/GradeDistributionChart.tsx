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
    length: 100,
    elements: {
        bar: {
            borderWidth: 0,
        },
    },
    responsive: true,
};
const GradeChart = () => {
    return (
        <div className="">
            <Bar
                width={900}
                height={900}
                options={options}
                data={{
                    labels: ["A", "B", "C", "D", "E", "F"],
                    datasets: [
                        {
                            label: "Grade distribution",
                            data: [60, 65, 75, 90, 44, 20, 100],
                            backgroundColor: [
                                "green",
                                "green",
                                "blue",
                                "blue",
                                "yellow",
                                "red",
                            ],
                            barThickness: 20,
                        },
                    ],
                }}
            />
        </div>
    );
};

export default GradeChart;
