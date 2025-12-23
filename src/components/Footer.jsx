export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

                <div className="text-center md:text-left leading-tight">
                    <p className="text-sm font-semibold">
                        Bheru Lal Meghwal
                    </p>
                    <p className="text-xs text-slate-500">
                        Software Engineer · Full Stack Developer
                    </p>
                </div>

                <div className="flex gap-5 text-xs">
                    <a href="/projects" className="hover:text-indigo-600">Projects</a>
                    <a href="/cv" className="hover:text-indigo-600">CV</a>
                    <a href="/contact" className="hover:text-indigo-600">Contact</a>
                </div>

                <div className="text-center md:text-right leading-tight text-[11px] text-slate-500 pt-28 pb-10">
                    <p>© {new Date().getFullYear()}</p>
                    <p>
                        Created by <span className="font-medium">Bheru Lal Meghwal</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}
