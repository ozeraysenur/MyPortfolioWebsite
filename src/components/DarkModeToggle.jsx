import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";

const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

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
        <div className="flex justify-end items-center my-4 px-16 gap-4 ">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-16 h-8 flex items-center bg-[#EEEBFF] dark:bg-[#3730A3] rounded-full p-1 transition duration-300"
            >
                <div
                    className={"w-6 h-6 bg-white dark:bg-[#ffe86e] rounded-full shadow-md transform transition duration-300"}
                />
            </button>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                {darkMode ? "DARK MODE" : "LIGHT MODE"}
            </span>
            <div className="w-[1px] h-6 bg-gray-400"></div>
            <LanguageSwitcher />
        </div>
    );
    
};

export default DarkModeToggle;
