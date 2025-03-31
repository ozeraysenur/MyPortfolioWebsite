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
      <button onClick={() => dispatch(changeLanguage("en"))} disabled={language === "en"} className=" text-sm font-bold text-text">
        SWITCH TO <span className="text-primary">ENGLISH</span>
      </button>
      :
      <button onClick={() => dispatch(changeLanguage("tr"))} disabled={language === "tr"} className=" py-3 text-sm font-bold text-text">
        <span className="text-primary">TÜRKÇE</span>'YE GEÇ
      </button>}
    </div>
  );
};

export default LanguageSwitcher;
