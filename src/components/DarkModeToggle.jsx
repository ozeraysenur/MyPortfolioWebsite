import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex justify-end items-center my-4 px-4 gap-2">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-16 h-8 flex items-center bg-[#EEEBFF] dark:bg-[#3730A3] rounded-full p-1 transition duration-300"
            >
                <div
                    className={`w-6 h-6 bg-white dark:bg-[#ffe86e] rounded-full shadow-md transform transition duration-300 ${
                        darkMode ? "translate-x-8" : "translate-x-0"
                    }`}
                />
            </button>
            <span className="text-gray-500 dark:text-gray-500 text-sm font-semibold pr-10">
                {darkMode ? "LIGHT MODE" : "DARK MODE"}
            </span>
        </div>
    );
};

export default DarkModeToggle;
