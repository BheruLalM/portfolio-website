import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useTheme();

    useEffect(() => {
        // Check if script is already added to avoid duplicates
        const scriptId = "BDLpqfja5rEScRaMfA2rE";
        const existingScript = document.getElementById(scriptId);

        // If script exists, we might need to remove it to re-initialize with new theme
        // However, frequent removing/adding might be jarring.
        // Let's try to append the theme to the src.

        if (existingScript) {
            existingScript.remove();
            // Also remove the Chatbase iframe if it exists to force reload
            const iframe = document.getElementById("chatbase-bubble-window");
            if (iframe) iframe.remove();
        }

        (function () {
            if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...args) => {
                    if (!window.chatbase.q) {
                        window.chatbase.q = [];
                    }
                    window.chatbase.q.push(args);
                };
                window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                        if (prop === "q") {
                            return target.q;
                        }
                        return (...args) => target(prop, ...args);
                    },
                });
            }
            const onLoad = function () {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = scriptId;
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
            };
            if (document.readyState === "complete") {
                onLoad();
            } else {
                window.addEventListener("load", onLoad);
            }
        })();
    }, [theme]);

    const toggleChatbot = () => {
        if (!window.chatbase) return;

        if (isOpen) {
            window.chatbase("close");
        } else {
            window.chatbase("open");
        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <style>
                {`
          #chatbase-bubble-button {
            display: none !important;
          }
        `}
            </style>
            <button
                onClick={toggleChatbot}
                className="fixed bottom-5 right-5 z-50 p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer
                    bg-indigo-600 dark:bg-indigo-600 
                    text-white 
                    hover:bg-indigo-700 dark:hover:bg-indigo-500
                    hover:scale-105"
                aria-label="Toggle Chatbot"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    )}
                </svg>
            </button>
        </>
    );
};

export default Chatbot;


