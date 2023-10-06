/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import { FC, useMemo } from "react";

// Chart Dependencies
import { Bar } from "react-chartjs-2";
import useChart from "../hooks/useChart";
import { daysOfWeek } from "../utils/chart/date";
import { ChartOptions } from "chart.js";

const BarChart: FC = () => {
  const { createDataObject, createDatasetObject, createDatasetsArray, structure } = useChart();

  const chartCaseDataset = useMemo(() => createDatasetObject(structure.dataset), [createDatasetObject, structure.dataset]);

  const chartData = useMemo(() => createDataObject({
    ...structure.data,
    labels: daysOfWeek,
    datasets: createDatasetsArray([chartCaseDataset])
  }), [chartCaseDataset, createDataObject, createDatasetsArray, structure.data])


  const chartOptions = structure.options as ChartOptions<any>;

  return (
    <article className="card shadow mt-5">
      <div className="card-header">
        <h2 className="card-title">Bar Chart</h2>
      </div>
      <div className="card-body">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </article>
  )
}
export default BarChart;
