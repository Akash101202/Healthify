import React from "react";
import { motion } from "framer-motion";
import { useBilling } from "../../hooks/useBilling";

const statusClasses = {
  Paid: "bg-emerald-100 text-emerald-600",
  Unpaid: "bg-rose-100 text-rose-600",
};

const Billing = () => {
  const { data: billings, isLoading, isError } = useBilling();

  if (isLoading) {
    return <p className="p-6 text-gray-400">Loading billing records...</p>;
  }

  if (isError || !billings) {
    return <p className="p-6 text-red-500">Failed to load billing data.</p>;
  }

  return (
    <motion.div
      className="p-6 md:p-10 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-rose-100 shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-rose-500 mb-6">Billing Summary</h2>
      <div className="overflow-x-auto rounded-lg border border-rose-100">
        <table className="min-w-full text-sm text-left rounded-lg overflow-hidden">
          <thead className="bg-rose-100 text-rose-800 uppercase tracking-wider text-xs">
            <tr>
              <th className="py-3 px-4">Sr No.</th>
              <th className="py-3 px-4">Hospital</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Transaction ID</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {billings.map((bill, index) => (
              <motion.tr
                key={bill.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-rose-50 transition duration-200"
              >
                <td className="py-4 px-4 font-medium text-gray-600">
                  {index + 1}
                </td>
                <td className="py-4 px-4 text-gray-800 font-bold">
                  {bill.hospital}
                </td>
                <td className="py-4 px-4 text-gray-800">{bill.date}</td>
                <td className="py-4 px-4 text-rose-600 font-semibold">
                  ₹{bill.amount}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusClasses[bill.status]
                    }`}
                  >
                    {bill.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-500">{bill.id}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Billing;
