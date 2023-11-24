import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	RadarController,
	LineElement,
	PointElement,
	RadialLinearScale,
	Decimation,
	Filler,
	Legend,
	SubTitle,
	Title,
	Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadarController,
	LineElement,
	PointElement,
	RadialLinearScale,
	Decimation,
	Filler,
	Legend,
	SubTitle,
	Title,
	Tooltip
);

function Stats({ value }) {
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: [
				"HP",
				"Attack",
				"Defense",
				"Special-attack",
				"Special-defense",
				"Speed",
			],
			datasets: [
				{
					backgroundColor: "rgb(255, 99, 132, 0.4)",
					data: value,
				},
			],
		});
		setChartOptions({
			responsive: true,
			plugins: {
				legend: {
					display: false,
					position: "top",
				},
				title: {
					display: false,
					text: "Whom'st let the dogs out",
				},
				line: {
					borderWidth: 3,
				},
			},
		});
	}, []);

	return (
		<Radar
			data={chartData}
			style={{ width: "300px", height: "300px" }}
			options={chartOptions}
		/>
	);
}

export default Stats;
