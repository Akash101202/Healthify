import React from "react";
import { motion } from "framer-motion";
import { getAppointments } from "../../Services/apiAppoinments";
import { useAppointments } from "../../hooks/useAppointments";

// const appointments = [
//   {
//     id: 1,
//     doctor: "Dr. Ayesha Khan",
//     specialty: "Cardiologist",
//     date: "2025-04-07",
//     time: "10:00 AM",
//     status: "Confirmed",
//   },
//   {
//     id: 2,
//     doctor: "Dr. Sameer Malik",
//     specialty: "Dermatologist",
//     date: "2025-04-08",
//     time: "2:30 PM",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     doctor: "Dr. Neha Patel",
//     specialty: "Pediatrician",
//     date: "2025-04-09",
//     time: "9:00 AM",
//     status: "Cancelled",
//   },
//   {
//     id: 4,
//     doctor: "Dr. Faisal Rehman",
//     specialty: "Orthopedic",
//     date: "2025-04-10",
//     time: "11:15 AM",
//     status: "Confirmed",
//   },
// ];

const statusColors = {
  Confirmed: "text-green-600 bg-green-100",
  Pending: "text-yellow-600 bg-yellow-100",
  Cancelled: "text-red-600 bg-red-100",
};

const Appointments = () => {
  const { data: appointments, isLoading, isError } = useAppointments();

  if (isLoading) {
    return <p className="p-6 text-gray-600">Loading appointments...</p>;
  }

  if (isError || !appointments) {
    return <p className="p-6 text-red-600">Failed to load appointments.</p>;
  }

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow text-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Appointments</h2>
      <h1></h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              <th className="py-2 px-4">Doctor</th>
              <th className="py-2 px-4">Specialty</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <motion.tr
                key={appt.id}
                className="border-b hover:bg-gray-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <td className="py-3 px-4 font-medium">
                  {appt.Doctors?.name || "N/A"}
                </td>
                <td className="py-3 px-4">{appt.Doctors?.specialty}</td>
                <td className="py-3 px-4">{appt.date}</td>
                <td className="py-3 px-4">{appt.time}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusColors[appt.status]
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Appointments;
