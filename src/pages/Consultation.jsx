import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Consultation() {
  return (
    <>
      <Navbar />
      <motion.div
        className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form className="space-y-4 mt-6 max-w-xl mx-auto">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded bg-light-bg dark:bg-[#1a1a1a] border border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-light-bg dark:bg-[#1a1a1a] border border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">What do you need help with?</label>
            <textarea
              rows="4"
              placeholder="Briefly describe your project or problem"
              className="w-full px-4 py-2 rounded bg-light-bg dark:bg-[#1a1a1a] border border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-alt text-black dark:text-white px-6 py-2 font-bold rounded hover:brightness-110 transition"
          >
            Request Consultation
          </button>
        </form>
      </motion.div>
    </>
  );
}

export default Consultation;
