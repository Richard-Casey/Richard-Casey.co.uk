import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <motion.div
        className="w-full min-h-screen bg-white dark:bg-black text-white dark:text-white px-6 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-[var(--primary-blue-alt)] mb-10">Contact</h1>

        <div className="max-w-xl mx-auto space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-[#f2f2f2] dark:bg-[#1a1a1a] border border-gray-700 text-white dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded bg-[#f2f2f2] dark:bg-[#1a1a1a] border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="How can I help?"
                className="w-full px-4 py-2 rounded bg-[#f2f2f2] dark:bg-[#1a1a1a] border border-gray-700 text-white dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-[var(--primary-blue-alt)] text-black dark:text-white px-6 py-2 font-bold rounded hover:brightness-110 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-center mt-10">
            <p>Or reach out via:</p>
            <div className="flex justify-center space-x-4 mt-2 text-sm">
              <a href="mailto:richard@example.com" className="hover:underline">Email</a>
              <a href="https://github.com/Richard-Casey" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
