import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, User2, Pill } from "lucide-react";

const Card = ({ date, doctor, medicine }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white p-5 rounded-2xl w-full border border-gray-200 shadow-md hover:shadow-lg transition duration-300"
    >
      <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-1">
        <User2 size={16} className="text-blue-500" />
        {doctor || "N/A"}
      </h3>

      <p className="text-sm text-gray-600 flex items-center gap-2 mb-3">
        <CalendarDays size={14} className="text-gray-500" />
        {date}
      </p>

      <div className="mt-2">
        <h4 className="font-medium text-sm text-gray-700 flex items-center gap-2 mb-2">
          <Pill size={14} className="text-emerald-500" />
          Medicines:
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 leading-relaxed">
          {medicine}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
