import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center space-y-12"
            >
                {/* Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        Let’s Build Something Meaningful
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Open to internships, freelance work, collaborations, and
                        engineering-focused conversations.
                    </p>
                </div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
                        mx-auto max-w-2xl
                        rounded-2xl
                        border border-slate-200 dark:border-slate-800
                        bg-white dark:bg-slate-900
                        p-8
                        space-y-5
                        shadow-sm
                        transition-all duration-300
                        hover:shadow-md hover:shadow-indigo-500/10
                    "
                >
                    <p className="text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                            Name:
                        </span>{" "}
                        Bheru Lal Meghwal
                    </p>

                    <p className="text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                            Education:
                        </span>{" "}
                        MCA Student, Mohanlal Sukhadia University
                    </p>

                    <p className="text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                            Email:
                        </span>{" "}
                        <a
                            href="mailto:pushkarmeghwanshi2003@gmail.com"
                            className="
                                text-indigo-600 dark:text-indigo-400
                                hover:underline
                                transition-colors duration-200
                            "
                        >
                            pushkarmeghwanshi2003@gmail.com
                        </a>
                    </p>

                    <p className="text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                            Phone:
                        </span>{" "}
                        <span className="text-indigo-600 dark:text-indigo-400">
                            +91 77280 55492
                        </span>
                    </p>
                </motion.div>

                {/* Closing Line */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-slate-500 dark:text-slate-500 text-sm max-w-2xl mx-auto"
                >
                    Whether you’re building a product, scaling a system, or just want to
                    exchange ideas — I’m always open to a good conversation.
                </motion.p>
            </motion.div>
        </section>
    );
}
