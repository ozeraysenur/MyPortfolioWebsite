import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/actions/langActions";

const LanguageSwitcher = () => {
    const language = useSelector((state) => state.language.language);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(changeLanguage("en"))}>
                English
            </button>
            <button onClick={() => dispatch(changeLanguage("tr"))}>
                Türkçe
            </button>
        </div>
    );
};

export default LanguageSwitcher;
