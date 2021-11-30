import React from "react";
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
        <nav>
          <button onClick={() => handleClick("en")}>English</button>
          <button onClick={() => handleClick("cro")}>Hrvatski</button>
        </nav>
        <p>{t("Thanks.1")}</p>
        <p>{t("Why.1")}</p>
      </div>
    </>
  );
}

export default TranslationContainer;
