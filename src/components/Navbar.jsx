import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../hooks/useTheme";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "CV", to: "/cv" },
    { label: "Contact", to: "/contact" },
];

const ThemeIcon = ({ theme }) => (
    <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
            <motion.svg
                key="sun"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </motion.svg>
        ) : (
            <motion.svg
                key="moon"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
        )}
    </AnimatePresence>
);

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <nav
                className="
          fixed top-0 left-0 w-full h-16 z-50
          bg-white/80 dark:bg-slate-950/80
          backdrop-blur
          border-b border-slate-200 dark:border-slate-800
        "
            >
                <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
                    <NavLink to="/" className="font-bold text-lg">
                        Bheru<span className="text-indigo-600">.</span>
                    </NavLink>

                    <div className="hidden md:flex gap-8 items-center">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition ${isActive
                                        ? "text-indigo-600 dark:text-indigo-400"
                                        : "text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="
                ml-2 w-9 h-9 rounded-full
                flex items-center justify-center
                bg-slate-200 dark:bg-slate-800
                text-slate-700 dark:text-slate-200
                transition
              "
                            aria-label="Toggle theme"
                        >
                            <ThemeIcon theme={theme} />
                        </button>
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="
                w-9 h-9 rounded-full
                flex items-center justify-center
                bg-slate-200 dark:bg-slate-800
                text-slate-700 dark:text-slate-200
              "
                        >
                            <ThemeIcon theme={theme} />
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="relative w-8 h-8 flex items-center justify-center"
                            aria-label="Toggle Menu"
                        >
                            <span
                                className={`absolute h-0.5 w-6 bg-slate-800 dark:bg-slate-200 transition-all duration-300
                  ${open ? "rotate-45" : "-translate-y-2"}
                `}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-slate-800 dark:bg-slate-200 transition-all duration-300
                  ${open ? "opacity-0" : ""}
                `}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-slate-800 dark:bg-slate-200 transition-all duration-300
                  ${open ? "-rotate-45" : "translate-y-2"}
                `}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
              fixed top-16 left-0 w-full z-40
              bg-white dark:bg-slate-950
              border-b border-slate-200 dark:border-slate-800
              md:hidden
            "
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.label}
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition"
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
