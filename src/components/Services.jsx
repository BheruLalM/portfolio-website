import { motion } from "framer-motion";

export default function Services() {
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
          space-y-12
        "
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                        What I Do
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl">
                        I design software systems first — then turn them into reliable,
                        scalable, working products.
                    </p>
                </div>

                <ul className="space-y-4">
                    {[
                        {
                            title: "Software & System Design",
                            desc: "Breaking down problems, designing architecture, defining data models, APIs, and system boundaries before implementation.",
                        },
                        {
                            title: "Full Stack Development",
                            desc: "Building end-to-end applications using React, FastAPI, and the MERN stack with a focus on clean, maintainable code.",
                        },
                        {
                            title: "Real-Time & Performance-Critical Systems",
                            desc: "Implementing real-time features like chat, streaming, and live updates with performance, scalability, and reliability in mind.",
                        },
                        {
                            title: "Applied AI / ML Integration",
                            desc: "Adding intelligent features such as recommendations, automation, and data-driven insights where they genuinely improve the product.",
                        },
                    ].map((item, index) => (
                        <motion.li
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="
                border border-slate-200 dark:border-slate-700
                bg-slate-50/80 dark:bg-slate-900/80
                backdrop-blur
                rounded-xl px-6 py-5
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md hover:shadow-indigo-500/10
              "
                        >
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.li>
                    ))}
                </ul>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
            rounded-2xl
            border border-indigo-200 dark:border-indigo-500/20
            bg-indigo-50/80 dark:bg-indigo-500/10
            backdrop-blur
            px-6 py-5
          "
                >
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                        My approach is simple:
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        Understand the problem → Design the system → Build cleanly →
                        Iterate and improve.
                    </p>
                </motion.div>

                <p className="font-medium text-indigo-600 dark:text-indigo-400">
                    From design thinking to a fully working product — I handle the journey.
                </p>
            </motion.div>
        </section>
    );
}
