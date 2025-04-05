import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useBilling } from "../../hooks/useBilling";

export default function HealthLineChart() {
  const { data: healthData, isLoading, isError } = useBilling();

  if (isLoading) {
    return <p className="p-6 text-gray-600">Loading healthData...</p>;
  }

  if (isError || !healthData) {
    return <p className="p-6 text-red-600">Failed to load healthData.</p>;
  }
  return (
    <div className="w-full h-[400px] p-4  rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Health Analytics (Expenditure to Visits)
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={healthData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <Line type="monotone" dataKey="visits" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
