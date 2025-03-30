import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/actions/langActions";

const LanguageSwitcher = () => {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`Dil değişti: ${language}`);
  }, [language]); 

  return (
    <div>
      {language == "tr" ? 
      <button onClick={() => dispatch(changeLanguage("en"))} disabled={language === "en"} className="px-3 py-3 text-sm font-semibold text-gray-500">
        SWITCH TO <span className="text-[#3730A3] ">ENGLISH</span>
      </button>
      :
      <button onClick={() => dispatch(changeLanguage("tr"))} disabled={language === "tr"} className="px-3 py-3 text-sm font-semibold text-gray-500">
        <span className="text-[#3730A3]">TÜRKÇE</span>'YE GEÇ
      </button>}
    </div>
  );
};

export default LanguageSwitcher;
