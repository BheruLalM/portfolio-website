import { NavLink } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "CV", to: "/cv" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="font-bold text-lg">
                    Bheru<span className="text-indigo-600">.</span>
                </NavLink>

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
            </div>
        </nav>
    );
}
