import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "CV", to: "/cv" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="
        fixed top-0 left-0 w-full h-16 z-50
        bg-white/80 dark:bg-slate-950/80
        backdrop-blur
        border-b border-slate-200 dark:border-slate-800
      ">
                <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* Logo */}
                    <NavLink to="/" className="font-bold text-lg">
                        Bheru<span className="text-indigo-600">.</span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {navItems.map(item => (
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
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden relative w-8 h-8 flex items-center justify-center"
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
            </nav>

            {/* MOBILE MENU */}
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
                            {navItems.map(item => (
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
