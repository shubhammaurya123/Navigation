import DonutChart from "react-donut-chart";
import "../App.css";
const reactDonutChartdata = [
  {
    label: "NDC",
    value: 25,
    color: "#FEC102",
  },
  {
    label: "RDC",
    value: 65,
    color: "#57CC78",
  },
  {
    label: "STOCKIST",
    value: 100,
    color: "#FF4560",
  },
];
const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
];
const reactDonutChartInnerRadius = 0.7;
const reactDonutChartSelectedOffset = 0.01;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function PieChart() {
  return (
    <div className="piechart">
      <h2>Top emissions by type</h2>
      <DonutChart
        width={333}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
  );
}
