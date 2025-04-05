import React from "react";
import { motion } from "framer-motion";
import Navbar from "../UI/Navbar";
import HealthMetrics from "../UI/HealthMetrics";

const Home = () => {
  return (
    <div className="min-h-screen text-rose-400">
      <Navbar />

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Welcome to Your Health
            <br />
            Management Dashboard
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-gray-400">
            Streamline your healthcare experience with our intuitive dashboard.
            Manage patient data, appointments, and analytics all in one place.
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className=" text-white px-4 py-2 text-sm rounded bg-rose-400 hover:bg-rose-500"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border px-4 py-2 text-sm rounded"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      <HealthMetrics />
      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} P. Akash. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
