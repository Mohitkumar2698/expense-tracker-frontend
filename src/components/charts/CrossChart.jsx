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

const data = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
  { name: "Jul", uv: 3490, pv: 4300 },
  { name: "Aug", uv: 3900, pv: 5200 },
  { name: "Sep", uv: 4100, pv: 6100 },
  { name: "Oct", uv: 4500, pv: 5500 },
  { name: "Nov", uv: 5000, pv: 6800 },
  { name: "Dec", uv: 5200, pv: 7200 },
];

const CrossChart = () => {
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
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          {/* Subtle modern grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

          {/* Clean axes with modern styling */}
          <XAxis
            dataKey="name"
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
            labelStyle={{ color: "#374151" }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />

          {/* Thicker lines with vibrant modern colors and smooth dots */}
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FF2C2C" // Vibrant purple
            strokeWidth={3}
            dot={{ fill: "#FF2C2C", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#10b981" // Emerald green
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CrossChart;
