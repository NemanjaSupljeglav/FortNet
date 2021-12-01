import React from "react";
import "./translation.css";
//Trans
import { useTranslation } from "react-i18next";
function TranslationContainer() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div>
        <nav className="wrapper-all-translation">
          <button
            onClick={() => handleClick("en")}
            className={
              t("HOME.1") === "HOME"
                ? "button-translation-select"
                : "button-translation"
            }
          >
            English
          </button>
          <button
            onClick={() => handleClick("cro")}
            className={
              t("HOME.1") === "NASLOVNA"
                ? "button-translation-select"
                : "button-translation"
            }
          >
            Hrvatski
          </button>
        </nav>
      </div>
    </>
  );
}

export default TranslationContainer;
