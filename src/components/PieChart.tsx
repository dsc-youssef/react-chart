/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import { FC, useMemo } from "react";

// Chart Dependencies
import { Pie } from "react-chartjs-2";
import useChart from "../hooks/useChart";
import { daysOfWeek } from "../utils/chart/date";
import { ChartOptions } from "chart.js";

const PieChart: FC = () => {
  const { createDataObject, createDatasetObject, createDatasetsArray, structure } = useChart();

  const chartCaseDataset = useMemo(() => createDatasetObject({
    ...structure.dataset,
    backgroundColor: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    borderWidth: 0
  }), [createDatasetObject, structure.dataset]);

  const chartData = useMemo(() => createDataObject({
    ...structure.data,
    labels: daysOfWeek,
    datasets: createDatasetsArray([chartCaseDataset])
  }), [chartCaseDataset, createDataObject, createDatasetsArray, structure.data])


  const chartOptions = structure.options as ChartOptions<any>;

  return (
    <article className="card shadow my-5">
      <div className="card-header">
        <h2 className="card-title">Pie Chart</h2>
      </div>
      <div className="card-body">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </article>
  )
}
export default PieChart;
