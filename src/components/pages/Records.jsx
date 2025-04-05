import React from "react";
import { motion } from "framer-motion";
import { useRecords } from "../../hooks/useRecords";
import { CalendarDays, Stethoscope, StickyNote } from "lucide-react";

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const Records = () => {
  const { data: records, isLoading, isError } = useRecords();

  if (isLoading) return <p>Loading records...</p>;
  if (isError) return <p>Error loading records.</p>;
  if (!records || records.length === 0) return <p>No records found.</p>;

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md text-gray-700 font-bold"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Medical Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4">Doctor</th>
              <th className="py-3 px-4">Diagnosis</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <motion.tr
                key={record.id}
                className="border-b even:bg-gray-50 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <td className="py-3 px-4 flex items-center gap-2">
                  <Stethoscope size={16} className="text-gray-500" />
                  {record.Doctors?.name || "N/A"}
                </td>
                <td className="py-3 px-4">{record.diagnosis}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <CalendarDays size={16} className="text-gray-500" />
                  {formatDate(record.date)}
                </td>
                <td className="py-3 px-4 flex items-start gap-2">
                  <StickyNote size={16} className="mt-1 text-gray-500" />
                  <span className="line-clamp-2">{record.notes}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Records;
