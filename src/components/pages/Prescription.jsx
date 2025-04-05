import React from "react";
import { motion } from "framer-motion";
import Card from "../UI/Card";
import { usePrescriptions } from "../../hooks/usePrescriptions";

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const Prescription = () => {
  const { data: prescriptions, isLoading, isError } = usePrescriptions();

  if (isLoading) {
    return <p className="p-6 text-gray-600">Loading prescriptions...</p>;
  }

  if (isError || !prescriptions) {
    return <p className="p-6 text-red-600">Failed to load prescriptions.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Prescriptions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prescriptions.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card
              date={formatDate(p.date)}
              doctor={p.Doctors?.name || "N/A"}
              medicine={p.medicine}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Prescription;
