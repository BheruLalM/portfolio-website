import { motion } from "framer-motion";

const projects = [
    {
        name: "EduStore",
        date: "In Progress",
        desc: "An educational platform designed around scalable backend architecture, role-based access, and structured learning resource management.",
    },
    {
        name: "FilmiWorld",
        date: "In Progress",
        desc: "A movie and entertainment discovery platform focused on metadata modeling, search, and a smooth, streaming-inspired user experience.",
    },
];

export default function Projects() {
    return (
        <section className="py-28 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                        Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                        Selected projects currently under active development — focused on
                        real-world problems, system design, and scalability.
                    </p>
                </div>

                {/* Projects List */}
                <div className="grid gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="
                                group relative
                                border border-slate-200 dark:border-slate-800
                                bg-white dark:bg-slate-900
                                rounded-2xl p-7
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:shadow-xl hover:shadow-indigo-500/10
                            "
                        >
                            {/* Index + Status */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    {p.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-3 text-slate-900 dark:text-slate-100">
                                {p.name}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                {p.desc}
                            </p>

                            {/* Progress Indicator */}
                            <div
                                className="
                                    mt-6 flex items-center gap-2
                                    text-sm font-medium
                                    text-indigo-600 dark:text-indigo-400
                                "
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                                </span>
                                Actively Building
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-slate-500 dark:text-slate-400 text-sm max-w-3xl"
                >
                    These projects are intentionally kept private while I focus on system
                    design, architecture decisions, and building them the right way.
                </motion.p>
            </div>
        </section>
    );
}
