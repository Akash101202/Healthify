import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heart from "../../lottie/heart.json";
import bp from "../../lottie/bp.json";
import oxygen from "../../lottie/oxygen.json";
import temp from "../../lottie/temp.json";

const HealthMetrics = () => {
  return (
    <motion.div
      className="px-8 pb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Heart Rate */}
        <motion.div className="bg-rose-900 text-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <Lottie animationData={heart} loop className="w-24 h-24" />
          <div>
            <h4 className="text-2xl font-bold">Heart Rate</h4>
            <p className="text-xl">78 bpm</p>
          </div>
        </motion.div>

        {/* Blood Pressure */}
        <motion.div className="bg-indigo-500 text-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <Lottie animationData={bp} loop className="w-24 h-24" />
          <div>
            <h4 className="text-2xl font-bold">Blood Pressure</h4>
            <p className="text-xl">120 / 80 mmHg</p>
          </div>
        </motion.div>

        {/* Oxygen Level */}
        <motion.div className="bg-emerald-500 text-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <Lottie animationData={oxygen} loop className="w-24 h-24" />
          <div>
            <h4 className="text-2xl font-bold">Oxygen</h4>
            <p className="text-xl">98%</p>
          </div>
        </motion.div>

        {/* Temperature */}
        <motion.div className="bg-orange-500 text-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
          <Lottie animationData={temp} loop className="w-24 h-24" />
          <div>
            <h4 className="text-2xl font-bold">Temperature</h4>
            <p className="text-xl">36.6°C</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HealthMetrics;
