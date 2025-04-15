import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <Navbar />
      <motion.div
        className="w-full min-h-screen bg-white dark:bg-black text-white px-6 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-primary-alt text-center mb-10">
          Services I Offer
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white">🕸 Web Development</h2>
            <p>
              Full-stack web applications built with React, Tailwind, and MongoDB.
              Clean design, fast performance, and responsive interfaces.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">🎮 Game Prototypes</h2>
            <p>
              Concept demos or indie game mechanics using Unity and C#. Built for testing, pitching, or early funding rounds.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">🛠 Workflow Tools</h2>
            <p>
              Bespoke desktop or web tools for charities, teams, or individuals.
              Ideal for reducing manual work and improving data accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">💡 Technical Consulting</h2>
            <p>
              Have an idea but don’t know where to start? I help scope features, identify blockers, and suggest pragmatic, cost-effective solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Services;
