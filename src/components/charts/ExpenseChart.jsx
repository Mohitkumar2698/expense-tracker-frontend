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

const ExpenseChart = () => {
  const { ExpenseChartData: data } = useContext(ExpenseContext);
  if (!data || data.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#999", fontSize: "16px" }}>
          No expense data available
        </p>
      </div>
    );
  }

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
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#000", fontSize: 12 }}
            axisLine={{ stroke: "#000" }}
          />
          <YAxis
            tick={{ fill: "#000", fontSize: 12 }}
            axisLine={{ stroke: "#000" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#10b981" }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ fill: "#ef4444", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
