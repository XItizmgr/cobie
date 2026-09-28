import { motion } from "motion/react";


export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-120px)] flex items-center px-6">
      <div className="max-w-5xl w-full mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-sm font-medium tracking-[0.2em] uppercase text-(--accent-blue)"
          >
            Local AI Coding Agent
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-(--main-heading-textBg)"
          >
            Your code.
            <br />
            <span className="text-(--accent-blue)">Your machine.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-(--text-color)"
          >
            COBIE is a local AI coding agent that helps you understand, inspect, and work with your projects directly from your terminal.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="flex flex-wrap gap-4 mt-10">
            <a
              href="#download"
              className="px-6 py-3 rounded-xl font-semibold
              bg-(--btn-bg-color)
              text-(--dark-brown)
              border border-(--border-color)
              shadow-lg
              transition-transform
              active:scale-[0.98]"
            >
              Get COBIE
            </a>

            <a
              href="#feature"
              className="px-6 py-3 rounded-xl font-semibold
              border border-(--border-color)
              text-(--logo-color)
              transition-colors
              hover:bg-(--btn-bg-color)"
            >
              Explore COBIE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
