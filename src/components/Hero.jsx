import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
    const roles = [
        "Backend Engineer",
        "System Design",
        "Full Stack Developer",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center"
            >
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                        Hi, I’m{" "}
                        <span className="inline-flex items-end">
                            <span
                                className="
                                    inline-block
                                    overflow-hidden
                                    whitespace-nowrap
                                    bg-gradient-to-r from-indigo-600 to-violet-600
                                    bg-clip-text text-transparent
                                    animate-typing
                                "
                            >
                                Bheru Lal
                            </span>
                            <span className="ml-1 w-[2px] h-[1em] bg-indigo-500 animate-blink" />
                        </span>
                        <br />
                        <span className="text-slate-700 dark:text-slate-400">
                            Software Engineer in the Making
                        </span>
                    </h1>

                    <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                        Full Stack Developer focused on{" "}
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                            system design
                        </span>
                        , clean architecture, and building scalable, real-world software.
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {[
                            "React",
                            "FastAPI",
                            "MERN Stack",
                            "System Design",
                            "Applied AI / ML",
                            "Backend Architecture",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="
                                    text-xs md:text-sm font-medium tracking-wide
                                    px-4 py-1.5 rounded-full
                                    border border-slate-200 dark:border-slate-700
                                    text-slate-700 dark:text-slate-300
                                    bg-white/60 dark:bg-slate-900/60
                                    backdrop-blur
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-indigo-400
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4 pt-4">
                        <Link
                            to="/projects"
                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 transition"
                        >
                            View Projects
                        </Link>

                        <Link
                            to="/contact"
                            className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-400 transition"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            relative
                            w-56 h-56 rounded-full
                            bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800
                            flex items-center justify-center
                            text-white
                            shadow-2xl shadow-indigo-500/40
                        "
                    >
                        <div className="absolute inset-0 rounded-full blur-xl bg-indigo-500/30 -z-10" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={roles[index]}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-center"
                            >
                                <p className="text-xs opacity-80 tracking-wide">&lt;/&gt;</p>
                                <p className="text-xl font-semibold">{roles[index]}</p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
