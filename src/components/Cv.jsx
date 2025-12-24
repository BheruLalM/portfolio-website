import { motion } from "framer-motion";
import { useState } from "react";

export default function CV() {
    const [showCV, setShowCV] = useState(false);

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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
          max-w-5xl mx-auto w-full
          py-20 md:py-28
          space-y-16
        "
            >
                <div className="text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Bheru Lal Meghwal
                    </h1>

                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Software Engineer (Backend-Focused) · Full Stack Developer
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Udaipur, Rajasthan · +91 7728055492 · meghbheru71@gmail.com
                    </p>

                    <div className="flex justify-center gap-4 text-sm">
                        <a
                            href="https://github.com/BheruLalM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            GitHub
                        </a>
                        <span className="text-slate-400">•</span>
                        <a
                            href="https://www.linkedin.com/in/bheru-lal-meghwal-a667a937b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Backend-focused Software Engineer and MCA student with a strong
                        interest in system design and backend architecture. I actively
                        build projects to understand how real-world systems are designed,
                        implemented, and scaled, focusing on clean architecture,
                        data flow, and scalability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Programming Languages",
                            items: ["Python", "JavaScript", "Java", "C", "SQL"],
                        },
                        {
                            title: "Frameworks & Libraries",
                            items: ["React", "FastAPI", "Express.js", "Tailwind CSS"],
                        },
                        {
                            title: "Databases & Caching",
                            items: ["PostgreSQL", "MongoDB", "Redis"],
                        },
                        {
                            title: "Tools & Technologies",
                            items: [
                                "Git & GitHub",
                                "REST APIs",
                                "Docker",
                                "Postman",
                                "VS Code",
                            ],
                        },
                    ].map((group) => (
                        <div
                            key={group.title}
                            className="
                rounded-xl
                border border-slate-200 dark:border-slate-800
                bg-slate-50/80 dark:bg-slate-900/80
                backdrop-blur
                p-6
              "
                        >
                            <h3 className="font-semibold mb-3">{group.title}</h3>
                            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                {group.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-bold">Projects</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold">EduStore</h3>
                            <p className="text-sm text-slate-500 mb-2">
                                React · FastAPI · Express · PostgreSQL · MongoDB · Redis · JWT
                            </p>
                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                <li>Designed complete system architecture and data flow</li>
                                <li>Performed scalability analysis using assumptions</li>
                                <li>Created SOLID-based LLD and class diagrams</li>
                                <li>Designed sequence diagrams for request flow</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold">FilmiWorld</h3>
                            <p className="text-sm text-slate-500 mb-2">
                                React · Express.js · MongoDB
                            </p>
                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                <li>Built full application from design to implementation</li>
                                <li>Implemented REST APIs and frontend integration</li>
                                <li>Used AI tools to accelerate learning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Education</h2>

                    <div>
                        <p className="font-medium">
                            Master of Computer Applications (MCA)
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Mohanlal Sukhadia University, Udaipur · 2024–2026 · CGPA: 7.5
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">
                            Bachelor of Science (B.Sc.) in Computer Science
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            University College of Science (MLSU), Udaipur · 2021–2024 · 68.70%
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-3">
                        Certifications & Participation
                    </h2>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>Smart India Hackathon – College internal round qualified</li>
                        <li>NVIDIA Deep Learning Course (9 hours)</li>
                        <li>iOS App Development – Training participation</li>
                    </ul>
                </div>

                <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => setShowCV(!showCV)}
                            className="px-6 py-3 rounded-xl border hover:text-indigo-600 transition"
                        >
                            {showCV ? "Hide CV Preview" : "View Original CV (PDF)"}
                        </button>

                        <a
                            href="/Bheru_cv.pdf"
                            download
                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            Download CV
                        </a>
                    </div>

                    {showCV && (
                        <div className="w-full h-[80vh] rounded-xl overflow-hidden border">
                            <iframe
                                src="/Bheru_cv.pdf"
                                className="w-full h-full"
                                title="Bheru Lal Meghwal CV"
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
