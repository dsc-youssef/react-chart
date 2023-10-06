## useChart hook

The `useChart` hook is a custom React hook that can be used to control chart data, options, gradients, etc. It is based on the Chart.js library, so you can use all of the features of Chart.js with this hook.

### Installation

```shell
npm install chart.js react-chartjs-2 -D
```

### documentations

- **react-chartjs-2** [https://react-chartjs-2.js.org/](https://react-chartjs-2.js.org/)
- **chart.js** [https://www.chartjs.org/](https://www.chartjs.org/)

### Usage

To use the hook, simply import it into your component and call it as a function. It will return an object with the following properties:

- **structure**: This object contains the default structure of a chart object, options object, and dataset object.
- **utils**: This object contains utility functions for working with charts, such as creating gradients and formatting data.
- **createDataObject**: This function creates a chart data object from the given data.
- **createOptionsObject**: This function creates a chart options object from the given options.
- **createDatasetObject**: This function creates a chart dataset object from the given dataset.
- **createDatasetsArray**: This function creates an array of chart dataset objects from the given arrays of datasets.
- **createLinearGradient**: This function creates a linear gradient background or shadow.

To create a chart, you can use the following steps:

1. Create a chart data object using the `createDataObject` function.
2. Create a chart options object using the `createOptionsObject` function.
3. Create a chart dataset object using the `createDatasetObject` function.
4. Pass the chart data object, chart options object, and chart dataset object to the `Chart` constructor.

Here is an example of how to use the hook:

```javascript
import useChart from "./useChart";
import { Line } from "react-chartjs-2";

const ChartComponent = () => {
  const {
    createDataObject,
    createOptionsObject,
    createDatasetObject,
    createDatasetsArray,
  } = useChart();

  // Create a chart dataset object.
  const dataset1 = createDatasetObject({
    label: "My Dataset",
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    backgroundColor: "#FF0000",
  });

  // Create datasets array.
  const datasets = createDatasetsArray([dataset1]);

  // Create a chart data object.
  const data = createDataObject({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: datasets,
  });

  // Create a chart options object.
  const options = createOptionsObject({
    title: {
      text: "My Chart",
    },
  });

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
```

### Gradients

This hook provides a `createLinearGradient` function that can be used to create linear gradient backgrounds or shadows for chart datasets. To use this function, simply pass in the two colors that you want to use for the gradient, as well as the x and y coordinates of the start and end points of the gradient.

Here is an example of how to use the `createLinearGradient` function to create a gradient background for a chart dataset:

```javascript
const dataset = createDatasetObject({
  backgroundColor: createLinearGradient("#FF0000", "#00FF00"),
});
```

### Conclusion

The `useChart` hook is a powerful tool that can be used to control all aspects of your charts. It is easy to use and provides a number of useful features, such as gradient support and utility functions.

This documentation code can be used to generate a Markdown document that describes the `useChart` hook. The documentation will include information on how to use the hook, as well as examples and explanations of the different properties and functions
