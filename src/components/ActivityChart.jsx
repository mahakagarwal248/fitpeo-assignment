import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const data = [
  { data: [3, 4.8, 5.5, 5.2, 4.8, 7, 6, 9, 17, 8] },
  { data: [10, 4.2, 5.5, 5.4, 2, 8, 11, 13, 12, 4] },
];
function ActivityChart() {
  return (
    <BarChart
      xAxis={[
        { scaleType: "band", data: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25] },
      ]}
      yAxis={[{ scaleType: "linear", data: [0, 5, 10, 15] }]}
      series={data}
      height={220}
      borderRadius={8}
      sx={{
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: 2,
          fill: "#f1f1f1",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: 2,
          fill: "#f1f1f1",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: "#f1f1f1",
          strokeWidth: 2,
        },
        // leftAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: "#f1f1f1",
          strokeWidth: 2,
        },
      }}
    />
  );
}

export default ActivityChart;
