// Dependencies
import { FC } from "react";
import "./index.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import AnimationLineChart from "./components/AnimationLineChart";


const App: FC = () => {
  return (
    <main className="container mt-5">
      <h2 className="fs-2 mb-5 bg-primary text-white px-2 py-2 rounded">Example Charts</h2>
      <LineChart />
      <AnimationLineChart />
      <BarChart />
      <PieChart />
    </main>
  )
}
export default App;
