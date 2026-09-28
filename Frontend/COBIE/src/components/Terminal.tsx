import { sectionAnimation } from "./variant";
import {motion} from "motion/react"
export function Terminal() {
  return (
    <section className="px-6 py-28">
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{amount:0.2}} className="max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border(--border-color) shadow-xl bg-(--dark-brown)">
          <div className="px-5 py-3 border-b border-(--light-brown)">
            <span className="text-2xl font-semibold text-(--btn-bg-color)">Cobie</span>
          </div>
          <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
            <p className="text-(--btn-bg-color)"># cobie</p>
            <p className="text-white mt-3">Welcome to COBIE</p>
            <p className="text-gray-400">Your local AI coding agent</p>
            <p className="text-(--accent-blue) mt-5">   &gt; inspect this project</p>
            <p className="text-gray-400 mt-3">[Tool] list_directory(".")</p>
            <p className="text-gray-400">[Tool] read_file("README.md")</p>
            <p className="text-green-400 mt-3">Project inspected successfully</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
