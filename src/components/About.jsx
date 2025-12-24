import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            className="
        min-h-screen
        flex items-center
        px-6
        bg-transparent
      "
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
          max-w-4xl mx-auto w-full
          py-20 md:py-28
          space-y-10
        "
            >
                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                        Who am I?
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
                        A quick snapshot of who I am, how I think, and what I build.
                    </p>
                </div>

                {/* Main Content */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg"
                >
                    I’m{" "}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                        Bheru Lal Meghwal
                    </span>
                    , a{" "}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                        Full Stack Developer
                    </span>{" "}
                    working with{" "}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                        React, FastAPI, and the MERN stack
                    </span>
                    . I focus on building software that is not only functional, but also
                    scalable, maintainable, and thoughtfully designed.
                    <br />
                    <br />
                    I enjoy breaking down complex problems, designing systems that scale,
                    and turning ideas into real, working products. I also explore{" "}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                        applied AI/ML
                    </span>{" "}
                    to add intelligent, data-driven capabilities where they truly add
                    value — preferably with coffee nearby.
                </motion.p>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-4"
                >
                    {[
                        {
                            title: "Engineering Mindset",
                            desc: "I think in terms of systems, trade-offs, and long-term maintainability.",
                        },
                        {
                            title: "End-to-End Ownership",
                            desc: "From system design to implementation and iteration.",
                        },
                        {
                            title: "Clean & Scalable Code",
                            desc: "Readable, structured code that scales with product growth.",
                        },
                        {
                            title: "Continuous Learning",
                            desc: "Actively improving in system design, backend architecture, and AI.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="
                rounded-xl
                border border-slate-200 dark:border-slate-800
                bg-slate-50/80 dark:bg-slate-900/80
                backdrop-blur
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md hover:shadow-indigo-500/10
              "
                        >
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
