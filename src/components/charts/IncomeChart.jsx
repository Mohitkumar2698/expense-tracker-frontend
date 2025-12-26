import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ExpenseContext } from "../../context/ExpenseContext";

const IncomeChart = () => {
  const { IncomeChartData: data } = useContext(ExpenseContext);
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
        >
          {/* Subtle modern grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

          {/* Clean axes with modern styling */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#000", fontSize: 12 }}
            axisLine={{ stroke: "#000" }}
          />
          <YAxis
            tick={{ fill: "#000", fontSize: 12 }}
            axisLine={{ stroke: "#000" }}
          />

          {/* Modern tooltip and legend */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#10b981" }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />

          {/* Thicker lines with vibrant modern colors and smooth dots */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10b981" // Vibrant purple
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 4 }}
            activeDot={{ r: 6 }}
          />
          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="#10b981" // Emerald green
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 4 }}
            activeDot={{ r: 6 }}
          /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;
