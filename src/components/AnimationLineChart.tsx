/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import { FC, useMemo } from "react";

// Chart Dependencies
import { Line } from "react-chartjs-2";
import useChart from "../hooks/useChart";
import { daysOfWeek } from "../utils/chart/date";
import { ChartOptions } from "chart.js";

const AnimationLineChart: FC = () => {
  const { createDataObject, createOptionsObject, createDatasetObject, createLinearGradient, createDatasetsArray, structure } = useChart();

  const chartCaseDataset = useMemo(() => createDatasetObject({
    ...structure.dataset,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fill: true,
    backgroundColor: createLinearGradient("#6610f240", '#dc354540', 0, 0, 0, 300),
  }), [createDatasetObject, createLinearGradient, structure.dataset]);

  const chartData = useMemo(() => createDataObject({
    ...structure.data,
    labels: daysOfWeek,
    datasets: createDatasetsArray([chartCaseDataset])
  }), [chartCaseDataset, createDataObject, createDatasetsArray, structure.data])


  const chartOptions = createOptionsObject({
    ...structure.options,
    animations: {
      tension: {
        duration: 2000,
        easing: 'easeInQuad',
        from: .5,
        to: 1,
        loop: true
      }
    },
  }) as ChartOptions<any>;

  return (
    <article className="card shadow mt-5">
      <div className="card-header">
        <h2 className="card-title">Animated Line Chart</h2>
      </div>
      <div className="card-body">
        <Line data={chartData} options={chartOptions} />
      </div>
    </article>
  )
}
export default AnimationLineChart;
