import { sectionAnimation } from "./variant";
import { motion } from "motion/react";
export function Download() {
  return (
    <section className="px-6 py-28" id="download">
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} className="max-w-5xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 text-center bg-(--secondary-bg-color)">
          <p className="text-sm uppercase tracking-tight text-(--bg-color)">Get started</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">Bring COBIE to your terminal</h2>
          <p className="max-w-xl mx-auto mt-6 text-lg text-(--bg-color)">Install COBIE, set up your environment,and start working with your projects locally.</p>

          <div className="mt-10 max-w-xl mx-auto space-y-5">
            <div className="rounded-xl bg-(--dark-brown) p-6 text-left font-mono">
              <p className="text-xs text-white/50 mb-4">TERMINAL</p>
              <p className="text-white text-sm md:text-base">pip install cobie</p>
              <p className="text-(--accent-blue) text-sm mt-3 mb-3">After installing cobie enter cobie in terminal to activate it.</p>
              <p className="text-white text-sm md:text-base">cobie</p>
            </div>

            <p className="text-sm text-(--bg-color)">Install COBIE and enter cobie to activate COBIE and then add ur api key</p>

            <a
              href="https://github.com/XItizmgr/cobie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-xl font-semibold bg-(--accent-blue) text-(--dark-brown) hover:scale-105 transition-transform"
            >
              View Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
