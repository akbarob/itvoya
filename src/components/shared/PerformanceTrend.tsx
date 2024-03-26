"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
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
const PerformanceTrend = () => {
    return (
        <div className="">
            <div>
                <Line
                    width={900}
                    height={900}
                    data={{
                        labels: ["first term", "second term", "third term"],
                        datasets: [
                            {
                                label: "Trend",
                                data: [60, 95, 60, 100],
                                backgroundColor: "#0D6EFD",
                                fill: "#0D6EFD",
                                showLine: true,
                                tension: 0.5,
                                borderColor: "#0D6EFD",
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default PerformanceTrend;
