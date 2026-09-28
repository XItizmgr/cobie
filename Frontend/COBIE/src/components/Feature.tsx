import { sectionAnimation } from "./variant";
import {motion} from "motion/react"
const features = [
  {
    title: "Read Your files",
    description: "Inspect source code, configuration files, documentation, and other project files.",
  },
  {
    title: "Search your project",
    description: "Find code and text across your project without manually opening every file.",
  },
  {
    title: "Run commands",
    description: "Execute terminal commands directly through the coding agent",
  },
  {
    title: "Can work with git",
    description: "Inspect Git status, review the current diff from your terminal.",
  },
];

export function Feature() {
  return (
    <section id="feature" className="px-6 py-28">
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{once:true , amount:0.2}} className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-2xl font-semibold uppercase tracking-tight text-(--accent-blue)">Features</p>
          <h2 className="mt-4 text-4xl font-semibold text-(--main-heading-textBg)">Tools for working with real projects.</h2>
        </div>
        <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{once:true , amount:0.2}} className="grid sm:grid-cols-2 gap-5  mt-14">
          {features.map((feature) => (
            <motion.div whileHover={{y:-2}} 
              key={feature.title}
              className="p-7 rounded-2xl border border-(--border-color)bg-(--bg-color) 
              hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-(--logo-color) "> {feature.title}</h3>
                <p className="mt-3 leading-relaxed text-(--text-color)">
                    {feature.description}
                </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
